import { Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 lg:px-24 bg-foreground">
      <div className="max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-display font-extrabold leading-[1.05] text-background mb-4">Get in touch!
          <span className="text-background/60"></span>
        </h2>
        <p className="text-base font-body leading-relaxed mb-10 text-secondary">I'm always open to new conversations and connections.

        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:vickliu@mba2026.hbs.edu"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-background font-display font-bold text-sm transition-all duration-200 text-primary border-2 border-transparent hover:border-primary">

            <Mail className="w-4 h-4" />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/vicky-liu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-background font-display font-bold text-sm transition-all duration-200 text-primary border-2 border-transparent hover:border-primary">

            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="font-display font-bold text-lg text-background/60">
          VYL
        </p>
        <p className="text-xs text-background/50 font-body tracking-wide">
          © {new Date().getFullYear()} Vicky Liu. All rights reserved.
        </p>
      </div>
    </section>);

};

export default Contact;