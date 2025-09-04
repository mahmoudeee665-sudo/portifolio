import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiInstagram, FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

const NAV = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },

  { id: "experience", label: "Experience" },

];

const HEADER_OFFSET = 96;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  // iOS glass intensity on scroll
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Contact form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(""); // user’s phone
  const [msg, setMsg] = useState("");     // user’s message
  const [errors, setErrors] = useState({});

  // Your WhatsApp number (international format, no + or spaces)
  const WHATSAPP_OWNER = "971567860727";

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Required";
    if (!phone.trim()) e.phone = "Required";
    if (!/^\+?\d[\d\s-]*$/.test(phone.trim())) e.phone = "Digits only";
    if (!msg.trim()) e.msg = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSendWhatsApp = (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    const userPhone = phone.replace(/[^\d+]/g, "");
    const text = `Hey MV7mood, I'm ${name}. My number is ${userPhone}. ${msg}`;
    const url = `https://wa.me/${WHATSAPP_OWNER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
    setIsOpen(false);
  };

  const refreshSite = () => window.location.reload();

  return (
    <header className="fixed top-0 inset-x-0 z-[100] pointer-events-none">
      {/* Centered pill wrapper */}
      <div className="px-3 pt-3 sm:px-4 sm:pt-4">
        <div
          className={[
            "mx-auto max-w-6xl pointer-events-auto",
            "rounded-2xl sm:rounded-3xl",
            "border",
            scrolled
              ? "backdrop-blur-xl bg-white/70 dark:bg-zinc-900/55 border-white/30 dark:border-white/10 shadow-xl shadow-black/5"
              : "backdrop-blur-md bg-white/35 dark:bg-zinc-900/35 border-white/20 dark:border-white/10 shadow-lg shadow-black/5"
          ].join(" ")}
        >
          {/* glossy top highlight & soft sheen */}
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/60 dark:bg-white/10 rounded-t-3xl" />
          <span className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(120%_60%_at_50%_-20%,rgba(255,255,255,0.35),transparent)] dark:bg-[radial-gradient(120%_60%_at_50%_-20%,rgba(255,255,255,0.07),transparent)]" />

<div className="relative h-16 md:h-18 lg:h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo pill (click to refresh) */}
            <motion.button
              onClick={refreshSite}
              aria-label="Refresh page"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.2 }}
              className=" hidden md:flex  items-center group"
            >
              <div className="relative overflow-hidden rounded-full backdrop-blur-xl ring-1 ring-white/40 dark:ring-white/10 border border-white/40 dark:border-white/5 bg-gradient-to-r from-white/25 via-white/15 to-white/20 dark:from-white/10 dark:via-white/5 dark:to-white/10 shadow-[0_8px_30px_rgba(80,35,180,0.15)] px-4 md:px-5 py-2">
                {/* shimmer */}
                <motion.span
                  aria-hidden
                  className="absolute -inset-x-10 -inset-y-8 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 3.2, ease: "linear", delay: 0.6 }}
                  style={{ maskImage: "radial-gradient(40% 50% at 50% 50%, #000 55%, transparent)" }}
                />
                {/* soft blobs */}
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
                <span className="relative z-10 font-extrabold tracking-tight select-none text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500">
                  MV7mood
                </span>
              </div>
            </motion.button>
<div className="absolute inset-x-0 flex justify-center md:hidden">
    <motion.button
      onClick={refreshSite}
      aria-label="Refresh page"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-full backdrop-blur-xl ring-1 ring-white/40 dark:ring-white/10 border border-white/40 dark:border-white/5 bg-gradient-to-r from-white/25 via-white/15 to-white/20 dark:from-white/10 dark:via-white/5 dark:to-white/10 shadow-[0_8px_30px_rgba(80,35,180,0.15)] px-4 py-2">
        <span className="relative z-10 font-extrabold tracking-tight select-none text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500">
          MV7mood
        </span>
      </div>
    </motion.button>
  </div>
            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center space-x-6">
              {NAV.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.5 + index * 0.08 }}
                  className="relative font-medium text-slate-700 dark:text-slate-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </nav>

            {/* Socials + Collab (desktop) */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              <motion.a
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                href="https://github.com/mahmoudeee665-sudo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65, duration: 0.4 }}
                href="https://www.instagram.com/mv7mood_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                <FiInstagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                href={`https://wa.me/${WHATSAPP_OWNER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="+971567860727"
                className="text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
              </motion.a>

              <motion.button
                onClick={openContactForm}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4, type: "spring", stiffness: 120, damping: 16 }}
                className="ml-1 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-300 to-gray-100 dark:from-gray-700 dark:to-gray-800 text-violet-700 dark:text-violet-300 font-semibold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
              >
                Collab with Me
              </motion.button>
            </div>

            {/* Mobile menu button (inside pill) */}
            <div className="flex md:hidden items-center">
              <motion.button whileTap={{ scale: 0.9 }} onClick={toggleMenu} className="text-slate-800 dark:text-slate-200">
                {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile sheet (slides from pill) */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="md:hidden px-4 sm:px-6 pb-4"
              >
                <div className="mt-2 rounded-xl bg-white/90 dark:bg-zinc-900/85 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg overflow-hidden">
                  <nav className="flex flex-col divide-y divide-white/20 dark:divide-white/10">
                    {NAV.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => handleNavClick(e, item.id)}
                        className="font-medium text-slate-800 dark:text-slate-300 py-3 px-4"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>

                  <div className="flex items-center justify-between px-4 py-3 border-t border-white/30 dark:border-white/10">
                    <div className="flex space-x-4">
                      <a href="https://github.com/mahmoudeee665-sudo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FiGithub className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                      </a>
                      <a href="https://www.instagram.com/mv7mood_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FiInstagram className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                      </a>
                      <a href={`https://wa.me/${WHATSAPP_OWNER}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="+971567860727">
                        <FaWhatsapp className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                      </a>
                    </div>

                    <button
                      onClick={() => {
                        toggleMenu();
                        openContactForm();
                      }}
                      className="px-3 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold text-white text-sm"
                    >
                      Contact Me
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Contact form modal -> sends to WhatsApp on submit */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[120] flex items-center justify-center p-4 pointer-events-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 24 }}
              transition={{ type: "spring", damping: 30, stiffness: 200, duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Get In Touch</h1>
                <button onClick={closeContactForm}>
                  <FiX className="h-5 w-5 text-gray-900 dark:text-gray-100" />
                </button>
              </div>

              <form className="space-y-4" onSubmit={handleSendWhatsApp}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-violet-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Phone (with country code)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+971 5X XXX XXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-violet-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="What do you need help with?"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-violet-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                  {errors.msg && <p className="mt-1 text-xs text-red-500">{errors.msg}</p>}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg text-white inline-flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-lg" />
                  Send on WhatsApp
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
