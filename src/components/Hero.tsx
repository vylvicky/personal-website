import { motion } from "framer-motion";
import aldrichPhoto from "@/assets/Aldrich_Photo-2.jpg";
import letteringWhite from "@/assets/lettering-white.svg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex flex-col md:flex-row items-stretch">
      {/* Mobile photo - shown above intro on small screens */}
      <div className="block md:hidden w-full h-[50vh] relative overflow-hidden">
        <img src={aldrichPhoto} alt="Aldrich" className="absolute inset-0 w-full h-full object-cover object-bottom" />
      </div>

      {/* Text overlay */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-12 md:py-0 bg-foreground">

        <motion.img
          src={letteringWhite}
          alt="Vicky Liu lettering"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="w-24 md:w-32 mb-4" />


        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-background leading-[0.95] tracking-tight">

          Vicky Liu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-xl md:text-2xl font-display font-semibold text-primary tracking-tight">Connecting technology, media, and culture


        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-base md:text-lg text-secondary font-body leading-relaxed max-w-lg">

          I drive growth and build networks in creative, fast-moving industries. Whether I'm shaping strategic AI initiatives or brainstorming cartoon ideas, my North Star is to spark joy wherever I go.                 
        

        </motion.p>

      </div>

      {/* Desktop photo */}
      <div className="hidden md:block w-[40%] lg:w-[45%] relative overflow-hidden">
        <img src={aldrichPhoto} alt="Aldrich" className="absolute inset-0 w-full h-full object-cover object-bottom" />
      </div>
    </section>);

};

export default Hero;