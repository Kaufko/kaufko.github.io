import Image from 'next/image';

const Projects = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen text-center p-6">
            <h1 className="text-4xl mb-6">Recycle bin shortcut</h1>
            <div className="relative w-full max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] p-4">
                <button className="absolute -left-5 top-1/2 -translate-y-1/2 text-4xl flex items-center">
                    &#60;
                </button>

                <Image
                    src="/img.png"
                    alt="Project Image"
                    width={1000}
                    height={1000}
                    layout="responsive"
                    objectFit="contain"
                />

                <button className="absolute -right-5 top-1/2 -translate-y-1/2 text-4xl flex items-center">
                    &#62;
                </button>
            </div>
        </main>
    );
};

export default Projects;
