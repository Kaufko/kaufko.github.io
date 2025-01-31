import Link from "next/link";

const Landing = () => {
    return (
        <header className="bg-gray-900 text-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo / Name */}
                <h1 className="text-2xl font-bold">Filip Heřmánek</h1>

http://62.245.87.239:25565/projects                {/* Navigation */}
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/" className="hover:text-gray-400">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="hover:text-gray-400">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-gray-400">
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-gray-400">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Landing;