import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeInDelay = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.2 }
    }
  };

  const statsContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const statsItem = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const imageGallery = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const imageItem = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 min-h-screen flex items-center relative bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="reveal opacity-0 translate-y-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">My Story</h2>
            <div className="w-20 h-1 bg-harvard mb-8"></div>
            
            <p className="text-lg mb-6">
              I've always been fascinated by the intersection of education, policy, and personal growth. My journey began at Harvard, where I studied Government with a focus on public policy.
            </p>
            <p className="text-lg mb-6">
              During my time at Harvard, I discovered my passion for helping others navigate complex systems—whether governmental processes or college admissions—to find their authentic path forward.
            </p>
            <p className="text-lg mb-8">
              Today, I bring together my unique experiences to serve in multiple capacities: as a policy professional contributing to meaningful change, and as a college consultant guiding students to institutions where they'll truly thrive.
            </p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
              variants={statsContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div 
                className="bg-white p-4 rounded-lg shadow text-center"
                variants={statsItem}
              >
                <div className="text-harvard text-4xl font-bold mb-2">4+</div>
                <div className="text-sm text-gray-600">Years in Public Policy</div>
              </motion.div>
              <motion.div 
                className="bg-white p-4 rounded-lg shadow text-center"
                variants={statsItem}
              >
                <div className="text-harvard text-4xl font-bold mb-2">50+</div>
                <div className="text-sm text-gray-600">Students Guided</div>
              </motion.div>
              <motion.div 
                className="bg-white p-4 rounded-lg shadow text-center"
                variants={statsItem}
              >
                <div className="text-harvard text-4xl font-bold mb-2">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </motion.div>
            </motion.div>
            
            <a 
              href="#education" 
              className="bg-harvard hover:bg-opacity-90 text-white font-montserrat font-semibold py-3 px-8 rounded-full inline-flex items-center justify-center transition-all"
            >
              My Education Journey <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
          
          {/* About image collage */}
          <motion.div 
            className="grid grid-cols-2 gap-4 reveal opacity-0 translate-y-8"
            variants={imageGallery}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.img 
              src="https://pixabay.com/get/g51d7a9b682c72ae4b481928850d6bda8c4009286ac830b0d8b51e677501bcc062c8b29bd4255bab194bced7ff6a6c8b7ed59a9c8d67567359689245e53ac660e_1280.jpg" 
              alt="Harvard University campus" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
              variants={imageItem}
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&h=400" 
              alt="Policy work setting" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
              variants={imageItem}
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&h=400" 
              alt="College consulting session" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
              variants={imageItem}
            />
            <motion.img 
              src="https://pixabay.com/get/g287239c3e55cd3dbaf8046887fc7549289196ed2718e48d2d629de88d4360e9a4302cfdd5be9cffa33dd0652514aa9b7f168ceed39ea38d7ebb948d53eeb2cc7_1280.jpg" 
              alt="Creative storytelling concept" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
              variants={imageItem}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
