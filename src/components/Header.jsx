import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiInstagram, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="h-16 md:h-20 container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Liquid Glass Pill Logo / Name */}
        <motion.a
          href="#"
          aria-label="MV7mood home"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.25, duration: 1.1 }}
          className="relative flex items-center group"
        >
          {/* pill */}
          <div
            className={[
              "relative overflow-hidden",
              "rounded-full backdrop-blur-xl",
              "ring-1 ring-white/40 dark:ring-white/10",
              "border border-white/40 dark:border-white/5",
              "bg-gradient-to-r from-white/25 via-white/15 to-white/20 dark:from-white/10 dark:via-white/5 dark:to-white/10",
              "shadow-[0_8px_30px_rgba(80,35,180,0.15)]",
              "px-4 md:px-5 py-2 md:py-2.5",
            ].join(" ")}
          >
            {/* animated shimmer */}
            <motion.span
              aria-hidden
              className="absolute -inset-x-10 -inset-y-8 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "linear", delay: 0.6 }}
              style={{ maskImage: "radial-gradient(40% 50% at 50% 50%, #000 55%, transparent)" }}
            />
            {/* floating blobs (very subtle) */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute -left-6 -top-6 h-16 w-16 rounded-full bg-violet-500/25 blur-2xl"
              animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            <motion.span
              aria-hidden
              className="pointer-events-none absolute -right-6 -bottom-6 h-16 w-16 rounded-full bg-pink-500/25 blur-2xl"
              animate={{ y: [0, 6, 0], x: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.2 }}
            />

            {/* initials badge (mini) */}


            {/* name */}
            <span className="relative z-10 font-extrabold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500">
                MV7mood
              </span>
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="lg:flex hidden space-x-8">
          {["Home", "About", "Projects", "Experience", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.7 + index * 0.2 }}
              href="#"
              className="relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        {/* social icons-desktop */}
        <div className="md:flex hidden items-center space-x-4">
          <motion.a initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1, duration: 0.7 }} href="#" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">
            <FiGithub className="w-5 h-5" />
          </motion.a>
          <motion.a initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.15, duration: 0.7 }} href="#" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">
            <FiLinkedin className="w-5 h-5" />
          </motion.a>
          <motion.a initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 0.7 }} href="#" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">
            <FiInstagram className="w-5 h-5" />
          </motion.a>

          {/* collab me button */}
          <motion.button
            onClick={openContactForm}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.35, duration: 0.7, type: "spring", stiffness: 100, damping: 15 }}
            className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-300 to-gray-100 dark:from-gray-700 dark:to-gray-800 text-violet-700 dark:text-violet-300 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
          >
            Collab with Me
          </motion.button>
        </div>

        {/* mobile menu button */}
        <div className="md:hidden flex items-center">
          <motion.button whileTap={{ scale: 0.7 }} onClick={toggleMenu} className="text-gray-800 dark:text-gray-200">
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3">
          {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
            <a onClick={toggleMenu} className="text-gray-800 dark:text-gray-300 font-medium py-2" key={item} href="#">
              {item}
            </a>
          ))}
        </nav>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a href="#"><FiGithub className="h-5 w-5 text-gray-700 dark:text-gray-300" /></a>
            <a href="#"><FiLinkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" /></a>
            <a href="#"><FiInstagram className="h-5 w-5 text-gray-700 dark:text-gray-300" /></a>
          </div>

          <button
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold text-white"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      {/* contact form */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 24 }}
              transition={{ type: "spring", damping: 30, stiffness: 200, duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Get In Touch</h1>
                <button onClick={closeContactForm}>
                  <FiX className="h-5 w-5 text-gray-900 dark:text-gray-100" />
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-violet-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-violet-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    id="message"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-violet-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50 text-white"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
