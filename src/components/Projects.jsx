import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuExternalLink, LuGithub, LuLayoutTemplate, LuMonitor, LuCode } from "react-icons/lu";
import nageeb_img from "../assets/projects/nageeb.webp";
import nafea from "../assets/projects/nafea.webp";
import fatDuster from "../assets/projects/fatduster.webp";
import ecommerce from "../assets/projects/ecommerce_app.webp";
import forsan from "../assets/projects/forsan.webp";
import lavaloon from "../assets/projects/lavaloon.webp";
import tarkiba from "../assets/projects/tarkiba.webp";
import crmLanding from "../assets/projects/crm_landing.webp";
import qyada from "../assets/projects/qyada.webp";
import beon from "../assets/projects/beon.webp";
import lms360 from "../assets/projects/lms360.webp";
import thevmall from "../assets/projects/thevmall.webp";
import preline from "../assets/projects/preline.webp";

// Placeholder images for new projects (replace these with actual screenshots later)
import moatmtBot from "../assets/projects/preline.webp"; // TODO: Replace with actual moatmt-bot.webp
import moatmtChat from "../assets/projects/preline.webp"; // TODO: Replace with actual moatmt-chat.webp
import brightScope from "../assets/projects/qyada.webp"; // TODO: Replace with actual bright-scope.webp
import tailadmin from "../assets/projects/preline.webp"; // TODO: Replace with actual tailadmin.webp

