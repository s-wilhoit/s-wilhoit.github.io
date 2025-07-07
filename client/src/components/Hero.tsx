import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const decorativeElement1 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.1,
      transition: { duration: 1, delay: 0.5 },
    },
  };

  const decorativeElement2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.1,
      transition: { duration: 1, delay: 0.7 },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-harvard z-0"
        variants={decorativeElement1}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-policy z-0"
        variants={decorativeElement2}
        initial="hidden"
        animate="visible"
      />
      {/* Hero content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="reveal opacity-0 translate-y-8"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <h4 className="font-montserrat text-harvard mb-2">Hi, I'm</h4>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-dark leading-tight mb-6">
              Samantha Wilhoit
            </h1>
            <h2 className="font-playfair text-3xl text-dark opacity-80 mb-8">
              Crafting stories through{" "}
              <span className="text-harvard">education</span>{" and "}
              <span className="text-consulting">policy</span> guidance.
            </h2>
            <p className="text-lg mb-10 max-w-lg">
            Harvard graduate with a passion for helping others navigate complex systems and find their authentic path forward.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#pathways"
                className="hover:bg-opacity-90 text-white font-montserrat font-semibold py-3 px-8 rounded-full inline-flex items-center justify-center transition-all bg-[#800]"
              >
                Discover My Story <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="border-2 border-dark hover:border-harvard hover:text-harvard text-dark font-montserrat font-semibold py-3 px-8 rounded-full inline-flex items-center justify-center transition-all"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>

          {/* Hero image with decorative elements */}
          <motion.div
            className="relative reveal opacity-0 translate-y-8"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <img
              src="src/assets/headshot.png"
              alt="Portrait with Harvard in background"
              className="rounded-3xl shadow-2xl w-full max-w-md mx-auto object-cover aspect-square z-10 relative"
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full z-0 bg-[#e7dedf]" style={{backgroundColor: '#eaf2d7'}}></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full z-0 bg-[#e7dedf]" style={{backgroundColor: '#eaf2d7'}}></div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-16"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <div className="scroll-indicator">
            <ChevronDown className="text-harvard text-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
