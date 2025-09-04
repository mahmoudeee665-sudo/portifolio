import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";


const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const triggerRef = useRef(null);
  const horizontalRef = useRef(null);

  // Project Images data
  const projectImages = [
    {
      id: 1,
      title: "Car Rental landPage",
      imageSrc: "/images/RoyalCar.png",
    },
    {
      id: 2,
      title: "Car rental website",
      imageSrc: "/images/RentAndGo.png",
    },
    {
      id: 3,
      title: "Ai Agency 'tailwind' ",
      imageSrc: "/images/Agency.png",
    },
    {
      id: 4,
      title: "Car Rental About-page",
      imageSrc: "/images/RentAndGoo.png",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // title reveal animation
    gsap.fromTo(
      titleRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Title Line Animation
    gsap.fromTo(
      titleLineRef.current,
      {
        width: "0%",
        opacity: 0,
      },
      {
        width: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // section entrance effect
    gsap.fromTo(
      triggerRef.current,
      {
        y: 100,
        rotationX: 20,
        opacity: 0,
      },
      {
        y: 0,
        rotationX: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Parallax effect for the entire section
    gsap.fromTo(
      sectionRef.current,
      {
        backgroundPosition: "50% 0%",
      },
      {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Horizontal Scrolling
    const horizontalScroll = gsap.to(".panel", {
      xPercent: -100 * (projectImages.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () =>
          "+=" +
          (horizontalRef.current.scrollWidth - triggerRef.current.clientWidth),
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        snap: {
          snapTo: 1 / (projectImages.length - 1),
          duration: { max: 0.2 },
          delay: 0.1,
        },
        invalidateOnRefresh: true,
      },
    });

    // Image Animation
    // Animate each image panel
    const panels = gsap.utils.toArray(".panel");
    panels.forEach((panel) => {
      const image = panel.querySelector(".project-image");
      const imageTitle = panel.querySelector(".project-title");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          containerAnimation: horizontalScroll, // <-- key line
          start: "left center",
          end: "right center",
          scrub: true,
        },
      });

      tl.fromTo(
        image,
        { scale: 0, rotation: -20, transformOrigin: "50% 50%" },
        { scale: 1, rotation: 1, duration: 0.5 }
      );

      if (imageTitle) {
        tl.fromTo(imageTitle, { y: 30 }, { y: -100, duration: 0.3 }, 0.2);
      }
    });
  }, [projectImages.length]);

  return (
    <section
    
      ref={sectionRef}
      id="horizantol-section "
      className="relative py-20 bg-gradient-to-b from-[#9a74cf50] to-black overflow-hidden"
    >
      {/* section title */}
      <div className="container mx-auto px-4 mb-16 relative z-10 ">
        <h2
        id="projects"
          ref={titleRef}
          className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-4 opacity-0"
        >
          Lastest Projects
        </h2>
        <div
          ref={titleLineRef}
          className=" w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0" 
        ></div>
      </div>

      {/* Horizontal Scroll Section */}
      <div ref={triggerRef} className="overflow-hidden opacity-0">
        <div
          ref={horizontalRef}
          className="horizontal-section flex md:w-[400%] w-[420%]"
        >
          {projectImages.map((project) => (
            <div
              Loading
              key={project.id}
              className="panel relative flex items-center justify-center"
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12">
                <img
                  className="project-image max-w-full max-h-full rounded-3xl object-cover"
                  src={project.imageSrc}
                  alt="Project-img"
                />
                <h2 className="font-sans project-title flex items-center gap-3 md:text-4xl text-lg md:font-bold text-violet-200 mt-6 z-50 text-nowrap hover:text-gray-400 transition-colors duration-300 cursor-pointer">
                  {project.title} <SlShareAlt />
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
