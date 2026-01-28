'use client'

import type { ReactNode } from 'react'

interface Card {
    title: string
    description: string
    icon?: ReactNode
    action?: ReactNode
}

interface FocusCardsProps {
    cards: Card[]
}

export function FocusCards({ cards }: FocusCardsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="group relative items-center justify-center overflow-hidden rounded-none bg-[#101826] border border-white/10 transition-colors duration-300 ease-out hover:border-accent-warm"
                >
                    <div className="p-8 h-full flex flex-col">
                        {/* Header */}
                        <div className="mb-4 text-accent-warm opacity-80">
                            {card.icon}
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-2 transition-colors group-hover:text-accent-warm">
                            {card.title}
                        </h3>

                        <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                            {card.description}
                        </p>

                        {/* Bottom Action Area */}
                        {card.action && (
                            <div className="mt-auto pt-4 border-t border-white/5 transition-opacity duration-300 opacity-50 group-hover:opacity-100">
                                {card.action}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}
