import { Code, Database, LayoutDashboard } from "lucide-react";

const SkillCard = ({ icon: IconComponent, title, description }: { icon: any; title: string; description: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300">
      <IconComponent size={48} className="text-blue-500" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard icon={Code} title="Coding" description="Proficient in JavaScript, TypeScript, and React." />
          <SkillCard icon={Database} title="Databases" description="Experience with SQL and NoSQL databases." />
          <SkillCard icon={LayoutDashboard} title="UI/UX" description="Designing intuitive user interfaces." />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;