import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Nageeb App",
    description:
      "A Laravel-based application for content management with intuitive navigation and modern tech integration.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    tags: ["Laravel", "HTML/SCSS", "Javascript", "Bootstrap"],
    liveUrl: "https://nageebapp.com/en",
  },
  {
    title: "Nafea Edu",
    description:
      "An educational platform built with modern technologies for interactive learning and dynamic content.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80",
    tags: ["Laravel", "HTML/SCSS", "Javascript", "Bootstrap"],
    liveUrl: "https://nafea-edu.com/en",
  },
  {
    title: "Fat Duster",
    description:
      "Task management app for efficient organization, offering a clean, modern design and secure performance.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    tags: ["Laravel", "HTML/SCSS", "Javascript", "Bootstrap"],
    liveUrl: "https://fatduster.com/en",
  },
  {
    title: "Tarkiba",
    description:
      "E-commerce platform with modern UI and seamless user experience, optimized for all devices.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
    tags: ["Laravel", "HTML/SCSS", "Javascript", "Bootstrap"],
    liveUrl: "https://tarkiba.net/en",
  },
  {
    title: "CRM V2 Landing",
    description:
      "Responsive CRM landing page with a clear layout and optimized for mobile and desktop users.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    tags: ["HTML/SCSS", "Javascript", "Bootstrap"],
    liveUrl: "https://crm-v2-landing-page.vercel.app/",
  },
  {
    title: "E-commerce App",
    description:
      "Firebase-powered e-commerce app with real-time updates, user authentication, and a responsive design.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
    tags: ["HTML/SCSS", "Javascript", "Bootstrap", "Node js"],
    liveUrl: "https://e-commerce-fc321.firebaseapp.com/index.html",
    githubUrl: "https://github.com/mahmoud-wahba-dev/fullstack-purejs-shoppingcart-app",
  },
  {
    title: "Lavaloon Company",
    description:
      "A portfolio website showcasing Lavaloon’s services with smooth navigation and modern design.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
    tags: ["HTML/SCSS", "Javascript", "Bootstrap", "Frappe", "ERPNEXT"],
    liveUrl: "https://www.lavaloon.com/",
  },
  {
    title: "Shabab Forsan Website",
    description:
      "A portfolio website for Shabab Forsan, featuring modern design, easy navigation, and real-time updates.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
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
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
               {
                project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <Github size={20} className="mr-2" />
                    GitHub
                  </a>
                )
               }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
