import { motion } from "framer-motion";

export default function Education() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const timelineContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const timelineItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const quoteAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.3 }
    }
  };

  return (
    <section id="education" className="py-20 min-h-screen flex items-center relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-harvard bg-opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Education image */}
          <motion.div 
            className="order-2 lg:order-1 reveal opacity-0 translate-y-8"
            variants={imageAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="relative">
              <img 
                src="https://pixabay.com/get/g25ecef4b6ce5b00745ea3e35f9da80fae42522b32e0cd333056b5ea189e911f4ef2b34f994d604df28ca484687569cac7a0344504a322459f00b2953dc2c3f0d_1280.jpg" 
                alt="Harvard campus architecture" 
                className="rounded-xl shadow-xl w-full relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-harvard rounded-xl z-0"></div>
            </div>
          </motion.div>
          
          {/* Education content */}
          <motion.div 
            className="order-1 lg:order-2 reveal opacity-0 translate-y-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Education</h2>
            <div className="w-20 h-1 bg-harvard mb-8"></div>
            
            <div className="mb-8">
              <h3 className="font-playfair text-2xl font-bold mb-2">Harvard University</h3>
              <p className="text-harvard font-montserrat font-semibold mb-4">Bachelor of Arts in Government, Public Policy Track</p>
              <p className="mb-4">
                At Harvard, I immersed myself in studying how effective governance and policy can transform communities. I focused on the intersection of education policy and social mobility.
              </p>
              <p>
                Key courses included Public Policy Analysis, Political Theory, Education Policy Reform, and Statistical Analysis for Social Sciences.
              </p>
            </div>
            
            <motion.div 
              className="border-l-4 border-harvard pl-6 relative"
              variants={timelineContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div className="timeline-item" variants={timelineItem}>
                <h4 className="font-montserrat font-bold">Honors Thesis</h4>
                <p>"Educational Equity and College Access: Bridging Policy and Practice"</p>
              </motion.div>
              <motion.div className="timeline-item" variants={timelineItem}>
                <h4 className="font-montserrat font-bold">Leadership</h4>
                <p>Vice President, Harvard Policy Review</p>
              </motion.div>
              <motion.div className="timeline-item" variants={timelineItem}>
                <h4 className="font-montserrat font-bold">Awards</h4>
                <p>Dean's List, Public Service Fellowship</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Education quote */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mt-20 reveal opacity-0 translate-y-8"
          variants={quoteAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <blockquote className="text-2xl md:text-3xl font-playfair italic mb-6">
            "Education is not the filling of a pail, but the lighting of a fire."
          </blockquote>
          <p className="font-montserrat font-semibold">— W.B. Yeats</p>
        </motion.div>
      </div>
    </section>
  );
}
