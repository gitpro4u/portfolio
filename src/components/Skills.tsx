import { Code, Database, Server, Cloud, Layers, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS"],
    color: "primary",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Java", "Spring Boot", "Node.js", "REST APIs", "Microservices"],
    color: "green",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Firebase"],
    color: "purple",
  },
  {
    title: "DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins"],
    color: "cyan",
  },
  {
    title: "Tools",
    icon: Terminal,
    skills: ["Git", "VS Code", "IntelliJ", "Postman", "Jira"],
    color: "accent",
  },
  {
    title: "Architecture",
    icon: Layers,
    skills: ["System Design", "Design Patterns", "Clean Code", "Agile"],
    color: "primary",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-${category.color}/10`}>
                  <category.icon className={`w-6 h-6 text-${category.color}`} />
                </div>
                <h3 className="font-display text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-secondary/50 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
