import React from 'react';
import { Code2, Database, Layout, Palette, PenTool as Tool, Monitor, GitBranch, Figma } from 'lucide-react';

const skills = [
  {
    category: "Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "ECMAScript (ES6)", "Sass (Scss)"]
  },
  {
    category: "Frameworks",
    items: ["React.js", "Vue.js", "Tailwind", "Bootstrap", "Frappe", "ERPNext"]
  },
  {
    category: "Tools",
    items: ["VS Code", "Git", "GitHub", "Figma", "Adobe XD", "Linux"]
  },
  {
    category: "Soft Skills",
    items: ["Communication", "Teamwork", "Problem Solving", "Decision Making", "Analytical Skills"]
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              A skilled Junior Developer with over 2 years of experience, specializing in transforming Figma designs into responsive,
              user-friendly code, with a portfolio of approximately 28-30 completed designs. Proficient in analyzing problems, presenting
              innovative ideas, and enhancing company software to improve operational efficiency and meet business objectives.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800">
                <Code2 size={20} className="mr-2" /> Front-end
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800">
                <Layout size={20} className="mr-2" /> UI/UX
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800">
                <Monitor size={20} className="mr-2" /> Responsive
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-800">
                <Tool size={20} className="mr-2" /> Problem Solving
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <Palette size={16} className="mr-2 text-blue-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}