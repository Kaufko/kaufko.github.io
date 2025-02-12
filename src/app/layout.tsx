import type { Metadata } from 'next'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
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
                <Menu>
                    <header className="relative w-full z-50 top-0">
                        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                            <h1 className="lg:text-2xl font-bold">Filip H.</h1>
                            <nav>
                                <ul className="flex space-x-6">
                                    <li className="bg-transparent border-4 px-1 border-solid rounded-full border-indigo-800/50">
                                        <Link href="/" className="block transition duration-300 ease-in-out hover:shadow-[0px_0px_20px_5px_rgba(75,0,130,0.7)]">Home</Link>
                                    </li>
                                    <li className="bg-transparent border-4 px-1 border-solid rounded-full border-indigo-800/50">
                                        <Link href="/projects" className="block transition duration-300 ease-in-out hover:shadow-[0px_0px_20px_5px_rgba(75,0,130,0.7)]">Projects</Link>
                                    </li>
                                    <li className="bg-transparent border-4 px-1 border-solid rounded-full border-indigo-800/50">
                                        <Link href="/about" className="block transition duration-300 ease-in-out hover:shadow-[0px_0px_20px_5px_rgba(75,0,130,0.7)]">About Me</Link>
                                    </li>
                                    <li className="bg-transparent border-4 px-1 border-solid rounded-full border-indigo-800/50">
                                        <Link href="/contact" className="block transition duration-300 ease-in-out hover:shadow-[0px_0px_20px_5px_rgba(75,0,130,0.7)]">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                </Menu>
                {children}
            </body>
        </html>
    )
}
