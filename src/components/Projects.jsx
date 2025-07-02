import { LuExternalLink, LuGithub } from "react-icons/lu";
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

const projects = [
  {
    title: "Preline Admin & Employee Dashboards",
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
      "NProgress",
      "vercel",
    ],
    liveUrl: "https://preline-dashboard-tailwind.vercel.app/",
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
    title: "Qyada Landing Page & Dashboard",
    description:
      "A modern Laravel-powered platform featuring a responsive landing page and a comprehensive dashboard for both admin and employees.",
    image: qyada, // Replace with the actual image import or path
    tags: [
      "Laravel",
      "HTML/SCSS",
      "Javascript",
      "Tailwind CSS	",
      "Preline UI",
      "GSAP",
      "SEO",
      "Performance",
      "Accessibility",
      "Best Practices",
    ],
    liveUrl: "https://qyada.io/en",
  },
  {
    title: "Beon Website",
    description:
      "A multi-page web platform with a responsive landing page, OTP verification page, and contact form. Built for seamless user interaction and modern aesthetics.",
    image: beon, // Replace with the actual image import
    tags: [
      "Laravel",
      "HTML/SCSS",
      "Javascript",
      "Tailwind CSS",
      "Daisy Ui",
      "Splide.js",
      "SEO",
      "Performance",
      "Accessibility",
      "Best Practices",
    ],
    liveUrl: "https://beon.chat/ar/",
    subPages: [
      { name: "OTP Verification", url: "https://beon.chat/ar/otp_v2" },
      { name: "Contact Us", url: "https://beon.chat/ar/contact_us" },
    ],
  },

  {
    title: "360 Business LMS",
    description:
      "A learning management system designed for modern enterprises, featuring responsive design, interactive sliders, and optimized performance. Built with Tailwind CSS, Flowbite components, and Splide.js.",
    image: lms360, // import your screenshot asset
    tags: [
      "Laravel",
      "HTML/SCSS",
      "Javascript",
      "Tailwind CSS	",
      "LMS",
      "Flowbite",
      "Splide.js",
      "SEO",
      "Performance",
      "Accessibility",
      "Best Practices",
    ],
    liveUrl: "https://lms.360business-partners.com/ar/home_v2",
  },
  {
    title: "The V Mall",
    description:
      "An e-commerce application built with modern frontend technologies, offering a smooth shopping experience with responsive design and interactive sliders.",
    image: thevmall, // make sure to import the image at the top of your file
    tags: [
      "Laravel",
      "HTML/SCSS",
      "Javascript",
      "Tailwind CSS	",
      "E-commerce",
      "Flowbite",
      "Swiper.js",
      "Splide.js",
      "Performance",
      "Accessibility",
      "Best Practices",
      "SEO",
    ],
    liveUrl: "https://thevmall.net/ar",
  },

  {
    title: "Nageeb App",
    description:
      "A Laravel-based application for content management with intuitive navigation and modern tech integration.",
    image: nageeb_img,
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

                <div className="flex flex-col gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    aria-label="Live Demo"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <LuExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>

                  {project.subPages?.length > 0 && (
                    <div className="flex flex-col gap-1">
                      {project.subPages.map((subPage, subIndex) => (
                        <a
                          key={subIndex}
                          href={subPage.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-500 hover:text-blue-600 ml-6 flex items-center"
                        >
                          <LuExternalLink size={16} className="mr-1" />
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
