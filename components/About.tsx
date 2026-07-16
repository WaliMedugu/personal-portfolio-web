import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  useEffect(() => {
    gsap.from(".about-image", {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
      },
    });

    gsap.from(".about-text", {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="py-20 about-section">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16">
        <div className="w-full md:w-1/2">
          <img src="/your-image.jpg" alt="About Me" className="about-image rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 about-text">About Me</h2>
          <p className="text-gray-700 about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;