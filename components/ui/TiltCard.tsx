'use client'

import type { MouseEvent } from 'react'
import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface TiltCardProps {
    children: React.ReactNode
    className?: string
}

export function TiltCard({ children, className }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null)
    const frameRef = useRef<number | null>(null)
    const reduceMotionRef = useRef(false)

    useEffect(() => {
        const media = window.matchMedia('(prefers-reduced-motion: reduce)')
        reduceMotionRef.current = media.matches
        const handler = () => {
            reduceMotionRef.current = media.matches
            if (reduceMotionRef.current && ref.current) {
                ref.current.style.setProperty('--tilt-x', '0deg')
                ref.current.style.setProperty('--tilt-y', '0deg')
            }
        }
        media.addEventListener('change', handler)
        return () => media.removeEventListener('change', handler)
    }, [])

    useEffect(() => {
        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current)
            }
        }
    }, [])

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return
        if (reduceMotionRef.current) return

        const rect = ref.current.getBoundingClientRect()

        const width = rect.width
        const height = rect.height

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        if (frameRef.current) {
            cancelAnimationFrame(frameRef.current)
        }

        frameRef.current = requestAnimationFrame(() => {
            if (!ref.current) return
            const rotateX = (-yPct * 17.5).toFixed(2)
            const rotateY = (xPct * 17.5).toFixed(2)
            ref.current.style.setProperty('--tilt-x', `${rotateX}deg`)
            ref.current.style.setProperty('--tilt-y', `${rotateY}deg`)
        })
    }

    const handleMouseLeave = () => {
        if (!ref.current) return
        ref.current.style.setProperty('--tilt-x', '0deg')
        ref.current.style.setProperty('--tilt-y', '0deg')
    }

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn("relative group/tilt tilt-card", className)}
        >
            <div
                className="absolute inset-0 rounded-none bg-gradient-to-br from-accent-warm/20 to-accent-primary/20 opacity-0 group-hover/tilt:opacity-100 transition-opacity duration-500 blur-xl -z-10 tilt-card-glow"
            />
            {children}
        </div>
    )
}
