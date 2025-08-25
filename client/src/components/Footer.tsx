import { motion } from "framer-motion";

export default function Footer() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#government", label: "Government Work" },
    { href: "#consulting", label: "College Consulting" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-dark text-white py-10 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="mb-6 md:mb-0">
            <h3 className="font-playfair text-2xl font-bold">
              Samantha Wilhoit
            </h3>
            <p className="text-gray-400">
              Harvard Graduate • Policy Researcher • College Consultant
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={link.href === "#government" ? (e) => {
                  e.preventDefault();
                  window.location.hash = "#government";
                  setTimeout(() => {
                    const section = document.getElementById("education");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 100);
                } : undefined}
                className="hover:text-harvard transition-colors mb-2 md:mb-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Samantha Wilhoit. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/samantha-wilhoit/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-harvard transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
