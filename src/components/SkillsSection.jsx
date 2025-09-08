"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiJquery,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FiSmartphone } from "react-icons/fi";

const SKILLS = [
  {
    name: "React",
    level: 92,
    color: "#61DAFB",
    Icon: SiReact,
    tag: "Framework",
  },
  {
    name: "JavaScript",
    level: 90,
    color: "#F7DF1E",
    Icon: SiJavascript,
    tag: "Language",
  },

  { name: "HTML", level: 100, color: "#E34F26", Icon: SiHtml5, tag: "Markup" },
  { name: "CSS", level: 100, color: "#1572B6", Icon: SiCss3, tag: "Styles" },
  {
    name: "SASS / SCSS",
    level: 65,
    color: "#CC6699",
    Icon: SiSass,
    tag: "Styles",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    color: "#38BDF8",
    Icon: SiTailwindcss,
    tag: "Styles",
  },
  {
    name: "Bootstrap",
    level: 75,
    color: "#7952B3",
    Icon: SiBootstrap,
    tag: "UI",
  },
  {
    name: "Responsive Design",
    level: 84,
    color: "#22C55E",
    Icon: FiSmartphone,
    tag: "UX",
  },
  {
    name: "jQuery",
    level: 60,
    color: "#0769AD",
    Icon: SiJquery,
    tag: "Legacy",
  },
  { name: "Git", level: 70, color: "#F05033", Icon: SiGit, tag: "Tools" },
  { name: "GitHub", level: 75, color: "#181717", Icon: SiGithub, tag: "Tools" },
];

export default function SkillsSectionAlt({
  title = "Skills",
  subtitle = "Gooey Nebula — liquid, living UI",
  skills = SKILLS,
}) {
  const marquee = useMemo(
    () => skills.map((s) => s.name).join(" • "),
    [skills]
  );

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-black via-violet-950 to-black"
    >
      {/* SVG filters (gooey) */}
      <svg
        className="absolute -z-10 pointer-events-none"
        width="0"
        height="0"
        aria-hidden
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* subtle starfield */}
      <div className="absolute inset-0 -z-20 opacity-90 bg-[radial-gradient(circle_at_10%_10%,rgba(139,92,246,0.15),transparent_55%),radial-gradient(circle_at_90%_20%,rgba(236,72,153,0.15),transparent_55%),linear-gradient(180deg,#0b0b10_0%,#0f0f16_100%)]" />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-300/90">
            Fluid Capabilities
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm md:text-base text-purple-200/80">
              {subtitle}
            </p>
          )}
          <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
        </div>

        {/* Gooey blob field */}
        <div className="relative mx-auto max-w-5xl">
          <div
            className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            style={{ filter: "url(#goo)" }}
          >
            {skills.map((s, i) => (
              <Blob key={s.name} {...s} index={i} />
            ))}
            {/* extra tiny blobs just for organic feel */}
            {Array.from({ length: 6 }).map((_, i) => (
              <FloatingDot key={`dot-${i}`} delay={i * 0.6} />
            ))}
          </div>
        </div>

        {/* marquee */}
      </div>
    </section>
  );
}

function Blob({ name, level, color, Icon, tag, index }) {
  const float = {
    y: [0, -10, 0, 6, 0],
    x: [0, 6, 0, -4, 0],
    transition: {
      repeat: Infinity,
      duration: 6 + (index % 5),
      ease: "easeInOut",
    },
  };

  const ringStyle = {
    background: `conic-gradient(${color} ${
      level * 3.6
    }deg, rgba(255,255,255,0.08) 0deg)`,
  };

  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      animate={float}
      className="relative rounded-[2.5rem] p-1"
    >
      {/* outer liquid */}
      <div className="rounded-[2.5rem] p-1 bg-gradient-to-br from-violet-600/30 to-pink-600/30">
        {/* inner content */}
        <div className="relative rounded-[2rem] bg-zinc-900/80 border border-white/10 backdrop-blur">
          {/* glow */}
          <div
            className="absolute -inset-px rounded-[2rem] opacity-0 hover:opacity-100 transition pointer-events-none"
            style={{
              background:
                "radial-gradient(60%_50%_at_50%_10%,rgba(168,85,247,0.25),transparent_70%)",
            }}
          />

          {/* header */}
          <div className="flex items-center gap-3 p-4">
            <div className="relative shrink-0">
              <div className="w-12 h-12 rounded-full grid place-items-center bg-zinc-800/80 border border-white/10">
                <Icon size={26} color={color} />
              </div>
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-white truncate">{name}</h3>
              <p className="text-[11px] text-purple-200/70">{tag}</p>
            </div>
            <div className="ml-auto text-sm font-semibold text-purple-100/90">
              {level}%
            </div>
          </div>

          {/* liquid progress: ring + bar */}
          <div className="px-4 pb-4 grid grid-cols-[auto_1fr] items-center gap-3">
            <div className="relative w-12 h-12 rounded-full" style={ringStyle}>
              <div className="absolute inset-[3px] rounded-full bg-zinc-900 grid place-items-center">
                <span className="text-[10px] text-purple-100/90">{level}%</span>
              </div>
            </div>
            <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 0.9 }}
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FloatingDot({ delay = 0 }) {
  return (
    <motion.div
      className="w-6 h-6 rounded-3xl bg-gradient-to-br from-violet-400/40 to-pink-400/40"
      initial={{ opacity: 0.6 }}
      animate={{
        opacity: [0.6, 1, 0.6],
        y: [0, -20, 0],
        x: [0, 10, 0],
      }}
      transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay }}
    />
  );
}
