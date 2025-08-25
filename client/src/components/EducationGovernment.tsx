import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, UserPlus, Briefcase, FileText, UserCheck, Building, ArrowRight, Check, Globe2, Settings, Sprout } from "lucide-react";

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
    <section id="education" className={`py-16 min-h-screen flex items-center relative transition-colors duration-500 border-t border-gray-200 ${activeView === 'education' ? 'bg-maroon-light' : 'bg-blue-light'}`}>
      {activeView === 'education' ? (
        <div className="absolute top-0 right-0 rounded-full w-48 h-48 bg-red-100"></div>
      ) : (
        <div className="absolute top-0 left-0 rounded-full w-48 h-48 bg-blue-100 opacity-50"></div>
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header with Toggle */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-4">
            <motion.button
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-all duration-300 cursor-pointer group w-full md:w-auto justify-center md:justify-start ${
                activeView === 'education' 
                  ? 'text-harvard border-harvard bg-transparent shadow-md' 
                  : 'text-gray-500 border-gray-300 hover:text-harvard hover:border-harvard'
              }`}
              onClick={() => setActiveView('education')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <GraduationCap className={`h-6 md:h-8 w-6 md:w-8 transition-colors ${
                activeView === 'education' ? 'text-harvard' : 'text-gray-400 group-hover:text-harvard'
              }`} />
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold">
                Education Journey
              </h2>
            </motion.button>
            
            <div className="h-px w-20 md:h-12 md:w-px bg-gray-300"></div>
            
            <motion.button
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-all duration-300 cursor-pointer group w-full md:w-auto justify-center md:justify-start ${
                activeView === 'government' 
                  ? 'text-policy border-policy bg-transparent shadow-md' 
                  : 'text-gray-500 border-gray-300 hover:text-policy hover:border-policy'
              }`}
              onClick={() => setActiveView('government')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Briefcase className={`h-6 md:h-8 w-6 md:w-8 transition-colors ${
                activeView === 'government' ? 'text-policy' : 'text-gray-400 group-hover:text-policy'
              }`} />
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold">
                Government Work
              </h2>
            </motion.button>
          </div>
          
          <p className="text-gray-600 text-sm">
            {activeView === 'education' 
              ? 'From Harvard to lifelong learning' 
              : 'Creating meaningful change through policy and public service'
            }
          </p>
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
            (<>
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
                    <h3 className="font-playfair text-xl font-bold">Education</h3>
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
                          <h4 className="font-montserrat font-semibold text-xl">Harvard College</h4>
                          <p className="text-gray-600 text-sm  mb-2"><i>2020-2025</i></p>
                          <p className="text-gray-600 text-sm">
                            <b>Overview:</b> Focused on public policy analysis, constitutional law, and democratic institutions. Developed critical thinking skills essential for effective governance.
                          </p>
                          <p className="text-gray-600 text-sm">
                          <b>Relevant Coursework:</b> Governance in Native America, Designing and Implementing Randomized Control Trials for Public Policy, Making Change When Change is Hard
                        </p>
                          <p className="text-gray-600 text-sm">
                          <b>Activities & Leadership:</b> Harvard Model Congress (Chief of Staff 2025), Natives at Harvard College (2020-present)
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
                          <h4 className="font-montserrat font-semibold text-xl">Harvard Kennedy School</h4>
                          <p className="text-gray-600 text-sm  mb-2"><i>Spring 2025</i></p>
                          <p className="text-gray-600 text-sm">
                            <b>Coursework in:</b> Nation Building II

                            <p className="text-gray-600 text-sm"><b>Research:</b> Co-authored Housing Insecurity in the Chickasaw Nation (2025), an applied policy report for the Chickasaw Nation government on improving housing access and landlord engagement for tribal citizens; conducted stakeholder interviews, analyzed housing market data, and developed actionable recommendations presented to tribal leadership.</p>

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
                          <h4 className="font-montserrat font-semibold text-xl">MIT Sloan School of Management</h4>
                          <p className="text-gray-600 text-sm  mb-2"><i>Fall 2024</i></p>
                          <p className="text-gray-600 text-sm">
                            <b>Coursework in:</b> Entrepreneurship
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
                          <h4 className="font-montserrat font-semibold text-xl">London School of Economics</h4>
                          <p className="text-gray-600 text-sm  mb-2"><i>Summer 2024</i></p>
                          <p className="text-gray-600 text-sm">
                            <b>Coursework in:</b> International Human Rights Law, Leadership, Happiness, and Policy
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
                    <h3 className="font-playfair text-xl font-bold">Experience</h3>
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
                        <Sprout className="h-5 w-5 text-harvard mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-montserrat font-semibold">Ivy Impact</h4>
                          <p className="text-gray-600 text-sm mb-1"><i>July 2025 – Present</i></p>
                          <p className="text-gray-600 text-sm mb-2">Global — Co‑Founder</p>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                            <li>Mission: Empowers high school students worldwide to transform passions into purpose through immersive camps, one‑on‑one mentorship, and global experiences—led by world‑class talent and grounded in curiosity, joy, and wonder.</li>
                            <li>Values: Passion‑driven learning; equity through access (scholarships for underserved students); mentorship with meaning; global perspectives; wonder as the gateway to growth.</li>
                            <li>Impact: Teaching experiences across 6 continents and 37+ countries, reaching 1,024+ students in one‑on‑one and small group settings.</li>
                          </ul>
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
                        <Settings className="h-5 w-5 text-harvard mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-montserrat font-semibold">Two Cents Insights</h4>
                          <p className="text-gray-600 text-sm mb-1"><i>Jan – March 2024</i></p>
                          <p className="text-gray-600 text-sm mb-2">Remote — Operations Consultant</p>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                            <li>Established operational foundations and workflow design for a small business providing research services and executive coaching.</li>
                            <li>Implemented a functional CRM to increase productivity and streamline business communications.</li>
                          </ul>
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
                          <h4 className="font-montserrat font-semibold">Harvard Project for Asian and International Relations (HPAIR)</h4>
                          <p className="text-gray-600 text-sm mb-1"><i>Sep 2020 – Oct 2022</i></p>
                          <p className="text-gray-600 text-sm mb-2">Cambridge, MA — Operations Director</p>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                            <li>Analyzed international conference bid reports and negotiated with principal prospects for the annual Asia Conference.</li>
                            <li>Directed operations and coordinated with the India team on logistics: lodging for 80+ staff, students, and speakers; venue coordination; and production/sales of merchandise.</li>
                            <li>Sourced 150+ hotels across 40+ countries, shortlisted and negotiated with top international hotel chains, authored prospect reports, and closed final details of the stay.</li>
                          </ul>
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
            </>)
          ) : (
            // Government Content
            (<>
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
            </>)
          )}
        </motion.div>
      </div>
    </section>
  );
}