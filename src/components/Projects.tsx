// import { ExternalLink, Github } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import TiltCard from "@/components/ui/TiltCard";

// const projects = [
//   {
//     title: "AI Voice Intaker (Voice-Agent)",
//     description:
//       "Developed a React-based frontend for a voice-enabled AI healthcare assistant. Built reusable functional components using React Hooks and TypeScript. Designed intuitive UI flows for patient data collection and appointment scheduling. Integrated Firebase for authentication and real-time data handling.",
//     tech: ["React", "TypeScript", "Firebase", "React Hooks"],
//     image: "bg-gradient-to-br from-primary/20 to-purple/20",
//     github: "https://github.com/gitpro4u/Voice-Agent",
//     demo :"https://clinic-voice-agent.vercel.app/",
//     date: "Jun 2025",
//   },
//   {
//     title: "Event Management System",
//     description:
//       "Created a responsive frontend interface using HTML, CSS, and JavaScript. Implemented dynamic UI interactions, event listings, and form validation. Focused on clean layouts, accessibility, and user experience.",
//     tech: ["HTML5", "CSS3", "JavaScript"],
//     image: "bg-gradient-to-br from-green/20 to-primary/20",
//     github: null,
//     date: null,
//   },
//   {
//     title: "Requelizer",
//     description:
//      "Requelize is a full-stack e-commerce application that enables users to browse products, place orders, and submit inquiries through a seamless web interface,It includes a secure admin backend to manage products, orders, and customer queries efficiently using scalable REST APIs.",
//     tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
//     image: "bg-gradient-to-br from-pink-400/15 to-rose-600/20",
//     github: "https://github.com/gitpro4u/requelizer",
//     demo : "https://requelizer.vercel.app/",
//     date: null,
//   },
//   {
//     title: "Weether App",
//     description:
//      "Developed a responsive Weather Application using HTML, CSS, and JavaScript that fetches real-time weather data via API integration and displays dynamic, weather-based UI backgrounds. Implemented user-friendly search, error handling, loading states, and a visually polished interface for an enhanced user experience.",
//     tech: ["HTML", "CSS", "Javascript"],
//     image: "bg-gradient-to-br from-pink-400/15 to-rose-600/20",
//     github: "https://github.com/gitpro4u/Weather-App",
//     demo : "https://weatherapp-virid-alpha.vercel.app/",
//     date: null,
//   },
//   {
//     title: "CarbonBuddy",
//     description:
//       "Built a React.js dashboard to track daily CO₂ emissions and monthly goals. Implemented interactive UI components for data visualization and user engagement. Followed component-based architecture for maintainable and scalable code.",
//     tech: ["React.js", "JavaScript", "Component Architecture"],
//     image: "bg-gradient-to-br from-purple/20 to-accent/20",
//     github: "https://github.com/gitpro4u/Carbon-Buddy",
//     date: null,
//   },
//   {
//     title: "Student-Excel",
//     description:
//      "Developed a responsive, role-based web application with Admin & Student dashboards, supporting CRUD operations and CSV import/export using modern UI components.",
//     tech: ["HTML"," CSS", "JavaScript", "Tailwind CSS"],
//     image: "bg-gradient-to-br from-yellow-400/15 to-amber-600/20",
//     github: "https://github.com/gitpro4u/student-excel",
//     demo : "https://studcel.vercel.app/",
//     date: null,
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="py-24 relative">
//       <div className="container relative z-10 px-4">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             A selection of projects that showcase my skills and experience
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <TiltCard key={project.title}>
//               <div className="glass rounded-2xl overflow-hidden group border border-transparent hover:border-primary/50 transition-all duration-300">
                
//                 {/* Project Image */}
//                 <div
//                   className={`h-48 ${project.image} flex items-center justify-center transform-gpu`}
//                 >
//                   <div className="w-20 h-20 rounded-2xl glass-strong flex items-center justify-center 
//                     group-hover:scale-110 transition-transform duration-300">
//                     <span className="text-3xl font-display font-bold text-primary">
//                       {project.title.charAt(0)}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Project Content */}
//                 <div className="p-6 space-y-4">
//                   <div className="flex items-start justify-between gap-2">
//                     <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
//                       {project.title}
//                     </h3>
//                     {project.date && (
//                       <span className="text-xs text-muted-foreground whitespace-nowrap">
//                         {project.date}
//                       </span>
//                     )}
//                   </div>

//                   <p className="text-sm text-muted-foreground leading-relaxed">
//                     {project.description}
//                   </p>

//                   {/* Tech Stack */}
//                   <div className="flex flex-wrap gap-2">
//                     {project.tech.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-2 py-1 rounded-md bg-secondary/80 text-xs text-muted-foreground"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Actions */}
//                   <div className="flex gap-3 pt-2">
//                     <Button
//                         className="flex-1 border border-input bg-background text-foreground"
//                         disabled={!project.github}
//                         onClick={() =>
//                           project.github &&
//                           window.open(project.github, "_blank", "noopener,noreferrer")
//                         }
//                       >
//                         <Github className="w-4 h-4 mr-2" />
//                         Code
//                     </Button>


