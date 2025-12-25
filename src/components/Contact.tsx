import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 via-transparent to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8 space-y-6">
              <h3 className="font-display text-2xl font-semibold">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">venkatesh@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-3 rounded-xl bg-secondary/50 hover:bg-secondary hover:text-primary transition-all"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-2xl p-8">
            <h3 className="font-display text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Subject</label>
                <Input 
                  placeholder="Project inquiry" 
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..." 
                  rows={5}
                  className="bg-secondary/50 border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-primary text-primary-foreground font-semibold shadow-button hover:shadow-glow transition-all duration-300"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
