import { useEffect, useRef, useState } from "react";

const Registration = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Load Formester script
    const existingScript = document.querySelector('script[src="https://plfsikga.formester.com/widget/standard.js"]');
    
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://plfsikga.formester.com/widget/standard.js";
      script.type = "module";
      document.body.appendChild(script);
    }

    // Create the form element
    if (formContainerRef.current && !formContainerRef.current.querySelector('formester-standard-form')) {
      const form = document.createElement("formester-standard-form");
      form.setAttribute("set-auto-height", "true");
      form.setAttribute("height", "100%");
      form.setAttribute("width", "100%");
      form.setAttribute("id", "HJOfKNF5g");
      form.setAttribute("url", "https://plfsikga.formester.com/f/HJOfKNF5g");
      formContainerRef.current.appendChild(form);
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="register" 
      className="relative py-24 px-4"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="font-mono text-sm text-primary uppercase tracking-[0.3em]">Join The Event</span>
          <h2 className="font-mono text-3xl md:text-5xl font-bold mt-4">
            Register Your <span className="text-gradient">Team</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Fill out the form below to secure your team's spot in the Project Exhibition.
          </p>
        </div>

        {/* Form Container */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Neon Border Glow */}
          <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-60 blur-md animate-pulse" />
          
          {/* Glass Container */}
          <div className="relative glass-card rounded-2xl overflow-hidden border border-primary/30">
            {/* Header Bar */}
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 px-6 py-4 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-secondary/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-sm text-muted-foreground">registration_form.exe</span>
              </div>
            </div>

            {/* Form Area */}
            <div 
              ref={formContainerRef}
              className="min-h-[600px] bg-background/50"
              style={{ 
                minHeight: '600px',
              }}
            />
          </div>

          {/* Note */}
          <div className="mt-6 text-center">
            <p className="glass-card inline-block px-6 py-3 rounded-xl text-sm text-muted-foreground border border-primary/20">
              <span className="text-primary font-mono">{">"}</span> Each team will receive a unique{" "}
              <span className="text-secondary font-semibold">Team ID</span> after submission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
