import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const techStack = [
  "Java", "Spring Boot", "React", "JavaScript", "MYSQL", "MongoDB", "AWS", "Docker"
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 py-20 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Available Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Available for hire</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Aaditya Surti
              </h1>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">
                Full Stack Developer
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground">
              Java & Spring Boot | React
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Crafting robust backend solutions with{" "}
              <span className="text-primary font-medium">Java & Spring Boot</span> and
              creating dynamic frontend experiences with{" "}
              <span className="text-primary font-medium">React</span>. Building full-stack
              applications that scale.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-secondary/80 border border-border text-sm font-medium text-foreground/90 hover:bg-secondary hover:border-primary/50 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-6 text-base shadow-button hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Let's Work Together
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border bg-transparent text-foreground font-semibold px-8 py-6 text-base hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300"
              >
                View Projects
                <Code2 className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image Area */}
          <div className="relative hidden lg:flex items-center justify-center animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            {/* Profile Image Container */}
            <div className="relative w-[400px] h-[500px]">
              {/* Gradient background behind image */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
              
              {/* Profile placeholder with gradient */}
              <div className="w-full h-full rounded-3xl bg-gradient-to-br from-secondary to-muted overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-primary opacity-20" />
                </div>
              </div>

              {/* Floating Cards */}
              {/* Projects Card */}
              <div className="absolute -top-4 -left-8 glass-strong rounded-xl p-4 animate-float">
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>

              {/* Backend Card */}
              <div className="absolute top-8 -right-8 glass-strong rounded-xl p-3 animate-float-delayed">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-green" />
                  <span className="text-sm font-medium text-green">Backend</span>
                </div>
              </div>

              {/* Zap Icon */}
              <div className="absolute top-1/3 -left-4 bg-purple rounded-xl p-3 animate-float-slow shadow-lg">
                <Zap className="w-5 h-5 text-foreground" />
              </div>

              {/* Frontend Card */}
              <div className="absolute bottom-20 -left-4 glass-strong rounded-xl p-3 animate-float-delayed">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium text-primary">Frontend</span>
                </div>
              </div>

              {/* Experience Card */}
              <div className="absolute bottom-4 -right-8 glass-strong rounded-xl p-4 animate-float">
                <p className="text-2xl font-bold text-primary">1+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
