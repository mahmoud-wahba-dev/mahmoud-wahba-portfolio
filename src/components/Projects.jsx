import { LuExternalLink, LuGithub } from "react-icons/lu";
import nageeb from "../assets/projects/nageeb.png";
import nafea from "../assets/projects/nafea.png";
import fatDuster from "../assets/projects/fatduster.png";
import ecommerce from "../assets/projects/ecommerce_app.png";
import forsan from "../assets/projects/forsan.png";
import lavaloon from "../assets/projects/lavaloon.png";
import tarkiba from "../assets/projects/tarkiba.png";
import crmLanding from "../assets/projects/crm_landing.png";
const projects = [
  {
    title: "Nageeb App",
    description:
      "A Laravel-based application for content management with intuitive navigation and modern tech integration.",
    image: nageeb,
    tags: ["Laravel", "HTML/SCSS", "Javascript", "Bootstrap"],
    liveUrl: "https://nageebapp.com/en",
  },
  {
    title: "Nafea Edu",
    description:
      "An educational platform built with modern technologies for interactive learning and dynamic content.",
    image: nafea,
    tags: ["Laravel", "HTML/SCSS", "Javascript", "Bootstrap"],
    liveUrl: "https://nafea-edu.com/en",
  },
  {
    title: "Fat Duster",
    description:
      "Task management app for efficient organization, offering a clean, modern design and secure performance.",
    image: fatDuster,
    tags: ["Laravel", "HTML/SCSS", "Javascript", "Bootstrap"],
    liveUrl: "https://fatduster.com/en",
  },
  {
    title: "Tarkiba",
    description:
      "E-commerce platform with modern UI and seamless user experience, optimized for all devices.",
    image: tarkiba,
    tags: ["Laravel", "HTML/SCSS", "Javascript", "Bootstrap"],
    liveUrl: "https://tarkiba.net/en",
  },
  {
    title: "CRM V2 Landing",
    description:
      "Responsive CRM landing page with a clear layout and optimized for mobile and desktop users.",
    image: crmLanding,
    tags: ["HTML/SCSS", "Javascript", "Bootstrap"],
    liveUrl: "https://crm-v2-landing-page.vercel.app/",
  },
  {
    title: "E-commerce App",
    description:
      "Firebase-powered e-commerce app with real-time updates, user authentication, and a responsive design.",
    image: ecommerce,
    tags: ["HTML/SCSS", "Javascript", "Bootstrap", "Node js"],
    liveUrl: "https://e-commerce-fc321.firebaseapp.com/index.html",
    githubUrl:
      "https://github.com/mahmoud-wahba-dev/fullstack-purejs-shoppingcart-app",
  },
  {
    title: "Lavaloon Company",
    description:
      "A portfolio website showcasing Lavaloon’s services with smooth navigation and modern design.",
    image: lavaloon,
    tags: ["HTML/SCSS", "Javascript", "Bootstrap", "Frappe", "ERPNEXT"],
    liveUrl: "https://www.lavaloon.com/",
  },
  {
    title: "Shabab Forsan Website",
    description:
      "A portfolio website for Shabab Forsan, featuring modern design, easy navigation, and real-time updates.",
    image: forsan,
    tags: ["HTML/SCSS", "Javascript", "Bootstrap", "Frappe", "ERPNEXT"],
    liveUrl: "https://shababforsan.org/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-gray-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <LuExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700"
                    >
                      <LuGithub size={20} className="mr-2" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
