import { FiGithub, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const HEADER_OFFSET = 96; // adjust if your header height changes

const Footer = () => {
  // Newsletter state
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  // Smooth scroll helper
  const go = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Formspree (create a free form at formspree.io and replace YOUR_FORM_ID)
  const FORMSPREE_ID = "mpwjodod";

  const submitNewsletter = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus({ sending: false, ok: false, msg: "Please enter your email." });
      return;
    }
    try {
      setStatus({ sending: true, ok: null, msg: "" });
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus({ sending: false, ok: true, msg: "Thanks! You’re subscribed." });
        setEmail("");
      } else {
        setStatus({ sending: false, ok: false, msg: "Something went wrong. Try again." });
      }
    } catch {
      setStatus({ sending: false, ok: false, msg: "Network error. Try again." });
    }
  };

  return (
    <footer className="bg-black text-white py-20 px-6 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & tagline */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
              MV7mood
            </h2>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Frontend developer passionate about crafting modern, interactive, and responsive web
              experiences. Building ideas into reality with clean code and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  onClick={(e) => go(e, "about")}
                  className="text-gray-500 hover:text-violet-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => go(e, "projects")}
                  className="text-gray-500 hover:text-violet-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => go(e, "experience")}
                  className="text-gray-500 hover:text-violet-400 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => go(e, "contact")}
                  className="text-gray-500 hover:text-violet-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-200">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to stay updated with my latest projects & articles.
            </p>

            <form
              className="flex flex-col sm:flex-row sm:items-center gap-3"
              onSubmit={submitNewsletter}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                disabled={status.sending}
                className="bg-gradient-to-r from-purple-500 to-violet-500 px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition disabled:opacity-60"
              >
                {status.sending ? "Subscribing..." : "Subscribe"}
              </button>
            </form>

            {status.msg && (
              <p
                className={`mt-2 text-sm ${
                  status.ok ? "text-emerald-400" : "text-rose-400"
                }`}
              >
                {status.msg}
              </p>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">© 2025 Mahmoud. All Rights Reserved</p>

          <div className="flex space-x-6">
            <a className="text-gray-500 hover:text-white text-sm transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="text-gray-500 hover:text-white text-sm transition-colors" href="#">
              Terms of Service
            </a>
            <a className="text-gray-500 hover:text-white text-sm transition-colors" href="#">
              Cookie Policy
            </a>
          </div>

          {/* Socials */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-violet-400"
            >
              <FiInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/mahmoudeee665-sudo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-violet-400"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/971567860727"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-violet-400"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
