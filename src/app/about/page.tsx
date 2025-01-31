"use client"; // Required only in Next.js App Router
import { useState, useEffect } from "react";

const AboutMe = () => {
    const fullText = `Software Engineer,\n3D Modeller,\nAnimator,\nRigger,\nMechanical Engineer,\nFamily Printer Technician`;
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const typingSpeed = 50; // Speed of typing (ms per letter)

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + fullText[currentIndex]);
                setCurrentIndex(currentIndex + 1);
            }, typingSpeed);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    return (
        <div className="text-white font-mono">
            <h1 className="text-4xl text-yellow-400">ABOUT {"{"}</h1>
            <div className="ml-8 whitespace-pre text-lg">
                {displayedText}
                <span className="animate-blink">|</span> {/* Blinking cursor */}
            </div>
            <h1 className="text-4xl text-yellow-400">{"}"}</h1>
        </div>
    );
};

export default AboutMe;
