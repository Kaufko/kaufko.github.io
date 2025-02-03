import type { Metadata } from 'next'
import Link from "next/link";
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
            <body>
                <header className="bg-gray-900 fixed w-full z-50">
                    <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                        <h1 className="text-2xl font-bold">Filip H.</h1>
                        <nav>
                            <ul className="flex space-x-6">
                                <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
                                <li><Link href="/projects" className="hover:text-gray-600">Projects</Link></li>
                                <li><Link href="/about" className="hover:text-gray-600">About Me</Link></li>
                                <li><Link href="/contact" className="hover:text-gray-600">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                {children}
            </body>
        </html>
    )
}