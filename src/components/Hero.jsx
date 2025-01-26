import { FaWhatsapp } from "react-icons/fa";
import {
  LuArrowDown,
  LuGithub,
  LuLinkedin,
  LuMail,
  LuMapPin,
  LuPhone,
} from "react-icons/lu";
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-6 py-16 pt-24 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">
            Hi, I'm <span className="text-blue-400">Mahmoud Wahba</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl animate-slide-up">
            A Front-End Developer passionate about creating interactive and
            responsive web experiences. Let’s build something amazing together!
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-gray-300 animate-fade-in">
            <span className="flex items-center gap-2">
              <LuMapPin size={20} />
              Al Hay Al Asher, Nasr City, Cairo
            </span>
            <div className="flex items-center gap-2">
              <LuPhone size={20} />
              <a href="tel:+201207075722">0120-707-5722</a>
            </div>
          </div>

          <div className="flex gap-4 animate-fade-in-delay">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold transition-all transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-white hover:bg-white hover:text-gray-900 rounded-full font-semibold transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 mt-8 animate-fade-in-delay-2">
            <a
              href="https://github.com/mahmoud-wahba-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <LuGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/mahmoud--wahba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <LuLinkedin size={24} />
            </a>
            <a
              href="mailto:mahmoud.wahba.dev@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <LuMail size={24} />
            </a>
            <a
              href="https://wa.me/201207075722" // WhatsApp URL format
              className="text-gray-300 hover:text-white transition-colors"
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security best practice
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        <a href="#about" className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <LuArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
