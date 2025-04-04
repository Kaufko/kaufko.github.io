"use client";
import { motion } from "framer-motion";

const HomeText = `Hey, I'm Filip. I make websites, and 3D models`;
const LocationText = `Based in the Czech Republic`;
const Landing = () => {


    return (
        <div className="bg-center bg-cover bg-no-repeat min-h-screen bg-[url('/images/bg2.png')]">
            <motion.div className="flex min-h-screen flex-col justify-center text-center"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <ul className="flex flex-col justify-between">
                    <li className="font-bold lg:p-5 lg:text-xl max-lg:p-1 max-lg:text-sm">
                        {LocationText}
                    </li>
                    <li className="lg:text-5xl max-lg:text-2xl">
                        Quality <strong className="text-[var(--highlight-midsat)]">web design &  model <br></br> topology</strong> techniques
                    </li>
                    <li className="lg:p-5 max-lg:p-1 max-lg:text-xs">
                        {HomeText}
                    </li>
                    
                </ul>
                
            </motion.div>
        </div>
    );
};

export default Landing;