const projects = [
  // ===== FEATURED PROJECTS =====
  {
    title: "Bright Scope UAE",
    category: "fullstack",
    featured: true,
    description:
      "Bilingual SPA for UAE cleaning and pest control services with authentication, booking system, and complete admin dashboard. Full-stack solution with Python backend.",
    image: brightScope,
    tags: [
      "React.js",
      "Python",
      "Tailwind CSS",
      "REST API",
      "Authentication",
      "Admin Dashboard",
      "Bilingual",
      "SPA",
    ],
    vercelUrl: "https://bright-scope.vercel.app",
    clientUrl: null,
    completionDate: "Nov 2025",
    subPages: [],
  },
  {
    title: "Qyada Landing Page & Dashboard",
    category: "fullstack",
    featured: true,
    description:
      "A modern Laravel-powered platform featuring a responsive landing page and a comprehensive dashboard for both admin and employees.",
    image: qyada,
    tags: [
      "Laravel",
      "HTML/SCSS",
      "Javascript",
      "Tailwind CSS",
      "Preline UI",
      "GSAP",
      "SEO",
      "Performance",
    ],
    vercelUrl: null,
    clientUrl: "https://qyada.io/en",
    completionDate: "2024",
    subPages: [],
  },

  // ===== LANDING PAGES =====
  {
    title: "Moatmt Bot Landing Page",
    category: "landing",
    featured: false,
    description:
      "AI-powered WhatsApp chatbot landing page for customer service automation. Features package comparison, client showcase, and interactive demo.",
    image: moatmtBot,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Landing Page",
      "AI Bot",
      "WhatsApp",
    ],
    vercelUrl: null,
    clientUrl: "https://moatmt.sa/",
    completionDate: "Oct 2025",
    subPages: [],
  },
  {
    title: "Moatmt Chat Landing Page",
    category: "landing",
    featured: false,
    description:
      "Landing page for unified communication platform that integrates multiple channels and automates customer support workflows for businesses.",
    image: moatmtChat,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Communication Platform",
      "SaaS",
    ],
    vercelUrl: "https://moatmt-chat.vercel.app",
    clientUrl: null,
    completionDate: "Oct 2025",
    subPages: [],
  },
  {
    title: "Beon Website",
    category: "landing",
    featured: false,
    description:
      "A multi-page web platform with a responsive landing page, OTP verification page, and contact form. Built for seamless user interaction and modern aesthetics.",
    image: beon,
    tags: [
      "Laravel",
      "HTML/SCSS",
      "Javascript",
      "Tailwind CSS",
      "Daisy UI",
      "Splide.js",
      "SEO",
    ],
    vercelUrl: null,
    clientUrl: "https://beon.chat/ar/",
    completionDate: "2024",
    subPages: [
      { name: "OTP Verification", url: "https://beon.chat/ar/otp_v2" },
      { name: "Contact Us", url: "https://beon.chat/ar/contact_us" },
    ],
  },
  {
    title: "CRM V2 Landing",
    category: "landing",
    featured: false,
    description:
      "Responsive CRM landing page with a clear layout and optimized for mobile and desktop users.",
    image: crmLanding,
    tags: ["HTML/SCSS", "Javascript", "Bootstrap", "Landing Page"],
    vercelUrl: "https://crm-v2-landing-page.vercel.app/",
    clientUrl: null,
    completionDate: "2023",
    subPages: [],
  },

  // ===== DASHBOARDS =====
  {
    title: "Preline Admin & Employee Dashboards",
    category: "dashboard",
    featured: false,
    description:
      "A dual-role responsive dashboard built using HTML, Tailwind CSS, and JavaScript. Includes separate views for admin and employee users. Built with Preline UI components, interactive ApexCharts, and NProgress for load indicators.",
    image: preline,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Preline UI",
      "ApexCharts",
      "Dashboard",
    ],
    vercelUrl: "https://preline-dashboard-tailwind.vercel.app/",
    clientUrl: null,
    completionDate: "2024",
    subPages: [
      {
        name: "Admin Dashboard",
        url: "https://preline-dashboard-tailwind.vercel.app/",
      },
      {
        name: "Employee Dashboard",
        url: "https://preline-dashboard-tailwind.vercel.app/home_employee.html",
      },
    ],
  },
  {
    title: "TailAdmin - Professional Dashboard",
    category: "dashboard",
    featured: false,
    description:
      "Flexible, multi-framework admin dashboard compatible with HTML/CSS/JS, React, and Laravel. Features dark mode, multi-language support, and comprehensive data management.",
    image: tailadmin,
    tags: [
      "React",
      "Laravel",
      "Tailwind CSS",
      "Dashboard",
      "Dark Mode",
      "Multi-language",
      "Admin Panel",
    ],
    vercelUrl: "https://tailadmin-dashboard.vercel.app",
    clientUrl: null,
    completionDate: "Aug 2025",
    subPages: [],
  },

  // ===== WEB APPLICATIONS =====
  // {
  //   title: "360 Business LMS",
  //   category: "fullstack",
  //   featured: false,
  //   description:
  //     "A learning management system designed for modern enterprises, featuring responsive design, interactive sliders, and optimized performance. Built with Tailwind CSS, Flowbite components, and Splide.js.",
  //   image: lms360,
  //   tags: [
  //     "Laravel",
  //     "HTML/SCSS",
  //     "Javascript",
  //     "Tailwind CSS",
  //     "LMS",
  //     "Flowbite",
  //     "Splide.js",
  //   ],
  //   vercelUrl: null,
  //   clientUrl: "https://lms.360business-partners.com/ar/home_v2",
  //   completionDate: "2024",
  //   subPages: [],
  // },
  {
    title: "The V Mall",
    category: "fullstack",
    featured: false,
    description:
      "An e-commerce application built with modern frontend technologies, offering a smooth shopping experience with responsive design and interactive sliders.",
    image: thevmall,
    tags: [
      "Laravel",
      "HTML/SCSS",
      "Javascript",
      "Tailwind CSS",
      "E-commerce",
      "Flowbite",
      "Swiper.js",
    ],
    vercelUrl: null,
    clientUrl: "https://thevmall.net/ar",
    completionDate: "2024",
    subPages: [],
  },


  {
    title: "Tarkiba",
    category: "fullstack",
    featured: false,
    description:
      "E-commerce platform with modern UI and seamless user experience, optimized for all devices.",
    image: tarkiba,
    tags: ["Laravel", "HTML/SCSS", "Javascript", "Bootstrap", "E-commerce"],
    vercelUrl: null,
    clientUrl: "https://tarkiba.net/en",
    completionDate: "2023",
    subPages: [],
  },
  {
    title: "E-commerce App",
    category: "fullstack",
    featured: false,
    description:
      "Firebase-powered e-commerce app with real-time updates, user authentication, and a responsive design.",
    image: ecommerce,
    tags: ["HTML/SCSS", "Javascript", "Bootstrap", "Node.js", "Firebase"],
    vercelUrl: null,
    clientUrl: "https://e-commerce-fc321.firebaseapp.com/index.html",
    githubUrl:
      "https://github.com/mahmoud-wahba-dev/fullstack-purejs-shoppingcart-app",
    completionDate: "2023",
    subPages: [],
  },
  {
    title: "Lavaloon Company",
    category: "fullstack",
    featured: false,
    description:
      "A portfolio website showcasing Lavaloon's services with smooth navigation and modern design.",
    image: lavaloon,
    tags: ["HTML/SCSS", "Javascript", "Bootstrap", "Frappe", "ERPNEXT"],
    vercelUrl: null,
    clientUrl: "https://www.lavaloon.com/",
    completionDate: "2023",
    subPages: [],
  },
  {
    title: "Shabab Forsan Website",
    category: "fullstack",
    featured: false,
    description:
      "A portfolio website for Shabab Forsan, featuring modern design, easy navigation, and real-time updates.",
    image: forsan,
    tags: ["HTML/SCSS", "Javascript", "Bootstrap", "Frappe", "ERPNEXT"],
    vercelUrl: null,
    clientUrl: "https://shababforsan.org/",
    completionDate: "2023",
    subPages: [],
  },
];

