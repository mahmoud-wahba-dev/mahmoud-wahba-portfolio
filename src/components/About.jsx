import { LuCodeXml, LuMonitor, LuPenTool } from "react-icons/lu";
import { FiLayout } from "react-icons/fi";

import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaVuejs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaLinux,
  FaComments,
  FaUsers,
  FaPuzzlePiece,
  FaBalanceScale,
  FaChartLine,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiFrappe,
  SiErpnext,
  SiAdobexd,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      {
        name: "JavaScript",
        icon: <RiJavascriptFill className="text-indigo-400" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      {
        name: "ECMAScript (ES6)",
        icon: <IoLogoJavascript className="text-teal-500" />,
      },
      { name: "Sass (Scss)", icon: <FaSass className="text-pink-500" /> },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Vue.js", icon: <FaVuejs className="text-green-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
      { name: "Frappe", icon: <SiFrappe className="text-blue-600" /> },
      { name: "ERPNext", icon: <SiErpnext className="text-blue-800" /> },
    ],
  },
  {
    category: "Tools",
    items: [
      {
        name: "VS Code",
        icon: <BiLogoVisualStudio className="text-blue-500" />,
      },

      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
      { name: "Figma", icon: <FaFigma className="text-purple-600" /> },
      { name: "Adobe XD", icon: <SiAdobexd className="text-pink-500" /> },
      { name: "Linux", icon: <FaLinux className="text-black" /> },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Communication", icon: <FaComments className="text-blue-500" /> },
      { name: "Teamwork", icon: <FaUsers className="text-green-500" /> },
      {
        name: "Problem Solving",
        icon: <FaPuzzlePiece className="text-yellow-500" />,
      },
      {
        name: "Decision Making",
        icon: <FaBalanceScale className="text-purple-500" />,
      },
      {
        name: "Analytical Skills",
        icon: <FaChartLine className="text-teal-500" />,
      },
    ],
  },
];
export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              A Junior Developer with 2+ years of experience, specializing in
              transforming Figma designs into responsive, user-friendly code.
              Proficient in React, JavaScript, and CSS, I have completed 28-30
              projects, focusing on problem-solving, innovation, and improving
              software efficiency to meet business goals.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800">
                <LuCodeXml size={20} className="mr-2" /> Front-end
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800">
                <FiLayout size={20} className="mr-2" />
                UI/UX
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800">
                <LuMonitor size={20} className="mr-2" /> Responsive
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-800">
                <LuPenTool size={20} className="mr-2" /> Problem Solving
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      {skill.icon}
                      <span className="ml-2">{skill.name}</span>
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
