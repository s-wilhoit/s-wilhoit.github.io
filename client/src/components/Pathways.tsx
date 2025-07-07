import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Pathways() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerCards = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const pathCard = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="pathways" className="py-20 min-h-screen flex items-center relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          className="reveal opacity-0 translate-y-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4">What are you interested in?</h2>
          <p className="text-center text-lg max-w-4xl mx-auto mb-16">
            I wear multiple hats and connect with different audiences. How would you like to get to know me better?
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Path 1: About Me */}
          <motion.div 
            className="path-card"
            variants={pathCard}
            whileHover="hover"
          >
            <div className="h-24 bg-harvard relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-harvard to-red-800"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-playfair text-white text-xl font-bold">About Me</h3>
                <p className="text-white text-sm">My background & story</p>
              </div>
            </div>
            <div className="p-6">
              <p className="mb-4">Discover my journey from Harvard to where I am today, my values, and what drives me to help others succeed.</p>
              <a href="#about" className="inline-flex items-center font-montserrat font-semibold text-harvard hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
          
          {/* Path 2: Policy Professional */}
          <motion.div 
            className="path-card"
            variants={pathCard}
            whileHover="hover"
          >
            <div className="h-24 bg-policy relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-policy to-blue-400"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-playfair text-white text-xl font-bold">Policy Work</h3>
                <p className="text-white text-sm">My professional journey</p>
              </div>
            </div>
            <div className="p-6">
              <p className="mb-4">Explore my government and policy experience, projects I've contributed to, and my public service mission.</p>
              <a href="#government" className="inline-flex items-center font-montserrat font-semibold text-policy hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
          
          {/* Path 3: College Consultant */}
          <motion.div 
            className="path-card"
            variants={pathCard}
            whileHover="hover"
          >
            <div className="h-24 bg-consulting relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-consulting to-teal-400"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-playfair text-white text-xl font-bold">College Consulting</h3>
                <p className="text-white text-sm">How I help students thrive</p>
              </div>
            </div>
            <div className="p-6">
              <p className="mb-4">Find out how I guide students to find their perfect college fit, not just chase rankings and prestige.</p>
              <a href="#consulting" className="inline-flex items-center font-montserrat font-semibold text-consulting hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
