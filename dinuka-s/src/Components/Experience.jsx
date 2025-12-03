import React from "react";

const experiences = [
  {
    role: "Undergraduate Student — BSc (Hons) Computer Science",
    company: "Informatics Institute of Technology (IIT) in collaboration with University of Westminster",
    period: "2023 — Present",
    description: [
      "At the Informatics Institute of Technology (IIT), in collaboration with the University of Westminster, I am currently pursuing my Computer Science degree, developing strong foundational knowledge in programming, software engineering, web development, and machine learning. Throughout my academic journey, I have worked on multiple coursework-based and independent projects where I applied concepts such as Java OOP, full-stack development, and data visualisation. My degree has also helped me improve problem-solving, teamwork, and project management skills through collaborative group assignments and Agile-based workflows."
    ]
  },
  {
    role: "Full-Stack Developer — Personal Projects",
    company: "Self-driven Development",
    period: "2023 — Present",
    description: [
      "I have built several self-driven full-stack applications using technologies such as Java, Python, Node.js, React, and SQL/NoSQL databases. One of my key projects is a complete Inventory Management System developed using Java for both frontend and backend. I have also experimented with building AI-assisted and mobile-friendly features, including a media upload module for the LiveCoach.AI platform. These projects have strengthened my understanding of backend logic, API development, UI design, deployment, and handling real-world development challenges independently."
    ]
  },
  {
    role: "Hackathon Participant",
    company: "Team-Based Tech Competitions",
    period: "2024 — Present",
    description: [
      "As a hackathon participant, I have collaborated with teammates to design and build functional prototypes under time constraints. These experiences pushed me to think creatively, work efficiently, and integrate features quickly while maintaining code quality. I contributed to backend development, UI wireframing, and AI-related components during these competitions. Participating in hackathons has strengthened my teamwork, leadership, adaptability, and rapid problem-solving abilities."
    ]
  },
  {
    role: "Photography & Media Volunteer",
    company: "Various Events & Organisations",
    period: "2022 — Present",
    description: [
      "Alongside my technical journey, I have volunteered as a photographer and media creator for various events and organisations. I have captured and edited visual content, supported event branding, and coordinated with teams to deliver media assets on time. This role enhanced my creativity, communication, and professional discipline, while also helping me develop strong visual storytelling skills."
    ]
  }
];
const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 lg:px-20 text-stone-300">
      <h2 className="text-4xl font-semibold text-center mb-16">Experience</h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            
          >
            <h3 className="text-1xl ">{exp.role}</h3>
            <p className="text-stone-400 text-sm mt-1">{exp.company}</p>
            <p className="text-primary text-sm mb-4">{exp.period}</p>

            <ul className="list-disc ml-6 space-y-1 bg-linear-to-r from-stone-300 to-stone-600 bg-clip-text  tracking-tighter text-transparent">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience