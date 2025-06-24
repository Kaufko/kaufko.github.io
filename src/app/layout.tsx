import type { Metadata } from 'next'
import Link from "next/link";

import './globals.css'

export const metadata: Metadata = {
    title: 'Filip - Programmer and avid hobbyist',
    description: 'Self-taught programmer motivated by creating cool personal projects. Master at googling and stackoverflow.',

}

export default function RootLayout({ children, }:
    {
        children: React.ReactNode
    }
) {
    return (
        <html lang="en">
            <body>
                <section className="snap-start h-screen" id="snap-section">
                {children}
                </section>
            </body>
        </html>
    )
}