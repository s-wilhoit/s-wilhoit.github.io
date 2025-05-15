import { motion } from "framer-motion";
import { ArrowRight, Search, MapPin, GraduationCap, Quote } from "lucide-react";

export default function Consulting() {
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

  const cardItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  const testimonialContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const testimonialItem = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="consulting" className="py-20 min-h-screen flex items-center relative">
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-consulting bg-opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 reveal opacity-0 translate-y-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">College Consulting</h2>
          <div className="w-20 h-1 bg-consulting mx-auto mb-8"></div>
          <p className="text-lg">
            I believe the college admissions process should focus on finding the right fit—not just chasing prestige. My approach helps students discover where they'll truly thrive.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 path-highlight"
            variants={cardItem}
            whileHover="hover"
          >
            <motion.div 
              className="text-consulting text-4xl mb-6 path-icon transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <Search className="h-12 w-12" />
            </motion.div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Discover</h3>
            <p>
              We begin by exploring your unique interests, strengths, learning style, and goals—finding what truly energizes and motivates you.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 path-highlight"
            variants={cardItem}
            whileHover="hover"
          >
            <motion.div 
              className="text-consulting text-4xl mb-6 path-icon transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <MapPin className="h-12 w-12" />
            </motion.div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Map</h3>
            <p>
              We identify institutions that align with your profile—places where your academic, social, and personal needs will be met and your growth supported.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 path-highlight"
            variants={cardItem}
            whileHover="hover"
          >
            <motion.div 
              className="text-consulting text-4xl mb-6 path-icon transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <GraduationCap className="h-12 w-12" />
            </motion.div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Thrive</h3>
            <p>
              I guide you through crafting authentic applications that highlight your genuine self and position you for success at institutions where you'll flourish.
            </p>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Consulting image */}
          <motion.div 
            className="relative reveal opacity-0 translate-y-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&h=600" 
              alt="College consulting session" 
              className="rounded-xl shadow-xl w-full relative z-10"
            />
            <div className="absolute -top-6 -left-6 w-full h-full border-4 border-consulting rounded-xl z-0"></div>
          </motion.div>
          
          {/* Testimonials */}
          <motion.div
            className="reveal opacity-0 translate-y-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="font-playfair text-2xl font-bold mb-8">What My Students Say</h3>
            
            <motion.div 
              className="space-y-6"
              variants={testimonialContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md"
                variants={testimonialItem}
              >
                <div className="flex items-center mb-4">
                  <div className="text-consulting mr-3">
                    <Quote className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold">Emma T.</h4>
                    <p className="text-sm text-gray-600">Yale University</p>
                  </div>
                </div>
                <p className="italic">
                  "John helped me look beyond rankings to find a school that truly matched my learning style and goals. I couldn't be happier with my choice."
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md"
                variants={testimonialItem}
              >
                <div className="flex items-center mb-4">
                  <div className="text-consulting mr-3">
                    <Quote className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold">Marcus J.</h4>
                    <p className="text-sm text-gray-600">University of Michigan</p>
                  </div>
                </div>
                <p className="italic">
                  "The personalized approach made all the difference. Instead of applying to 15+ schools, we focused on 8 that were perfect fits. I got into 7!"
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md"
                variants={testimonialItem}
              >
                <div className="flex items-center mb-4">
                  <div className="text-consulting mr-3">
                    <Quote className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold">Parent: Sarah L.</h4>
                    <p className="text-sm text-gray-600">Mother of Princeton Student</p>
                  </div>
                </div>
                <p className="italic">
                  "John's insight into how different schools support different types of students was invaluable. His approach reduced our family's stress and led to the right match."
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center reveal opacity-0 translate-y-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <a 
            href="#contact" 
            className="bg-consulting hover:bg-opacity-90 text-white font-montserrat font-semibold py-3 px-8 rounded-full inline-flex items-center justify-center transition-all"
          >
            Get Started with a Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
