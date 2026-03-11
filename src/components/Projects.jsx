import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuExternalLink,
  LuGithub,
  LuLayoutTemplate,
  LuMonitor,
  LuCode,
} from "react-icons/lu";
import ecommerce from "../assets/projects/ecommerce_app.webp";
import forsan from "../assets/projects/forsan.webp";
import lavaloon from "../assets/projects/lavaloon.webp";
import tarkiba from "../assets/projects/tarkiba.webp";
import crmLanding from "../assets/projects/crm_landing.webp";
import qyada from "../assets/projects/qyada.webp";
import thevmall from "../assets/projects/thevmall.webp";
import preline from "../assets/projects/preline.webp";

// Placeholder images for new projects (replace these with actual screenshots later)
import moatmtBot from "../assets/projects/moatmt-bot.webp"; // TODO: Replace with actual moatmt-bot.webp
import moatmtChat from "../assets/projects/moatmt-chat.webp"; // TODO: Replace with actual moatmt-chat.webp
import tailadmin from "../assets/projects/tailadmin-dashboard.webp"; // TODO: Replace with actual tailadmin.webp
import notice from "../assets/projects/notice.webp"; // TODO: Replace with actual tailadmin.webp
import themes from "../assets/projects/themes.webp"; // TODO: Replace with actual tailadmin.webp
import mahlak from "../assets/projects/mahlak-shein.webp"; // TODO: Replace with actual tailadmin.webp
import brightScope from "../assets/projects/brightScope.webp"; // TODO: Replace with actual tailadmin.webp
import ramadan from "../assets/projects/ramadan.webp"; // TODO: Replace with actual tailadmin.webp
import boto from "../assets/projects/boto.webp"; // TODO: Replace with actual tailadmin.webp
import connectly from "../assets/projects/connectly.webp"; // TODO: Replace with actual tailadmin.webp

