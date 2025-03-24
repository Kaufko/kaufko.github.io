"use client";
import { motion } from "framer-motion";

const HomeText = `Hey, I'm Filip A.K.A Kaufko online. I'm a self-taught programmer, who loves to do engineer stuff. I'm guessing you're here to see some of my projects, or perhaps contact me`;
const Landing = () => {


  return (
    <div>
      <motion.div className="text-xl flex lg:justify-center lg:items-center lg:min-h-screen lg:top-1/2 lg:absolute lg:-translate-y-1/2 lg:right-0 sm:w-[100vw] lg:w-[40vw] sm:relative px-8 pb-10"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        {HomeText}
      </motion.div>
    </div>
  );
};

export default Landing;
