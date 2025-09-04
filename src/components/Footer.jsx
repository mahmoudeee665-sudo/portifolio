import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-6 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & tagline */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
              Mvhmoud
            </h2>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Frontend developer passionate about crafting modern, interactive, and
              responsive web experiences. Building ideas into reality with clean code
              and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-200">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-500 hover:text-violet-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-500 hover:text-violet-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-500 hover:text-violet-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-500 hover:text-violet-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-200">
              Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to stay updated with my latest projects & articles.
            </p>
            <form className="flex flex-col sm:flex-row sm:items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-violet-500 px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Mahmoud. All Rights Reserved
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              className="text-gray-500 hover:text-white text-sm transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-gray-500 hover:text-white text-sm transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-gray-500 hover:text-white text-sm transition-colors"
              href="#"
            >
              Cookie Policy
            </a>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4 mt-6 md:mt-0 ml-0 md:ml-8">
            <a href="#" className="text-gray-500 hover:text-violet-400">
              <FiInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-violet-400">
              <FiGithub className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-violet-400">
              <FiLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
