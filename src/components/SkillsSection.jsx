// src/components/SkillTiles.jsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  { name: "React", level: 85, color: "#61DAFB", Icon: SiReact, primary: true },
  { name: "JavaScript", level: 90, color: "#F7DF1E", Icon: SiJavascript },
  { name: "TypeScript", level: 78, color: "#3178C6", Icon: SiTypescript },
  { name: "HTML", level: 100, color: "#E34F26", Icon: SiHtml5 },
  { name: "CSS", level: 100, color: "#1572B6", Icon: SiCss3 },
  { name: "SASS / SCSS", level: 65, color: "#CC6699", Icon: SiSass },
  { name: "jQuery", level: 60, color: "#0769AD", Icon: SiJquery },
  { name: "Tailwind CSS", level: 90, color: "#38BDF8", Icon: SiTailwindcss },
  { name: "Bootstrap", level: 75, color: "#7952B3", Icon: SiBootstrap },
  { name: "Git", level: 70, color: "#F05033", Icon: SiGit },
  { name: "GitHub", level: 75, color: "#181717", Icon: SiGithub },
  { name: "Responsive Design", level: 80, color: "#22C55E", Icon: FiSmartphone },
];




export default function SkillTiles({
  title = "Skills",
  subtitle = "Smooth, modern, and responsive",
  skills = SKILLS,
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const animateReplayable = (target, fromVars, toVars, start = "top 85%") => {
      gsap.set(target, fromVars);
      ScrollTrigger.create({
        trigger: target,
        start,
        onEnter: () => gsap.to(target, toVars),
        onEnterBack: () => gsap.to(target, { ...toVars, duration: 0.6 }),
        onLeave: () => gsap.set(target, fromVars),
        onLeaveBack: () => gsap.set(target, fromVars),
      });
    };

    // Title
    const titleEl = section.querySelector(".tiles-title");
    const subEl = section.querySelector(".tiles-sub");
    if (titleEl) animateReplayable(titleEl, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "top 80%");
    if (subEl) animateReplayable(subEl, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "top 80%");

    // Tiles
    const tiles = section.querySelectorAll(".skill-tile");
    tiles.forEach((tile) => {
      animateReplayable(tile, { y: 40, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.55 }, "top 85%");
    });

    // Bars
    const bars = section.querySelectorAll(".skill-bar");
    bars.forEach((bar) => {
      const lv = Number(bar.dataset.level || 0);
      gsap.set(bar, { width: "0%" });
      ScrollTrigger.create({
        trigger: bar,
        start: "top 90%",
        onEnter: () => gsap.to(bar, { width: lv + "%", duration: 1 }),
        onEnterBack: () => gsap.to(bar, { width: lv + "%", duration: 0.8 }),
        onLeave: () => gsap.set(bar, { width: "0%" }),
        onLeaveBack: () => gsap.set(bar, { width: "0%" }),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (section.contains(st.trigger)) st.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills-section"
      className="relative py-16 md:py-20 bg-gradient-to-r from-[#EBD8FF] via-[#DCC2FF] to-[#C3A5FF]"
      aria-labelledby="skills-tiles-heading"
    >
      <div className="container mx-auto px-4 max-w-6xl"id="experience">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            id="skills-tiles-heading"
            className="tiles-title text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="tiles-sub mt-2 text-base text-zinc-700">{subtitle}</p>
          )}
          <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ name, level, color, Icon, primary }) => (
            <li
              key={name}
              className={[
                "skill-tile group relative rounded-2xl p-6 shadow-lg bg-white border border-purple-100 transition-all duration-500 transform",
                "hover:-translate-y-3 hover:scale-[1.05] hover:shadow-2xl", // lift + scale
                "hover:border-transparent hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50", // gradient glow
                primary ? "ring-2 ring-purple-500/40" : "",
              ].join(" ")}
            >
              <div className="flex items-center gap-4">
                {/* Icon wrapper */}
                <div
                  className="icon-wrapper shrink-0 p-3 rounded-xl bg-gradient-to-br from-purple-200 to-pink-200 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                >
                  <Icon
                    size={40}
                    color={color}
                    className="transition-transform duration-500 group-hover:-rotate-6"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-zinc-900 flex items-center gap-2">
                    <span className="truncate">{name}</span>
                    {primary && (
                      <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-purple-600 text-white">
                        Primary
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-zinc-500">Proficiency</p>
                </div>
                <div className="ml-auto text-sm font-semibold text-zinc-600">{level}%</div>
              </div>

              {/* Progress bar */}
              <div className="mt-5 h-2 w-full rounded-full bg-zinc-200 overflow-hidden">
                <div
                  className="skill-bar h-full rounded-full"
                  data-level={level}
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(124,58,237,1) 0%, rgba(236,72,153,1) 100%)",
                    width: "0%",
                  }}
                />
              </div>

              {/* Hover glow ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-400/40 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-500 pointer-events-none" />
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Modern Frontend", "UI/UX", "Performance", "Animation", "Teamwork"].map(
            (tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-purple-600 text-white text-xs shadow-sm"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