//                     <Button
//                         className="flex-1 bg-gradient-primary text-primary-foreground"
//                         disabled={!project.demo}
//                         onClick={() =>
//                           project.demo &&
//                           window.open(project.demo, "_blank", "noopener,noreferrer")
//                         }
//                       >
//                         <ExternalLink className="w-4 h-4 mr-2" />
//                         Demo
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </TiltCard>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import TiltCard from "@/components/ui/TiltCard";
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "AI Voice Intaker (Voice-Agent)",
    description:
      "Developed a React-based frontend for a voice-enabled AI healthcare assistant. Built reusable functional components using React Hooks and TypeScript. Designed intuitive UI flows for patient data collection and appointment scheduling. Integrated Firebase for authentication and real-time data handling.",
    tech: ["React", "TypeScript", "Firebase", "React Hooks"],
    image: "bg-gradient-to-br from-primary/20 to-purple/20",
    github: "https://github.com/gitpro4u/Voice-Agent",
    demo: "https://clinic-voice-agent.vercel.app/",
    date: "Jun 2025",
  },
  {
    title: "Event Management System",
    description:
      "Created a responsive frontend interface using HTML, CSS, and JavaScript. Implemented dynamic UI interactions, event listings, and form validation. Focused on clean layouts, accessibility, and user experience.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "bg-gradient-to-br from-green/20 to-primary/20",
    github: null,
    date: null,
  },
  {
    title: "Requelizer",
    description:
      "Requelize is a full-stack e-commerce application that enables users to browse products, place orders, and submit inquiries through a seamless web interface. Includes a secure admin backend to manage products, orders, and customer queries efficiently using scalable REST APIs.",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    image: "bg-gradient-to-br from-pink-400/15 to-rose-600/20",
    github: "https://github.com/gitpro4u/requelizer",
    demo: "https://requelizer.vercel.app/",
    date: null,
  },
  {
    title: "Weather App",
    description:
      "Developed a responsive Weather Application using HTML, CSS, and JavaScript that fetches real-time weather data via API integration and displays dynamic, weather-based UI backgrounds.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "bg-gradient-to-br from-pink-400/15 to-rose-600/20",
    github: "https://github.com/gitpro4u/Weather-App",
    demo: "https://weatherapp-virid-alpha.vercel.app/",
    date: null,
  },
  {
    title: "CarbonBuddy",
    description:
      "Built a React.js dashboard to track daily CO₂ emissions and monthly goals. Implemented interactive UI components for data visualization and user engagement.",
    tech: ["React.js", "JavaScript"],
    image: "bg-gradient-to-br from-purple/20 to-accent/20",
    github: "https://github.com/gitpro4u/Carbon-Buddy",
    date: null,
  },
  {
    title: "Student-Excel",
    description:
      "Developed a responsive, role-based web application with Admin & Student dashboards, supporting CRUD operations and CSV import/export.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    image: "bg-gradient-to-br from-yellow-400/15 to-amber-600/20",
    github: "https://github.com/gitpro4u/student-excel",
    demo: "https://studcel.vercel.app/",
    date: null,
  },
];

const Projects = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`reveal-base ${
                index % 2 === 0 ? "reveal-left" : "reveal-right"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <TiltCard>
                <div className="glass rounded-2xl overflow-hidden group border border-transparent hover:border-primary/50 transition-all duration-300">
                  {/* Image */}
                  <div className={`h-48 ${project.image} flex items-center justify-center`}>
                    <div className="w-20 h-20 rounded-2xl glass-strong flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl font-display font-bold text-primary">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.date && (
                        <span className="text-xs text-muted-foreground">
                          {project.date}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md bg-secondary/80 text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button
                        className="flex-1 border border-input bg-background"
                        disabled={!project.github}
                        onClick={() =>
                          project.github &&
                          window.open(project.github, "_blank", "noopener,noreferrer")
                        }
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>

                      <Button
                        className="flex-1 bg-gradient-primary text-primary-foreground"
                        disabled={!project.demo}
                        onClick={() =>
                          project.demo &&
                          window.open(project.demo, "_blank", "noopener,noreferrer")
                        }
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 INLINE STYLES (NO EXTRA FILE) */}
      <style>{`
        .reveal-base {
          opacity: 0;
          transform: translateY(20px) scale(0.96);
        }
        .reveal-left {
          transform: translateX(-80px) scale(0.96);
        }
        .reveal-right {
          transform: translateX(80px) scale(0.96);
        }
        .reveal-active {
          opacity: 1;
          transform: translateX(0) translateY(0) scale(1);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}</style>
    </section>
  );
};

export default Projects;
