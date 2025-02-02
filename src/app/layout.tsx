import type { Metadata } from 'next'

// These styles apply to every route in the application
import './globals.css'

export const metadata: Metadata = {
    title: 'Filip - Programmer and avid hobbyist',
    description: 'Self-taught programmer motivated by creating cool personal projects. Master at googling and stackoverflow.',
}

export default function RootLayout({ children, }:
    {
        children: React.ReactNode
    }
)

{
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}