const projects = [
  // ===== FEATURED PROJECTS =====
  {
    title: "Bright Scope UAE Website",
    category: "fullstack",
    featured: true,
    description:
      "Professional bilingual SPA for Bright Scope UAE, built for cleaning and pest control services with a fast React.js frontend, full Arabic and English RTL/LTR support, authentication, account creation, service booking, REST API integration, and a complete admin dashboard. The platform turns the company website into a real operational system for managing users, services, bookings, and dynamic content with a Python backend.",
    image: brightScope,
    tags: [
      "React.js",
      "Tailwind CSS",
      "FlyonUI",
      "Vite",
      "REST API",
      "Authentication",
      "Booking System",
      "Admin Dashboard",
      "CRUD Operations",
      "SPA",
      "Multi-language (RTL/LTR)",
      "Responsive Design",
    ],
    vercelUrl: "https://bright-scope.vercel.app",
    clientUrl: null,
    completionDate: "Nov 2025",
    subPages: [],
  },
  {
    title: "Connectly UGC Creators Platform KSA Landing Page",
    category: "landing",
    featured: true,
    description:
      "Landing page for Connectly, a platform that connects e-commerce stores with UGC creators to produce high-converting promotional videos for social media. The website clearly presents the platform concept, creator showcase, pricing packages, and order flow, helping store owners understand the service quickly and start with confidence.",
    image: connectly,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "FlyonUI",
      "Vite",
      "GSAP",
      "AOS Animation",
      "Figma to Code",
      "Pixel-Perfect Design",
      "Responsive Design",
      "SEO Optimization",
    ],
    vercelUrl: "https://connectly-moatmt.vercel.app/",
    clientUrl: null,
    completionDate: "2025",
    subPages: [],
  },

  // ===== LANDING PAGES =====

  {
    title: "Moatmt Ramadan Campaign Landing Page",
    category: "landing",
    featured: false,
    description:
      "Marketing landing page for Moatmt's Ramadan campaign, promoting AI-powered WhatsApp customer-service automation for e-commerce stores. The page highlights Ramadan offers and discount messaging, explains core automation benefits, presents onboarding steps, includes FAQ support, and is built with a conversion-focused structure to help merchants start quickly during the high-demand season.",
    image: ramadan,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "FlyonUI",
      "Vite",
      "AOS Animation",
      "GSAP",
      "Figma to Code",
      "Pixel-Perfect Design",
      "Responsive Design",
      "SEO Optimization",
    ],
    vercelUrl: "https://moatmt-ramadan-landing.vercel.app/",
    clientUrl: "https://moatmt.sa/ramadan",
    completionDate: "2026",
    subPages: [],
  },

  {
    title: "Boto WhatsApp Bot Landing Page",
    category: "landing",
    featured: false,
    description:
      "Landing page for Boto WhatsApp Bot, a service that helps e-commerce stores automate customer communication and support workflows through WhatsApp. The page presents service features, integrations, pricing plans, customer testimonials, FAQ, and clear product sections focused on conversion, while emphasizing AI-powered reply automation, abandoned-cart recovery, order update notifications, and smart customer-service management.",
    image: boto,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "FlyonUI",
      "Vite",
      "AOS Animation",
      "GSAP",
      "Figma to Code",
      "Pixel-Perfect Design",
      "Responsive Design",
      "SEO Optimization",
    ],
    vercelUrl: "https://boto-landing-orpin.vercel.app/",
    clientUrl: null,
    completionDate: "2026",
    subPages: [],
  },

  {
    title: "Saudi Notice Landing Page",
    category: "landing",
    featured: false,
    description:
      "Professional Saudi landing page for Notes, a smart marketing notification tool built to help e-commerce stores increase engagement and sales through real-time, trustworthy notifications. The page highlights ready-made notification flows, full visual customization, fast setup, detailed analytics, behavior-based targeting, third-party marketing integrations, real customer testimonials, and complete responsiveness across desktop, tablet, and mobile.",
    image: notice,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "FlyonUI",
      "Vite",
      "Figma to Code",
      "Pixel-Perfect Design",
      "Responsive Design",
      "SEO Optimization",
    ],
    vercelUrl: "https://notice-landing-page.vercel.app/",
    clientUrl: null,
    completionDate: "Aug 2025",
    subPages: [],
  },
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
      "DaisyUI",
      "Vite",
      "Figma to Code",
      "Pixel-Perfect Design",
      "Responsive Design",
      "SEO Optimization",
    ],
    vercelUrl: "https://moatmt-bot-landing.vercel.app/",
    clientUrl: "https://moatmt.sa/",
    completionDate: "Oct 2025",
    subPages: [],
  },

  {
    title: "Saudi Moatmt Themes Landing Page",
    category: "landing",
    featured: false,
    description:
      "Professional Saudi landing page for Moatmt Themes, a collection of ready-made storefront themes designed to customize e-commerce stores with a polished visual style, strong performance, and a smooth user experience. The page showcases premium themes, customer reviews, easy customization and publishing steps, FAQ support, and direct contact channels through WhatsApp and email, with a strong focus on the Saudi market and conversion-driven presentation.",
    image: themes,
    tags: [
      "HTML5",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "FlyonUI",
      "Vite",
      "Responsive Design",
      "Figma to Code",
      "Pixel-Perfect Design",
      "SEO Optimization",
    ],
    vercelUrl: "https://moatmt-themat.vercel.app/",
    clientUrl: null,
    completionDate: "Jun 2025",
    subPages: [],
  },

  {
    title: "Mahalk-Shein Saudi Landing Page",
    category: "landing",
    featured: false,
    description:
      "Corporate website for Mahalk-Shein Saudi Arabia, initially prototyped with Lovable AI in React and then fully converted into a Laravel-compatible implementation while preserving the intended design and user experience. The project included competitor research, responsive layout design, full Arabic and English support with RTL/LTR handling, dark and light modes, and key marketing sections such as home, about, pricing, blog, FAQ, and contact.",
    image: mahlak,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Laravel",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Vite",
      "Responsive Design",
      "Dark Mode",
      "Light Mode",
      "RTL/LTR",
      "Lovable AI",
      "Competitor Analysis",
    ],
    vercelUrl: "https://mahalk-shein-landing.vercel.app/",
    clientUrl: null,
    completionDate: "Jan 2026",
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
      "DaisyUI",
      "Next.js",
      "Vite",
      "Figma to Code",
      "Pixel-Perfect Design",
      "Responsive Design",
      "SEO Optimization",
    ],
    vercelUrl: "https://moatmt-chat-landing.vercel.app/",
    clientUrl: null,
    completionDate: "Oct 2025",
    subPages: [],
  },

  // ===== DASHBOARDS =====

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
      "Vite",
      "Dark Mode",
      "Multi-language (RTL/LTR)",
      "Admin Panel",
    ],
    vercelUrl: "https://tailadmin-dashboard.vercel.app",
    clientUrl: null,
    completionDate: "Aug 2025",
    subPages: [],
  },
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
      "Vite",
    ],
    vercelUrl: "https://preline-dashboard-tailwind.vercel.app/",
    clientUrl: null,
    completionDate: "2024",
    subPages: [
      {
        name: "Employee Dashboard",
        url: "https://preline-dashboard-tailwind.vercel.app/home_employee.html",
      },
    ],
  },

  // ============
  {
    title: "CRM V2 Landing",
    category: "landing",
    featured: false,
    description:
      "Responsive CRM landing page with a clear layout and optimized for mobile and desktop users.",
    image: crmLanding,
    tags: [
      "HTML/SCSS",
      "JavaScript",
      "Bootstrap",
      "Figma to Code",
      "Pixel-Perfect Design",
      "SEO Optimization",
    ],
    vercelUrl: "https://crm-v2-landing-page.vercel.app/",
    clientUrl: null,
    completionDate: "2024",
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
      "JavaScript",
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
    tags: ["Laravel", "HTML/SCSS", "JavaScript", "Bootstrap"],
    vercelUrl: null,
    clientUrl: "https://tarkiba.net/en",
    completionDate: "2024",
    subPages: [],
  },

  {
    title: "Lavaloon Company",
    category: "fullstack",
    featured: false,
    description:
      "A portfolio website showcasing Lavaloon's services with smooth navigation and modern design.",
    image: lavaloon,
    tags: ["HTML/SCSS", "JavaScript", "Bootstrap", "Frappe", "ERPNEXT"],
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
    tags: ["HTML/SCSS", "JavaScript", "Bootstrap", "Frappe", "ERPNEXT"],
    vercelUrl: null,
    clientUrl: "https://shababforsan.org/",
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
    tags: ["HTML/SCSS", "JavaScript", "Bootstrap", "Node.js", "Firebase"],
    vercelUrl: "https://e-commerce-fc321.firebaseapp.com/index.html",
    clientUrl: null,
    githubUrl:
      "https://github.com/mahmoud-wahba-dev/fullstack-purejs-shoppingcart-app",
    completionDate: "2022",
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
  const [selectedProject, setSelectedProject] = useState(null);
  const shouldShowReadMore = (description) => description.length > 95;

  const featuredProjects = projects.filter((p) => p.featured);
  const filteredProjects = projects.filter(
    (p) =>
      !p.featured &&
      (activeCategory === "all" || p.category === activeCategory),
  );

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-x-hidden"
    >
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">
          My Projects
        </h2>
        <p className="text-center text-sm sm:text-base text-gray-600 mb-10 sm:mb-16 max-w-2xl mx-auto">
          Showcasing modern web applications, landing pages, and dashboards
          built with cutting-edge technologies
        </p>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Featured Projects
              </h3>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
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

                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    {shouldShowReadMore(project.description) && (
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700 mb-4"
                      >
                        Read full description
                      </button>
                    )}

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full border border-blue-100"
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
                          aria-label="View Production (Client Domain)"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 sm:px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all transform hover:scale-105"
                        >
                          <LuExternalLink size={16} className="mr-2" />
                          View Production (Client Domain)
                        </a>
                      )}
                      {project.vercelUrl && (
                        <a
                          href={project.vercelUrl}
                          target="_blank"
                          aria-label="View Demo"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 sm:px-4 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all transform hover:scale-105"
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
        <div className="mb-12 lg:flex lg:justify-center">
          <div className="mx-auto lg:mx-0 max-w-full overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="inline-flex min-w-max bg-white rounded-xl shadow-md p-1.5 gap-1">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`inline-flex shrink-0 items-center whitespace-nowrap px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
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
        </div>

        {/* Projects Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
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

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  {shouldShowReadMore(project.description) && (
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-sm font-semibold text-blue-600 hover:text-blue-700 mb-4"
                    >
                      Read full description
                    </button>
                  )}

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 sm:py-1 text-[11px] sm:text-xs bg-gray-100 text-gray-700 rounded-full"
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
                        aria-label="View Production (Client Domain)"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        <LuExternalLink size={18} className="mr-2" />
                        View Production (Client Domain)
                      </a>
                    )}
                    {project.vercelUrl && (
                      <a
                        href={project.vercelUrl}
                        target="_blank"
                        aria-label="View Demo (Vercel)"
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

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.96 }}
                transition={{ duration: 0.22 }}
                onClick={(event) => event.stopPropagation()}
                className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {selectedProject.title}
                      </h3>
                      {selectedProject.completionDate && (
                        <p className="text-sm text-gray-500 mt-1">
                          Completed: {selectedProject.completionDate}
                        </p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700"
                    >
                      Close
                    </button>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {selectedProject.clientUrl && (
                      <a
                        href={selectedProject.clientUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
                      >
                        <LuExternalLink size={16} className="mr-2" />
                        View Production (Client Domain)
                      </a>
                    )}
                    {selectedProject.vercelUrl && (
                      <a
                        href={selectedProject.vercelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium"
                      >
                        <LuExternalLink size={16} className="mr-2" />
                        View Demo (Vercel)
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-medium"
                      >
                        <LuGithub size={16} className="mr-2" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
