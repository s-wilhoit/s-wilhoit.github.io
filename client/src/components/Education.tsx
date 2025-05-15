import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, UserPlus } from "lucide-react";

export default function Education() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
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
    hidden: { opacity: 0, y: 10 },
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

  const quoteAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.3 }
    }
  };

  return (
    <section id="education" className="py-16 min-h-screen flex items-center relative bg-gray-50">
      <div className="absolute top-0 right-0 rounded-full w-48 h-48 bg-pink-100"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12 reveal opacity-0 translate-y-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            <GraduationCap className="inline-block mr-3 h-8 w-8 text-harvard" />
            Education
          </h2>
          <p className="text-gray-600 text-sm">Building a foundation for impactful policy work</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column - Harvard */}
          <motion.div 
            className="reveal opacity-0 translate-y-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-harvard bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                <div className="bg-harvard rounded-full w-2 h-2"></div>
              </div>
              <h3 className="font-playfair text-xl font-bold">Harvard University</h3>
            </div>
            
            <div className="ml-11 mb-4">
              <p className="text-harvard font-montserrat font-semibold text-sm">Bachelor of Arts in Government • Public Policy Track</p>
            </div>
            
            <motion.div 
              className="ml-11 space-y-6"
              variants={timelineContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div
                className="relative bg-white p-6 rounded-xl shadow-md"
                variants={timelineItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 h-0.5 w-6 bg-harvard"></div>
                <div className="flex mb-2">
                  <div className="text-harvard">
                    <Award className="h-5 w-5" />
                  </div>
                  <p className="text-xs text-gray-500 ml-auto">2018 - 2022</p>
                </div>
                <h4 className="font-montserrat font-bold mb-2">Academic Excellence</h4>
                <p className="text-gray-700 text-sm">
                  Graduated with honors, focusing on education policy and governance. Participated in student government and policy development initiatives on campus.
                </p>
              </motion.div>
              
              <motion.div
                className="relative bg-white p-6 rounded-xl shadow-md"
                variants={timelineItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 h-0.5 w-6 bg-harvard"></div>
                <div className="flex mb-2">
                  <div className="text-harvard">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <p className="text-xs text-gray-500 ml-auto">2021 - 2022</p>
                </div>
                <h4 className="font-montserrat font-bold mb-2">Honors Thesis</h4>
                <p className="text-gray-700 text-sm">
                  "Educational Equity and College Access: Bridging Policy and Practice" - Research on improving higher education accessibility and outcomes.
                </p>
              </motion.div>
              
              <motion.div
                className="relative bg-white p-6 rounded-xl shadow-md"
                variants={timelineItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 h-0.5 w-6 bg-harvard"></div>
                <div className="flex mb-2">
                  <div className="text-harvard">
                    <UserPlus className="h-5 w-5" />
                  </div>
                  <p className="text-xs text-gray-500 ml-auto">2019 - 2022</p>
                </div>
                <h4 className="font-montserrat font-bold mb-2">Leadership Experience</h4>
                <p className="text-gray-700 text-sm">
                  Vice President of Harvard Policy Review. Led initiatives to increase awareness of education policy issues and solutions on campus.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Other Educational Experiences */}
          <motion.div 
            className="reveal opacity-0 translate-y-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-harvard bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                <div className="bg-harvard rounded-full w-2 h-2"></div>
              </div>
              <h3 className="font-playfair text-xl font-bold">Other Education</h3>
            </div>
            
            <div className="ml-11 mb-4">
              <p className="text-harvard font-montserrat font-semibold text-sm">Cross-Registration & Professional Development</p>
            </div>
            
            <motion.div 
              className="ml-11 space-y-6"
              variants={timelineContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div
                className="relative bg-white p-6 rounded-xl shadow-md"
                variants={timelineItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 h-0.5 w-6 bg-harvard"></div>
                <div className="flex mb-2">
                  <div className="text-harvard">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <p className="text-xs text-gray-500 ml-auto">2020 - 2022</p>
                </div>
                <h4 className="font-montserrat font-bold mb-2">MIT Sloan School of Management</h4>
                <p className="text-gray-700 text-sm">
                  Cross-registered for courses in leadership and organizational management, applying business frameworks to education policy challenges.
                </p>
              </motion.div>
              
              <motion.div
                className="relative bg-white p-6 rounded-xl shadow-md"
                variants={timelineItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 h-0.5 w-6 bg-harvard"></div>
                <div className="flex mb-2">
                  <div className="text-harvard">
                    <Award className="h-5 w-5" />
                  </div>
                  <p className="text-xs text-gray-500 ml-auto">2020 - Present</p>
                </div>
                <h4 className="font-montserrat font-bold mb-2">Professional Certifications</h4>
                <p className="text-gray-700 text-sm">
                  Completed advanced certifications in educational consulting, policy analysis, and higher education admissions processes.
                </p>
              </motion.div>
              
              <motion.div
                className="relative bg-white p-6 rounded-xl shadow-md"
                variants={timelineItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 h-0.5 w-6 bg-harvard"></div>
                <div className="flex mb-2">
                  <div className="text-harvard">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <p className="text-xs text-gray-500 ml-auto">2019 - Present</p>
                </div>
                <h4 className="font-montserrat font-bold mb-2">Ongoing Education</h4>
                <p className="text-gray-700 text-sm">
                  Regularly participate in workshops, seminars, and conferences related to education policy, college admissions trends, and public governance.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Education quote */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mt-16 reveal opacity-0 translate-y-8"
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
