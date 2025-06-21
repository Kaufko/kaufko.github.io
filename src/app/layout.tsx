import type { Metadata } from 'next'

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
                        <h1 className="font-bold max-lg:text-xs">This website is under construction.. Come back later!</h1>
                    </div>
                </header>
                {children}
            </body>
        </html>
    )
}