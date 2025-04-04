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
                <header className="fixed top-0 z-50 w-full">
                    <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
                        <h1 className="font-bold max-lg:text-xs">Filip H.</h1>
                        <nav>
                            <ul className="flex lg:space-x-6">
                                <li className="route-header-li">
                                    <Link href="/" className="route-header-link">Home</Link>
                                </li>
                                <li className="route-header-li">
                                    <Link href="/projects" className="route-header-link">Projects</Link>
                                </li>
                                <li className="route-header-li">
                                    <Link href="/about" className="route-header-link">About</Link>
                                </li>

                            </ul>
                        </nav>
                        <ul>
                            <li className="route-header-li">
                                <Link href="/contact" className="route-header-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </header>
                {children}
            </body>
        </html>
    )
}