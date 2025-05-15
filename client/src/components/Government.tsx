import { motion } from "framer-motion";
import { Briefcase, FileText, UserCheck, Building, ArrowRight, Check } from "lucide-react";

export default function Government() {
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
    <section id="government" className="py-16 min-h-screen flex items-center relative bg-blue-50">
      <div className="absolute top-0 left-0 rounded-full w-48 h-48 bg-blue-100 opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12 reveal opacity-0 translate-y-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            <Briefcase className="inline-block mr-3 h-8 w-8 text-policy" />
            Government Work
          </h2>
          <p className="text-gray-600 text-sm">Creating meaningful change through policy and public service</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column - Policy Analyst */}
          <motion.div 
            className="reveal opacity-0 translate-y-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-policy bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                <div className="bg-policy rounded-full w-2 h-2"></div>
              </div>
              <h3 className="font-playfair text-xl font-bold">Policy Analyst</h3>
            </div>
            
            <div className="ml-11 mb-4">
              <p className="text-policy font-montserrat font-semibold text-sm">Department of State • 2022 - Present</p>
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
                <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 h-0.5 w-6 bg-policy"></div>
                <div className="flex mb-2">
                  <div className="text-policy">
                    <FileText className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Working on policy development initiatives focused on international education cooperation. 
                  Analyzing impact of educational exchange programs and developing recommendations for improvement.
                </p>
              </motion.div>
            </motion.div>

            <div className="flex items-center mt-12 mb-8">
              <div className="bg-policy bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                <div className="bg-policy rounded-full w-2 h-2"></div>
              </div>
              <h3 className="font-playfair text-xl font-bold">Legislative Assistant</h3>
            </div>
            
            <div className="ml-11 mb-4">
              <p className="text-policy font-montserrat font-semibold text-sm">U.S. Senate • 2020 - 2022</p>
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
                <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 h-0.5 w-6 bg-policy"></div>
                <div className="flex mb-2">
                  <div className="text-policy">
                    <UserCheck className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Assisted in drafting and analyzing legislation related to education policy. 
                  Coordinated with stakeholders to gather feedback and improve policy outcomes.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Other Government Work */}
          <motion.div 
            className="reveal opacity-0 translate-y-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-policy bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                <div className="bg-policy rounded-full w-3 h-3"></div>
              </div>
              <h3 className="font-playfair text-2xl font-bold">Research Intern</h3>
            </div>
            
            <div className="ml-14 mb-6">
              <p className="text-policy font-montserrat font-semibold">Policy Think Tank • 2019</p>
            </div>
            
            <motion.div 
              className="ml-14 space-y-8"
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
                <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 h-0.5 w-6 bg-policy"></div>
                <div className="flex mb-2">
                  <div className="text-policy">
                    <Building className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Conducted research on educational policy effectiveness and contributed to published 
                  reports on improving higher education access and outcomes.
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-8 bg-white p-6 rounded-xl shadow-lg"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h3 className="font-playfair text-xl font-bold mb-3">Key Policy Initiatives</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-policy bg-opacity-20 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-policy" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold">Education Access Reform</h4>
                    <p className="text-gray-700 text-sm">
                      Contributed to policy overhaul expanding college preparation resources in underserved communities.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-policy bg-opacity-20 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-policy" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold">Data Analysis Framework</h4>
                    <p className="text-gray-700 text-sm">
                      Developed metrics to evaluate program effectiveness and ensure evidence-based decision making.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-policy bg-opacity-20 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-policy" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold">Community Engagement</h4>
                    <p className="text-gray-700 text-sm">
                      Led stakeholder feedback initiatives to ensure policies reflected community needs.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Quote and CTA */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mt-16 reveal opacity-0 translate-y-8"
          variants={quoteAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <blockquote className="text-2xl md:text-3xl font-playfair italic mb-8">
            "The best way to find yourself is to lose yourself in the service of others."
          </blockquote>
          <p className="font-montserrat font-semibold mb-12">— Mahatma Gandhi</p>
          
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
