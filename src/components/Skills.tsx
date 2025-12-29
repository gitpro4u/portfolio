import { Code, Database, Server, Cloud, Layers, Terminal } from "lucide-react";
import { useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "TypeScript"],
    color: "primary",
  },
  {
    title: "React Concepts",
    icon: Server,
    skills: ["Functional Components", "Hooks", "Props", "State Management", "Reusable Components"],
    color: "green",
  },
  {
    title: "UI / UX",
    icon: Database,
    skills: ["Wireframing", "Prototyping", "Typography", "Color Theory", "Responsive Design"],
    color: "purple",
  },
  {
    title: "Tools",
    icon: Terminal,
    skills: ["Git", "GitHub", "Firebase", "Figma"],
    color: "accent",
  },
  {
    title: "Other",
    icon: Layers,
    skills: ["Python (Basics)", "Problem Solving", "Clean Code", "Collaboration"],
    color: "primary",
  },
];

// Starfield component for animated background
const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create stars
    const stars: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = [];
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Update position
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${star.opacity})`;
        ctx.fill();

        // Add glow effect
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${star.opacity * 0.2})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};


const Marquee = () => {
  // Flatten all skills into a single array
  const allSkills = skillCategories.flatMap((cat) => cat.skills);
  // Duplicate for seamless loop
  const skillsList = [...allSkills, ...allSkills];
  return (
    <div className="relative w-full overflow-x-hidden py-4 mb-10">
      <div
        className="flex gap-6 animate-marquee whitespace-nowrap"
        style={{ animation: 'marquee 18s linear infinite' }}
      >
        {skillsList.map((skill, idx) => (
          <span
            key={idx}
            className="px-5 py-2 rounded-lg bg-secondary/70 text-base text-muted-foreground border border-secondary/30 shadow-sm mx-1"
          >
            {skill}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Starfield Background */}
      <Starfield />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Marquee Skill Category Boxes */}
        <div className="relative w-full overflow-x-hidden py-4 mb-10">
          <div
            className="flex gap-8 animate-marquee-boxes whitespace-nowrap"
            style={{ animation: 'marquee-boxes 14s linear infinite' }}
          >
            {[...skillCategories, ...skillCategories].map((category, index) => (
              <div
                key={category.title + index}
                className="glass rounded-2xl p-6 min-w-[320px] max-w-xs hover:border-primary/50 transition-all duration-300 group mx-2 shadow-lg"
                style={{ animationDelay: `${(index % skillCategories.length) * 0.1}s` }}
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
          <style>{`
            @keyframes marquee-boxes {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Skills;
