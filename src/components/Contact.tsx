import { Mail, MapPin, Send, Github, Linkedin, Twitter, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const socialLinks = [
  { icon: Github, href: "https://github.com/gitpro4u", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aaditya-surti-51b780293", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_1d2lqco",
        "template_7o2t58v",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "rRdsscP7DIggrXzJy"
      );

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* CONTACT INFO */}
          <div className="glass rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <Mail className="text-primary" />
                <span>aadityasurati22@gmail.com</span>
              </div>
              <div className="flex gap-4 items-center">
                <MapPin className="text-primary" />
                <span>Vadodara, Gujarat, India</span>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="text-primary" />
                <span>+91-8511994868</span>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank">
                  <s.icon className="w-5 h-5 hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
              <Input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
              <Input name="subject" placeholder="Project inquiry" value={form.subject} onChange={handleChange} required />
              <Textarea name="message" placeholder="Tell me about your project..." rows={5} value={form.message} onChange={handleChange} required />

              {status === "success" && (
                <p className="text-green-500 text-center font-medium">
                  ✅ Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-500 text-center font-medium">
                  ❌ Failed to send message. Try again.
                </p>
              )}

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Sending..." : <>Send Message <Send className="ml-2 w-4 h-4" /></>}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
