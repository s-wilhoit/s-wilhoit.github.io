import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, UserPlus, Briefcase, FileText, UserCheck, Building, ArrowRight, Check } from "lucide-react";

interface EducationGovernmentProps {
  defaultView?: 'education' | 'government';
}

export default function EducationGovernment({ defaultView = 'education' }: EducationGovernmentProps) {
  const [activeView, setActiveView] = useState<'education' | 'government'>(defaultView);

  // Listen for URL hash changes to switch views
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#government') {
        setActiveView('government');
      } else if (hash === '#education') {
        setActiveView('education');
      }
    };

    // Check initial hash
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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

  const tabVariants = {
    active: { 
      backgroundColor: "rgb(134 25 143)", // maroon
      color: "white",
      transition: { duration: 0.3 }
    },
    inactive: { 
      backgroundColor: "white",
      color: "rgb(134 25 143)",
      transition: { duration: 0.3 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      x: 20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="education" className={`py-16 min-h-screen flex items-center relative ${activeView === 'education' ? 'bg-gray-50' : 'bg-blue-50'}`}>
      {activeView === 'education' ? (
        <div className="absolute top-0 right-0 rounded-full w-48 h-48 bg-red-100"></div>
      ) : (
        <div className="absolute top-0 left-0 rounded-full w-48 h-48 bg-blue-100 opacity-50"></div>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Toggle Tabs */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-full p-1 shadow-lg border-2 border-gray-100">
            <motion.button
              className="px-6 py-3 rounded-full font-montserrat font-semibold text-sm flex items-center"
              variants={tabVariants}
              animate={activeView === 'education' ? 'active' : 'inactive'}
              onClick={() => setActiveView('education')}
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              Education
            </motion.button>
            <motion.button
              className="px-6 py-3 rounded-full font-montserrat font-semibold text-sm flex items-center ml-1"
              variants={tabVariants}
              animate={activeView === 'government' ? 'active' : 'inactive'}
              onClick={() => setActiveView('government')}
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Policy Work
            </motion.button>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeView}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {activeView === 'education' ? (
            // Education Content
            <>
              <motion.div 
                className="text-center max-w-2xl mx-auto mb-12 reveal opacity-0 translate-y-8"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                  <GraduationCap className="inline-block mr-3 h-8 w-8 text-harvard" />
                  Education Journey
                </h2>
                <p className="text-gray-600 text-sm">From Harvard to lifelong learning</p>
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
                    <p className="text-harvard font-montserrat font-semibold text-sm">Bachelor of Arts • 2018-2022</p>
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
                      <div className="flex items-start">
                        <BookOpen className="h-5 w-5 text-harvard mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-montserrat font-semibold mb-2">Government & Political Science</h4>
                          <p className="text-gray-600 text-sm">
                            Focused on public policy analysis, constitutional law, and democratic institutions. 
                            Developed critical thinking skills essential for effective governance.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="relative bg-white p-6 rounded-xl shadow-md"
                      variants={timelineItem}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start">
                        <Award className="h-5 w-5 text-harvard mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-montserrat font-semibold mb-2">Dean's List Recognition</h4>
                          <p className="text-gray-600 text-sm">
                            Consistently maintained high academic standards while engaging in extracurricular activities 
                            and community service initiatives.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="relative bg-white p-6 rounded-xl shadow-md"
                      variants={timelineItem}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start">
                        <UserPlus className="h-5 w-5 text-harvard mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-montserrat font-semibold mb-2">Leadership & Service</h4>
                          <p className="text-gray-600 text-sm">
                            Led student organizations focused on civic engagement and educational equity. 
                            Mentored underclassmen in academic and career development.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                {/* Right Column - Other Education */}
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
                    <h3 className="font-playfair text-xl font-bold">Continued Learning</h3>
                  </div>
                  
                  <div className="ml-11 mb-4">
                    <p className="text-harvard font-montserrat font-semibold text-sm">Professional Development • Ongoing</p>
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
                      <div className="flex items-start">
                        <FileText className="h-5 w-5 text-harvard mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-montserrat font-semibold mb-2">Policy Research Certification</h4>
                          <p className="text-gray-600 text-sm">
                            Advanced training in quantitative analysis, policy evaluation methodologies, 
                            and evidence-based decision making for public sector applications.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="relative bg-white p-6 rounded-xl shadow-md"
                      variants={timelineItem}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start">
                        <UserCheck className="h-5 w-5 text-harvard mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-montserrat font-semibold mb-2">Educational Counseling Training</h4>
                          <p className="text-gray-600 text-sm">
                            Specialized coursework in college admissions processes, student development theory, 
                            and culturally responsive counseling practices.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="relative bg-white p-6 rounded-xl shadow-md"
                      variants={timelineItem}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start">
                        <Building className="h-5 w-5 text-harvard mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-montserrat font-semibold mb-2">Public Administration Workshop</h4>
                          <p className="text-gray-600 text-sm">
                            Intensive program covering budget analysis, stakeholder engagement, 
                            and implementation strategies for effective public service delivery.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Education Quote and CTA */}
              <motion.div 
                className="max-w-3xl mx-auto text-center mt-12 reveal opacity-0 translate-y-8"
                variants={quoteAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <blockquote className="text-xl md:text-2xl font-playfair italic mb-6">
                  "Education is the most powerful weapon which you can use to change the world."
                </blockquote>
                <p className="font-montserrat font-semibold text-sm mb-8">— Nelson Mandela</p>
                
                <a 
                  href="#consulting" 
                  className="bg-harvard hover:bg-opacity-90 text-white font-montserrat font-semibold py-2 px-6 rounded-full inline-flex items-center justify-center transition-all text-sm"
                >
                  Learn About My Consulting <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            </>
          ) : (
            // Government Content
            <>
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
                    <p className="text-policy font-montserrat font-semibold text-sm">State Government • 2022-Present</p>
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
                      <div className="flex items-start">
                        <FileText className="h-5 w-5 text-policy mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-montserrat font-semibold mb-2">Education Policy Analysis</h4>
                          <p className="text-gray-600 text-sm">
                            Analyzed state education funding formulas and their impact on student outcomes across diverse districts. 
                            Recommended policy changes that improved equity in resource allocation.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="relative bg-white p-6 rounded-xl shadow-md"
                      variants={timelineItem}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start">
                        <UserCheck className="h-5 w-5 text-policy mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-montserrat font-semibold mb-2">Legislative Research</h4>
                          <p className="text-gray-600 text-sm">
                            Conducted comprehensive research on proposed legislation, providing briefings to senior staff 
                            and committee members on potential impacts and implementation challenges.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="relative bg-white p-6 rounded-xl shadow-md"
                      variants={timelineItem}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start">
                        <Building className="h-5 w-5 text-policy mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-montserrat font-semibold mb-2">Stakeholder Engagement</h4>
                          <p className="text-gray-600 text-sm">
                            Coordinated with stakeholders to gather feedback and improve policy outcomes.
                          </p>
                        </div>
                      </div>
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
                    <div className="bg-policy bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                      <div className="bg-policy rounded-full w-2 h-2"></div>
                    </div>
                    <h3 className="font-playfair text-xl font-bold">Research Intern</h3>
                  </div>
                  
                  <div className="ml-11 mb-4">
                    <p className="text-policy font-montserrat font-semibold text-sm">Policy Think Tank • 2019</p>
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
                      <div className="flex items-start">
                        <FileText className="h-5 w-5 text-policy mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-montserrat font-semibold mb-2">Healthcare Policy Research</h4>
                          <p className="text-gray-600 text-sm">
                            Researched the effectiveness of state-level healthcare initiatives, analyzing data trends 
                            and conducting literature reviews to support policy recommendations.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="relative bg-white p-6 rounded-xl shadow-md"
                      variants={timelineItem}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start">
                        <UserCheck className="h-5 w-5 text-policy mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-montserrat font-semibold mb-2">Data Analysis & Reporting</h4>
                          <p className="text-gray-600 text-sm">
                            Compiled and analyzed demographic and economic data to identify trends affecting 
                            policy outcomes in urban and rural communities.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="relative bg-white p-6 rounded-xl shadow-md"
                      variants={timelineItem}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start">
                        <Building className="h-5 w-5 text-policy mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-montserrat font-semibold mb-2">Policy Brief Writing</h4>
                          <p className="text-gray-600 text-sm">
                            Authored policy briefs and white papers that informed legislative discussions 
                            on critical social and economic issues.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Government Quote and CTA */}
              <motion.div 
                className="max-w-3xl mx-auto text-center mt-12 reveal opacity-0 translate-y-8"
                variants={quoteAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <blockquote className="text-xl md:text-2xl font-playfair italic mb-6">
                  "The best way to find yourself is to lose yourself in the service of others."
                </blockquote>
                <p className="font-montserrat font-semibold text-sm mb-8">— Mahatma Gandhi</p>
                
                <a 
                  href="#contact" 
                  className="bg-policy hover:bg-opacity-90 text-white font-montserrat font-semibold py-2 px-6 rounded-full inline-flex items-center justify-center transition-all text-sm"
                >
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}