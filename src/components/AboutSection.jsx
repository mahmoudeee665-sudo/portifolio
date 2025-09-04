import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);

  // stars refs
  const starsRef = useRef([]);
  const setStarRef = (el, i) => {
    if (el) starsRef.current[i] = el;
  };
  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) starsRef.current.push(el);
  };
  // combine both refs (so we keep EXACT structure and logic)
  const starRefCombo = (i) => (el) => {
    addToStars(el);
    setStarRef(el, i);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: -430,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Intro animation (kept y:-400 like in video)
    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: -400,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Stars animation (alternating direction + random scrub)
    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.5;

      gsap.to(star, {
        x: `${direction * (100 + index * 20)}`,
        y: `${direction * (-50 - index * 10)}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      });
    });

    // cleanup (only this section's triggers)
    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t?.vars?.trigger === sectionRef.current) t.kill();
      });
      gsap.killTweensOf(starsRef.current);
    };
  }, []);

  return (
    <section
    section id="about"
      ref={sectionRef}
      className="h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]"
    >
      {/* stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={`star-${i}`}
            ref={starRefCombo(i)}
            className="absolute rounded-full"
            style={{
              width: `${8 + i * 2}px`,
              height: `${8 + i * 2}px`,
              backgroundColor: "white",
              opacity: 0.25 + Math.random() * 0.35,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* title (same wrapper/classes as tutorial) */}
      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center ">
        <h1
          ref={titleRef}
          className="font-sans text-4xl md:text-7xl font-bold sm:mb-1 text-center text-white opacity-0"
        >
          About Me
        </h1>
      </div>

      {/* absolute intro row (exact layout from screenshot) */}
      <div
        ref={introRef}
        className="absolute lg:bottom-[-20rem] md:bottom-[-10rem] bottom-[-20rem] left-0 w-full flex md:flex-row flex-col justify-between lg:px-24 px-5 items-center opacity-0"
      >
        <h3 className="font-sans text-lg md:text-2xl font-bold text-purple-200 z-50 lg:max-w-[45rem] max-w-[27rem] tracking-wider md:mt-20 sm:mt-[-40rem] mt-[-32rem]">
Hi, I’m Mahmoud, a Frontend Developer passionate about creating fast, reliable, and visually engaging websites. I design responsive interfaces with modern frameworks like React, Tailwind CSS, and JavaScript. From landing pages to full web apps, I focus on clean, scalable code and smooth user experiences that balance design and functionality.
        </h3>

        <img
          className="lg:h-[40rem] md:h-[35rem] h-[30rem] mix-blend-lighten"
          src="/images/me.png"
          alt="profile-img"
        />
      </div>
    </section>
  );
};

export default AboutSection;
