import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ title, description, imageUrl, link }: { title: string; description: string; imageUrl: string; link: string }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group relative block w-full rounded-lg overflow-hidden shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </a>
  );
};

const ProjectsSection = () => {
  useEffect(() => {
    gsap.utils.toArray(".project-card").forEach((card, index) => {
      gsap.from(card as Element, {
        opacity: 0,
        y: 100,
        duration: 1,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card as Element,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard title="Project 1" description="Description of project 1." imageUrl="/project1.jpg" link="https://example.com/project1" />
          <ProjectCard title="Project 2" description="Description of project 2." imageUrl="/project2.jpg" link="https://example.com/project2" />
          <ProjectCard title="Project 3" description="Description of project 3." imageUrl="/project3.jpg" link="https://example.com/project3" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;