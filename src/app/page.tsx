"use client";
import { motion } from "framer-motion";

const HomeText = `Hey, I'm Filip. I make websites, and 3D models`;
const LocationText = `Based in the Czech Republic`;
const Landing = () => {


    return (
        <div className="">
            <motion.div className="flex min-h-screen flex-col justify-center text-center"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <ul className="flex flex-col justify-between">
                    <li className="p-5 text-xl font-bold">
                        {LocationText}
                    </li>
                    <li className="text-5xl">
                        Quality <strong className="text-[var(--highlight-midsat)]">web design &  model <br></br> topology</strong> techniques
                    </li>
                    <li className="p-5">
                        {HomeText}
                    </li>
                    
                </ul>
                
            </motion.div>
        </div>
    );
};

export default Landing;
