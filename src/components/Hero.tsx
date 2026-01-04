// import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useEffect } from "react";

// const techStack = [
//   "React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Firebase", "Git", "GitHub"
// ];
// export const useCustomCursor = () => {
//   useEffect(() => {
//     const cursor = document.createElement("div");
//     const cursorDot = document.createElement("div");
    
//     cursor.className = "fixed w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-50";
//     cursorDot.className = "fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-50";
    
//     document.body.appendChild(cursor);
//     document.body.appendChild(cursorDot);
    
//     let mouseX = 0, mouseY = 0;
//     let cursorX = 0, cursorY = 0;
    
//     document.addEventListener("mousemove", (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//       cursorDot.style.left = mouseX - 4 + "px";
//       cursorDot.style.top = mouseY - 4 + "px";
//     });
    
//     const animateCursor = () => {
//       cursorX += (mouseX - cursorX) * 0.2;
//       cursorY += (mouseY - cursorY) * 0.2;
//       cursor.style.left = cursorX - 16 + "px";
//       cursor.style.top = cursorY - 16 + "px";
//       requestAnimationFrame(animateCursor);
//     };
    
//     animateCursor();
    
//     return () => {
//       cursor.remove();
//       cursorDot.remove();
//     };
//   }, []);
// };
// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen relative overflow-hidden flex items-center pt-28 md:pt-32">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
//       {/* Glow effect */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent  via-background/40 to-background"  />


//       <div className="container relative z-10 px-4 ">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="space-y-6 animate-fade-in">
//             {/* Available Badge */}
//             <div className="inline-flex items-center  gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
//               <Sparkles className="w-4 h-4 text-primary" />
//               <span className="text-sm font-medium text-primary">Available for hire</span>
//             </div>

//             {/* Name & Title */}
//             <div className="space-y-2">
//               <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight  leading-tight">
//                 Aaditya Surti
//               </h1>
//               <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">
//                 Frontend Engineer
//               </h2>
//             </div>

//             {/* Subtitle */}
//             <p className="text-xl md:text-xl text-muted-foreground">
//               React.js | JavaScript (ES6+) | TypeScript
//             </p>

//             {/* Description */}
//             <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
//               React-focused Frontend Developer with hands-on experience building responsive, component-based web applications using{" "}
//               <span className="text-primary font-medium">React.js</span>,{" "}
//               <span className="text-primary font-medium">JavaScript (ES6+)</span>, and{" "}
//               <span className="text-primary font-medium">TypeScript</span>. Strong understanding of React hooks, reusable UI components, and frontend best practices.
//             </p>

//             {/* Tech Stack */}
//             <div className="flex flex-wrap gap-3">
//               {techStack.map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-4 py-2 rounded-full bg-secondary/80 border border-border text-sm font-medium text-foreground/90 hover:bg-secondary hover:border-primary/50 transition-all cursor-default"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-2">
//               <Button
//                 size="lg"
//                 className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-6 text-base shadow-button hover:shadow-glow transition-all duration-300 hover:scale-105"
//               >
//                 Let's Work Together
//                 <ArrowRight className="ml-2 w-5 h-5" />
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border-border bg-transparent text-foreground font-semibold px-8 py-6 text-base hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300"
//               >
//                 View Projects
//                 <Code2 className="ml-2 w-5 h-5" />
//               </Button>
//             </div>
//           </div>

//           {/* Right Content - Profile Image Area */}
//           {/* Right Content - Profile Image Area */}
//             <div className="relative hidden lg:flex items-center justify-center animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              
//               {/* Profile Image Container */}
//               <div className="relative w-[400px] h-[500px] rounded-3xl overflow-hidden group shadow-2xl border border-white/10">
//                 {/* Bottom Gradient Overlay - Fades the bottom of the image into the background */}
//                 <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
                
//                 <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
//                   <img
//                     src="/aadi.jpeg"
//                     alt="Profile"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>

//               {/* --- Floating Badges (Exactly as per reference) --- */}

//               {/* 10+ Projects - Top Left (Slightly overlapping top and left) */}
//               <div className="absolute -top-4 -left-6 glass-strong rounded-2xl p-4 animate-float z-20 shadow-2xl border border-primary/20">
//                 <p className="text-3xl font-bold text-primary">10+</p>
//                 <p className="text-sm text-muted-foreground font-medium">Projects</p>
//               </div>

//               {/* Backend Badge - Top Right (Circular Icon with Label hanging below) */}
//               <div className="absolute top-10 -right-4 flex flex-col items-center animate-float-delayed z-20">
//                 <div className="bg-[#10b981] p-3 rounded-2xl shadow-lg border border-white/20">
//                   <Code2 className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="mt-[-8px] bg-white px-3 py-1 rounded-full shadow-md">
//                   <span className="text-[10px] font-bold text-black uppercase tracking-tighter">Backend</span>
//                 </div>
//               </div>

