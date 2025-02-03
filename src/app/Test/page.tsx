"use client"; // Required only in Next.js App Router
import { motion } from "framer-motion";

const AboutMe = () => {
    const aboutMeText = `Hi, I'm Filip Heřmánek, A.K.A Kaufko. I love tech both in the computer and mechanical world. I've been playing around with computers since the age of 7. Right now I'm learning C#, Javascript, Typescript, Windtail and React`;

    return (
        <main>
            <motion.div
                className="fixed text-white right-0 top-1/2 -translate-y-1/2 bg-blue-500 p-4 ">
                <p>{aboutMeText}</p>
            </motion.div>
        </main>
    );
};

export default AboutMe;
