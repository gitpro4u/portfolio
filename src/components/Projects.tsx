import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Voice Intaker (Voice-Agent)",
    description: "Developed a React-based frontend for a voice-enabled AI healthcare assistant. Built reusable functional components using React Hooks and TypeScript. Designed intuitive UI flows for patient data collection and appointment scheduling. Integrated Firebase for authentication and real-time data handling.",
    tech: ["React", "TypeScript", "Firebase", "React Hooks"],
    image: "bg-gradient-to-br from-primary/20 to-purple/20",
    github: "https://github.com/gitpro4u/Voice-Agent",
    date: "Jun 2025",
  },
  {
    title: "Event Management System",
    description: "Created a responsive frontend interface using HTML, CSS, and JavaScript. Implemented dynamic UI interactions, event listings, and form validation. Focused on clean layouts, accessibility, and user experience.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "bg-gradient-to-br from-green/20 to-primary/20",
    github: null,
    date: null,
  },
  {
    title: "CarbonBuddy",
    description: "Built a React.js dashboard to track daily CO₂ emissions and monthly goals. Implemented interactive UI components for data visualization and user engagement. Followed component-based architecture for maintainable and scalable code.",
    tech: ["React.js", "JavaScript", "Component Architecture"],
    image: "bg-gradient-to-br from-purple/20 to-accent/20",
    github: "https://github.com/gitpro4u/Carbon-Buddy",
    date: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <div className="w-20 h-20 rounded-2xl glass-strong flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-display font-bold text-primary">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.date && (
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{project.date}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
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

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  {project.github ? (
                    <Button 
                      className="flex-1 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                      onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  ) : (
                    <Button className="flex-1 border border-input bg-background hover:bg-accent hover:text-accent-foreground" disabled>
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  <Button className="flex-1 bg-gradient-primary text-primary-foreground" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
