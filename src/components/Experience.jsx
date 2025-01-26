import { LuCalendar } from "react-icons/lu";
import lavaloon from "../assets/companies/lavaloon_logo.png";
import prospera from "../assets/companies/prospera-systems.svg";
import unlimitedSoftware from "../assets/companies/unlimited-software.png";

const experiences = [
  {
    company: "Unlimited Software",
    position: "Front-End Developer",
    logo: unlimitedSoftware,
    period: "Jul 2024 - Present",
    description:
      "Leading front-end development initiatives and implementing modern web solutions.",
    responsibilities: [
      "Translation of UI/UX design wireframes to actual code",
      "Working with UI/UX designers to bridge design and implementation",
      "Ensuring responsiveness of applications",
      "Maintaining and developing frontend features",
    ],
  },
  {
    company: "Prospera Systems",
    position: "Front-End Developer",
    logo: prospera,
    period: "Sep 2023 - Jul 2024",
    description:
      "Developed and maintained responsive web applications using modern frameworks.",
    responsibilities: [
      "Implementing responsive designs",
      "Collaborating with team members",
      "Optimizing application performance",
      "Code maintenance and refactoring",
    ],
  },
  {
    company: "LavaLoon",
    position: "Front-End Developer",
    logo: lavaloon,
    period: "Apr 2022 - Sep 2023",
    description:
      "Created user interfaces and implemented front-end functionality for various projects.",
    responsibilities: [
      "Translating UI/UX designs to code",
      "Ensuring application responsiveness",
      "Maintaining frontend features",
      "Applying newest development techniques",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-8 w-[2px] h-full bg-gray-200"></div>
              )}

              <div className="absolute left-0 top-2 w-6 h-6 bg-blue-500 rounded-full"></div>

              <div className="bg-gray-50 rounded-lg p-6 ml-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="">
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                    <p className="text-blue-600 font-medium">{exp.position}</p>
                  </div>

                  <span className="inline-flex items-center text-gray-600">
                    <LuCalendar size={16} className="mr-2" />
                    {exp.period}
                  </span>
                </div>

                <div className="flex justify-between">
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <div className="w-1/4 h-14">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
