import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React frontend and Spring Boot microservices backend. Features include user authentication, product catalog, shopping cart, and payment integration.",
    tech: ["React", "Spring Boot", "MySQL", "AWS"],
    image: "bg-gradient-to-br from-primary/20 to-purple/20",
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates, kanban boards, and team collaboration features built with modern technologies.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "bg-gradient-to-br from-green/20 to-primary/20",
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization dashboard with interactive charts, real-time metrics, and customizable widgets for business intelligence.",
    tech: ["React", "TypeScript", "D3.js", "PostgreSQL"],
    image: "bg-gradient-to-br from-purple/20 to-accent/20",
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
                <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
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
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary text-primary-foreground">
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
