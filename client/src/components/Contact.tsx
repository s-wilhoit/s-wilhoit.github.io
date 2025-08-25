import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { useTypeform } from "@/lib/typeform";

export default function Contact() {
  const { showSidetab, hideSidetab } = useTypeform();

  // Show Typeform sidetab when component mounts
  useEffect(() => {
    showSidetab({
      formId: '01JZM06RYCJFB5GGGX5VRZ532R',
      width: 320,
      height: 400,
      buttonColor: '#8B1538', // Harvard crimson color
      buttonText: 'Quick Contact',
      position: 'right'
    });

    // Cleanup on unmount
    return () => {
      hideSidetab();
    };
  }, [showSidetab, hideSidetab]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactInfoContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const contactInfoItem = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      id="contact"
      className="py-20 min-h-screen flex items-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border-t border-gray-200"
    >
      {/* Decorative gradient elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-harvard/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-consulting/20 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact heading */}
          <motion.div
            className="reveal opacity-0 translate-y-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-harvard mb-8"></div>

            <p className="text-lg mb-10 max-w-lg">
              Whether you're interested in my policy work, seeking college
              consulting services, or just want to learn more about my journey,
              I'd love to hear from you.
            </p>

            <motion.div
              className="space-y-6 mb-10"
              variants={contactInfoContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div
                className="flex items-start"
                variants={contactInfoItem}
              >
                <div className="text-harvard mr-4 mt-1">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold mb-1">Email</h4>
                  <p className="text-gray-300">swilhoit@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                variants={contactInfoItem}
              >
                <div className="text-harvard mr-4 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold mb-1">
                    Location
                  </h4>
                  <p className="text-gray-300">Cambridge, Massachusetts</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                variants={contactInfoItem}
              >
                <div className="text-harvard mr-4 mt-1">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold mb-1">
                    Consulting Hours
                  </h4>
                  <p className="text-gray-300">
                    By appointment, weekdays 9AM-6PM EST
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-harvard transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-harvard transition-colors"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-harvard transition-colors"
                aria-label="Medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-file-text"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                  <line x1="10" x2="8" y1="9" y2="9" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Additional contact content */}
          <motion.div
            className="reveal opacity-0 translate-y-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/20">
              <h3 className="font-playfair text-2xl font-bold mb-4 text-center">
                Ready to Connect?
              </h3>
              <p className="text-gray-300 text-center mb-6">
                I'm always open to meaningful conversations about policy, education, 
                and helping others navigate their journey. Feel free to reach out 
                through any of the channels above.
              </p>
              <div className="text-center">
                <a 
                  href="mailto:swilhoit@gmail.com"
                  className="bg-harvard hover:bg-opacity-90 text-white font-montserrat font-semibold py-3 px-8 rounded-full inline-flex items-center justify-center transition-all"
                >
                  Send Email <Send className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
