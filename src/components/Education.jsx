import iti from "../assets/companies/iti_logo.svg";
import { LuBookOpen, LuCalendar, LuGraduationCap } from "react-icons/lu";
const education = [
  {
    institution: "Information Technology Institute (ITI)",
    degree: "Full Stack Web Development Using MEARN",
    period: "Nov 2021 - Mar 2022",
    description:
      "Intensive training program covering modern web development technologies and practices.",
    location: "Cairo, Egypt",
    logo: iti,
  },
  {
    institution: "High Institute for Engineering and Technology Al-Obour",
    degree: "Bachelor of Engineering in Civil Engineering",
    period: "Sep 2013 - Sep 2018",
    description:
      "Comprehensive engineering education with focus on structural engineering and project management.",
    location: "Cairo, Egypt",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Education</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  {edu.logo ? (
                    <img
                      className="w-16 object-cover"
                      src={edu.logo}
                      alt={edu.institution}
                    />
                  ) : (
                    // <GraduationCap size={24} className="text-blue-600" />
                    <LuGraduationCap size={24} className="text-blue-600" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{edu.institution}</h3>
                      <p className="text-blue-600">{edu.degree}</p>
                      <p className="text-gray-500 flex items-center mt-1">
                        <LuBookOpen size={16} className="mr-2" />
                        {edu.location}
                      </p>
                    </div>
                    <span className="inline-flex items-center text-gray-600 text-sm">
                      <LuCalendar size={16} className="mr-2" />
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-gray-600 mt-2">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