//               {/* Purple Zap - Middle Left */}
//               <div className="absolute top-[35%] -left-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 animate-float-slow z-20 shadow-lg shadow-purple-500/30">
//                 <Zap className="w-6 h-6 text-white" />
//               </div>

//               {/* Frontend Badge - Bottom Left (Icon with Label hanging above) */}
//               <div className="absolute bottom-16 -left-4 flex flex-col items-center animate-float-delayed z-20">
//                 <div className="mb-[-8px] bg-white px-3 py-1 rounded-full shadow-md z-30">
//                   <span className="text-[10px] font-bold text-black uppercase tracking-tighter">Frontend</span>
//                 </div>
//                 <div className="bg-[#0ea5e9] p-3 rounded-2xl shadow-lg border border-white/20">
//                   <Sparkles className="w-6 h-6 text-white" />
//                 </div>
//               </div>

//               {/* 1+ Experience - Bottom Right (Deeply overlapping the corner) */}
//               <div className="absolute -bottom-2 -right-6 glass-strong rounded-2xl p-5 animate-float z-20 shadow-2xl border border-primary/20 text-center">
//                 <p className="text-3xl font-bold text-primary">1+</p>
//                 <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Years Experience</p>
//               </div>
//             </div>
//           </div>
//         </div>
//     </section>
//   );
// };

// export default Hero;
import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const techStack = [
  "React.js",
  "JavaScript (ES6+)",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Firebase",
  "Git",
  "GitHub",
];

// 🎯 Custom Cursor Hook (unchanged)
export const useCustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    const cursorDot = document.createElement("div");

    cursor.className =
      "fixed w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-50";
    cursorDot.className =
      "fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-50";

    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    let mouseX = 0,
      mouseY = 0;
    let cursorX = 0,
      cursorY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = mouseX - 4 + "px";
      cursorDot.style.top = mouseY - 4 + "px";
    });

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      cursor.style.left = cursorX - 16 + "px";
      cursor.style.top = cursorY - 16 + "px";
      requestAnimationFrame(animateCursor);
    };

    animateCursor();

    return () => {
      cursor.remove();
      cursorDot.remove();
    };
  }, []);
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center pt-28 md:pt-32"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      {/* Hero → Skills blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 🖼️ IMAGE — NOW VISIBLE ON MOBILE */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 mt-10 lg:mt-0 animate-slide-in-right">
            <div
              className="
                relative
                w-[260px] h-[340px]
                sm:w-[300px] sm:h-[380px]
                lg:w-[400px] lg:h-[500px]
                rounded-3xl overflow-hidden
                group shadow-2xl border border-white/10
              "
            >
              {/* Bottom fade */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

              <img
                src="/aadi.jpeg"
                alt="Aaditya Surti"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badges (unchanged, safe on mobile) */}
            <div className="absolute -top-4 -left-6 glass-strong rounded-2xl p-4 animate-float z-20 shadow-2xl border border-primary/20">
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground font-medium">
                Projects
              </p>
            </div>

            <div className="absolute top-10 -right-4 flex flex-col items-center animate-float-delayed z-20">
              <div className="bg-[#10b981] p-3 rounded-2xl shadow-lg border border-white/20">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div className="mt-[-8px] bg-white px-3 py-1 rounded-full shadow-md">
                <span className="text-[10px] font-bold text-black uppercase tracking-tighter">
                  Backend
                </span>
              </div>
            </div>

            <div className="absolute top-[35%] -left-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 animate-float-slow z-20 shadow-lg shadow-purple-500/30">
              <Zap className="w-6 h-6 text-white" />
            </div>

            <div className="absolute bottom-16 -left-4 flex flex-col items-center animate-float-delayed z-20">
              <div className="mb-[-8px] bg-white px-3 py-1 rounded-full shadow-md z-30">
                <span className="text-[10px] font-bold text-black uppercase tracking-tighter">
                  Frontend
                </span>
              </div>
              <div className="bg-[#0ea5e9] p-3 rounded-2xl shadow-lg border border-white/20">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="absolute -bottom-2 -right-6 glass-strong rounded-2xl p-5 animate-float z-20 shadow-2xl border border-primary/20 text-center">
              <p className="text-3xl font-bold text-primary">1+</p>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Years Experience
              </p>
            </div>
          </div>

          {/* 📝 TEXT CONTENT */}
          <div className="space-y-6 animate-fade-in order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Available for hire
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Aaditya Surti
              </h1>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">
                Frontend Engineer
              </h2>
            </div>

            <p className="text-xl text-muted-foreground">
              React.js | JavaScript (ES6+) | TypeScript
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              React-focused Frontend Developer with hands-on experience building
              responsive, component-based web applications using{" "}
              <span className="text-primary font-medium">React.js</span>,{" "}
              <span className="text-primary font-medium">
                JavaScript (ES6+)
              </span>
              , and{" "}
              <span className="text-primary font-medium">TypeScript</span>.
            </p>

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

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-6 text-base shadow-button hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Let’s Work Together
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
