const contact = () => {
    const emailText = `E-mail: filip.hermanek2@gmail.com`;
    const discordText = `Discord: Kaufko`;
    return (
        <main>
            <div className="font-mono ml-20 mt-40 absolute">
                <h1 className="text-3xl">Want to get in contact?</h1>
                <section className="mt-20 text-lg">
                    <h3 className="text-xl">Contact me manually by:</h3>
                    <ul className="list-disc list-inside">
                        <li>{emailText}</li>
                        <li>{discordText}</li>
                    </ul>
                </section>
                <section>

                </section>
            </div>
        </main>

    );
};

export default contact;
