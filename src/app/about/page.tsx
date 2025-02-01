"use client"; // Required only in Next.js App Router
import { useState, useEffect } from "react";

const AboutMe = () => {
    const fullText = `\tSoftware Engineer,\n\tExpert google searcher,\n\t3D Modeller,\n\tAnimator,\n\tRigger,\n\tMechanical Engineer,\n\tFamily Printer Technician`;
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const typingSpeed = 50; // Speed of typing (ms per letter)

    useEffect(() => {
        const textToType = "ABOUT {" + fullText + "}";

        // If currentIndex is less than the length of the textToType, continue typing
        if (currentIndex < textToType.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + textToType[currentIndex]);
                setCurrentIndex(currentIndex + 1);
            }, typingSpeed);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    return (
        <div className="flex flex-col justify-center items-start min-h-screen text-white font-mono">
            {/* Dynamically typed "ABOUT" */}
            <h1 className="text-4xl text-yellow-400 ml-8 inline">
                {displayedText.includes("ABOUT") && "ABOUT"}
            </h1>

            {/* Dynamically typed "{}" */}
            <h1 className="text-4xl text-green-400 ml-8 inline">
                {displayedText.includes("{") && "{"}
            </h1>
            
            {/* Dynamically typed content inside the brackets */}
            <div className="whitespace-pre text-lg ml-8">
                {displayedText.replace("ABOUT {", "").replace("}", "")} {/* Remove brackets from dynamic text */}
                <span className="animate-blink">|</span> {/* Blinking cursor */}
            </div>

            <h1 className="text-4xl text-green-400 ml-8 inline">
                {displayedText.includes("}") && "}"}
            </h1>
        </div>
    );
};

export default AboutMe;
