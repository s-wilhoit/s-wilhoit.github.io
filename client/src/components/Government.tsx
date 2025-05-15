import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export default function Government() {
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

  const listContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const listItem = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  const experienceContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const experienceItem = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="government" className="py-20 min-h-screen flex items-center relative bg-policy bg-opacity-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 reveal opacity-0 translate-y-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Policy & Government Work</h2>
          <div className="w-20 h-1 bg-policy mx-auto mb-8"></div>
          <p className="text-lg">
            My professional experience spans several roles in public policy, where I've worked to create meaningful change through data-driven approaches and collaborative problem-solving.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Government work content */}
          <motion.div
            className="reveal opacity-0 translate-y-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h3 className="font-playfair text-2xl font-bold mb-4">Key Policy Initiatives</h3>
              <motion.ul 
                className="space-y-4"
                variants={listContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.li 
                  className="flex items-start"
                  variants={listItem}
                >
                  <span className="text-policy mr-3 mt-1">
                    <Check className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-montserrat font-semibold">Education Access Reform</h4>
                    <p className="text-gray-700">Contributed to policy overhaul expanding college preparation resources in underserved communities.</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={listItem}
                >
                  <span className="text-policy mr-3 mt-1">
                    <Check className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-montserrat font-semibold">Data Analysis Framework</h4>
                    <p className="text-gray-700">Developed metrics to evaluate program effectiveness and ensure evidence-based decision making.</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={listItem}
                >
                  <span className="text-policy mr-3 mt-1">
                    <Check className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-montserrat font-semibold">Community Engagement</h4>
                    <p className="text-gray-700">Led stakeholder feedback initiatives to ensure policies reflected community needs.</p>
                  </div>
                </motion.li>
              </motion.ul>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              variants={experienceContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h3 className="font-playfair text-2xl font-bold mb-4">Professional Experience</h3>
              <div className="space-y-6">
                <motion.div variants={experienceItem}>
                  <h4 className="font-montserrat font-semibold">Policy Analyst, Department of Education</h4>
                  <p className="text-gray-600 text-sm mb-2">2020 - Present</p>
                  <p className="text-gray-700">Analyzing educational outcomes and developing policy recommendations to improve college readiness and access.</p>
                </motion.div>
                <motion.div variants={experienceItem}>
                  <h4 className="font-montserrat font-semibold">Research Fellow, Education Policy Institute</h4>
                  <p className="text-gray-600 text-sm mb-2">2018 - 2020</p>
                  <p className="text-gray-700">Conducted research on college admission practices and their impact on diversity and student success.</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Government work image and quote */}
          <motion.div
            className="reveal opacity-0 translate-y-8"
            variants={fadeInDelay}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="relative mb-8">
              <img 
                src="https://images.unsplash.com/photo-1551836022-aadb801c60ae?auto=format&fit=crop&w=800&h=500" 
                alt="Policy work in action" 
                className="rounded-xl shadow-xl w-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-policy bg-opacity-20 rounded-full z-0"></div>
            </div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <blockquote className="text-xl font-playfair italic mb-4">
                "The best way to find yourself is to lose yourself in the service of others."
              </blockquote>
              <p className="font-montserrat font-semibold text-right">— Mahatma Gandhi</p>
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
            href="#consulting" 
            className="bg-policy hover:bg-opacity-90 text-white font-montserrat font-semibold py-3 px-8 rounded-full inline-flex items-center justify-center transition-all"
          >
            My College Consulting Approach <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
