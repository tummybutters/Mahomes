'use client'

import Image from 'next/image'
import type { ReactNode } from 'react'
import { MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface MockTransactionMetric {
    label: string
    value: string
    icon?: ReactNode
}

export interface TransactionCardProps {
    type: string
    title: string
    amount: string
    location: string
    date: string
    metrics: MockTransactionMetric[]
    imageUrl?: string
    className?: string
}

export function TransactionCard({
    type,
    title,
    amount,
    location,
    date,
    metrics,
    imageUrl,
    className,
}: TransactionCardProps) {
    return (
        <div
            className={cn(
                "group relative w-full overflow-hidden bg-[#0e141f] border border-white/10 rounded-none cursor-pointer transition-transform duration-300 hover:-translate-y-[5px]", // Sharp corners
                className
            )}
        >
            {/* Image / Gradient Background Area */}
            {/* Aspect Ratio Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
                {/* Placeholder Gradient if no image */}
                <div className={cn(
                    "absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900",
                    !imageUrl && "opacity-100",
                    imageUrl && "opacity-0"
                )} />

                {/* Actual Image (Mocked with a colored div for now if url provided, or use next/image ideally) */}
                {imageUrl && (
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                )}

                {/* Overlay Gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e141f] via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

                {/* Seal / Date Badge - Top Right */}
                <div className="absolute top-4 right-4 h-16 w-16 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center p-1">
                    <div className="text-[10px] font-mono text-center leading-tight text-white/80">
                        <span className="block text-[8px] uppercase tracking-wider opacity-60">Closed</span>
                        {date}
                    </div>
                </div>

                {/* Badge - Top Left */}
                <div className="absolute top-4 left-0">
                    <div className="bg-white text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                        Just Funded
                    </div>
                </div>

                {/* Main Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-1">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-accent-warm/80 font-medium">{type}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-2 tracking-tight">{amount}</h3>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-4 gap-2 mt-4 border-t border-white/10 pt-4">
                        {/* LTV / Metris 1 */}
                        {metrics.map((m, i) => (
                            <div key={i} className="flex flex-col">
                                <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-white/50 mb-1">
                                    {m.icon && <span className="[&>svg]:w-3 [&>svg]:h-3">{m.icon}</span>}
                                    {m.label}
                                </div>
                                <span className="text-sm font-medium text-white">{m.value}</span>
                            </div>
                        ))}

                        {/* Location (always last column usually, or separate row) */}
                    </div>
                    <div className="flex items-center gap-1 mt-4 text-xs text-white/60">
                        <MapPin className="w-3 h-3 text-accent-warm" />
                        {location}
                    </div>
                </div>
            </div>
        </div>
    )
}
