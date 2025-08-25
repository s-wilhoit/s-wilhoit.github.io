import { motion } from "framer-motion";
import { ArrowRight, Search, BookOpen, PenTool, Hourglass } from "lucide-react";

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
    <section id="consulting" className="py-20 min-h-screen flex items-center relative bg-gray-50 border-t border-gray-200">
      <div className="absolute top-0 right-0 rounded-full w-64 h-64 bg-teal-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 reveal opacity-0 translate-y-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-3">College Consulting</h2>
          <p className="text-gray-600 mb-16">Finding the right fit for your educational journey</p>

          <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-5">It's about <span className="text-consulting">fit</span>, not just admission</h3>
          <p className="text-md text-gray-600 mb-8 max-w-2xl mx-auto">
            College is more than just a name on a diploma—it's where you'll grow, learn, and build 
            your future. My approach to college consulting focuses on finding institutions where you'll 
            genuinely thrive, not just get in. With my personal experience at 
            Harvard and extensive knowledge of various institutions, I offer guidance that goes 
            beyond rankings and acceptance rates.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div 
            className="bg-white rounded-xl shadow-md p-6 path-highlight"
            variants={cardItem}
            whileHover="hover"
          >
            <motion.div 
              className="text-consulting text-4xl mb-4 flex justify-center path-icon transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <Search className="h-10 w-10" />
            </motion.div>
            <h3 className="font-playfair text-xl font-bold mb-2 text-center">College Selection</h3>
            <p className="text-sm text-gray-600 text-center">
              Finding schools where your unique strengths and interests will truly thrive, focusing on fit rather than just prestige.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-md p-6 path-highlight"
            variants={cardItem}
            whileHover="hover"
          >
            <motion.div 
              className="text-consulting text-4xl mb-4 flex justify-center path-icon transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <BookOpen className="h-10 w-10" />
            </motion.div>
            <h3 className="font-playfair text-xl font-bold mb-2 text-center">Application Strategy</h3>
            <p className="text-sm text-gray-600 text-center">
              Developing a personalized roadmap for applications that highlights your authentic voice and distinguishes you from your peers.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-md p-6 path-highlight"
            variants={cardItem}
            whileHover="hover"
          >
            <motion.div 
              className="text-consulting text-4xl mb-4 flex justify-center path-icon transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <PenTool className="h-10 w-10" />
            </motion.div>
            <h3 className="font-playfair text-xl font-bold mb-2 text-center">Essay Development</h3>
            <p className="text-sm text-gray-600 text-center">
              Crafting compelling personal narratives that showcase your unique perspective, experiences, and aspirations.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-md p-6 path-highlight"
            variants={cardItem}
            whileHover="hover"
          >
            <motion.div 
              className="text-consulting text-4xl mb-4 flex justify-center path-icon transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <Hourglass className="h-10 w-10" />
            </motion.div>
            <h3 className="font-playfair text-xl font-bold mb-2 text-center">Interview Preparation</h3>
            <p className="text-sm text-gray-600 text-center">
              Building confidence through mock interviews and personalized feedback to help you articulate your story clearly.
            </p>
          </motion.div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 mb-16 reveal opacity-0 translate-y-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className="font-playfair text-2xl font-bold mb-2 text-center">What My Students Say</h3>
          <p className="text-center text-gray-600 mb-8">Success stories from students who found their perfect match</p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={testimonialContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div 
              className="bg-gray-50 p-6 rounded-xl"
              variants={testimonialItem}
            >
              <p className="italic text-gray-700 mb-4">
                "Working with you completely changed my perspective on the college application process. 
                Instead of just chasing brand names, you helped me find schools where I could actually thrive."
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-montserrat font-semibold">Sarah J.</h4>
                  <p className="text-sm text-gray-600">Harvard '25</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 p-6 rounded-xl"
              variants={testimonialItem}
            >
              <p className="italic text-gray-700 mb-4">
                "Your guidance was invaluable. You helped me craft authentic essays that truly
                represented who I am, not who I thought colleges wanted me to be."
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-montserrat font-semibold">Michael R.</h4>
                  <p className="text-sm text-gray-600">Stanford '24</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center reveal opacity-0 translate-y-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <a 
            href="#contact" 
            className="bg-consulting hover:bg-opacity-90 text-white font-montserrat font-semibold py-3 px-8 rounded-full inline-flex items-center justify-center transition-all"
          >
            Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