const categories = [
  { id: "all", label: "All Projects", icon: LuCode },
  { id: "landing", label: "Landing Pages", icon: LuLayoutTemplate },
  { id: "dashboard", label: "Dashboards", icon: LuMonitor },
  { id: "fullstack", label: "Web Applications", icon: LuCode },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const featuredProjects = projects.filter((p) => p.featured);
  const filteredProjects = projects.filter(
    (p) => !p.featured && (activeCategory === "all" || p.category === activeCategory)
  );

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Showcasing modern web applications, landing pages, and dashboards built with cutting-edge technologies
        </p>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
              <h3 className="text-2xl font-bold text-gray-900">Featured Projects</h3>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 6).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full border border-blue-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.clientUrl && (
                        <a
                          href={project.clientUrl}
                          target="_blank"
                          aria-label="View Production"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all transform hover:scale-105"
                        >
                          <LuExternalLink size={16} className="mr-2" />
                          View Production
                        </a>
                      )}
                      {project.vercelUrl && (
                        <a
                          href={project.vercelUrl}
                          target="_blank"
                          aria-label="View Demo"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all transform hover:scale-105"
                        >
                          <LuExternalLink size={16} className="mr-2" />
                          View Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-xl shadow-md p-1.5 gap-1">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon size={18} className="mr-2" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  {project.completionDate && (
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                        {project.completionDate}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2">
                    {project.clientUrl && (
                      <a
                        href={project.clientUrl}
                        target="_blank"
                        aria-label="View Production"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        <LuExternalLink size={18} className="mr-2" />
                        View Production
                      </a>
                    )}
                    {project.vercelUrl && (
                      <a
                        href={project.vercelUrl}
                        target="_blank"
                        aria-label="View Demo"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                      >
                        <LuExternalLink size={18} className="mr-2" />
                        View Demo (Vercel)
                      </a>
                    )}

                    {project.subPages?.length > 0 && (
                      <div className="flex flex-col gap-1 ml-6 mt-1">
                        {project.subPages.map((subPage, subIndex) => (
                          <a
                            key={subIndex}
                            href={subPage.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-500 hover:text-blue-600 flex items-center"
                          >
                            <LuExternalLink size={14} className="mr-1" />
                            {subPage.name}
                          </a>
                        ))}
                      </div>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        aria-label="GitHub"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium"
                      >
                        <LuGithub size={18} className="mr-2" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
