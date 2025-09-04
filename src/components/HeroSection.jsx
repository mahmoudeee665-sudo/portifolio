import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-violet-900  flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
      {/* left section */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6 font-sans"
        >
          Building Fast <br /> <span className="text-transparent bg-clip-text bg-gradient-to-tl from-purple-700 to-violet-300  ">Reliable Results</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className=" font-sans text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl"
        >
          I’m a passionate Frontend Developer who loves crafting sleek,
          responsive, and interactive web experiences. With a focus on React,
          Tailwind CSS, and modern tools, I turn ideas into fast and reliable
          user interfaces that blend performance with design.
        </motion.p>
      </div>
      {/* right section */}
      <Spline
        className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
        scene="https://prod.spline.design/NNQjK5RJlLdWlR1d/scene.splinecode"
      />
    </section>
  );
};

export default HeroSection;
