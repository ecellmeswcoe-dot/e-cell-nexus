import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="font-mono text-sm text-primary uppercase tracking-[0.3em]">Who We Are</span>
          <h2 className="font-mono text-3xl md:text-5xl font-bold mt-4">
            About <span className="text-gradient">E-Cell</span>
          </h2>
        </div>

        {/* Content Card */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Neon Border Effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-50 blur-sm" />
          
          <div className="relative glass-card p-8 md:p-12 rounded-2xl">
            {/* Decorative Corner Elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/50" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/50" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50" />

            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              <span className="text-primary font-semibold">Entrepreneurship Cell, MES Wadia College of Engineering (MESWCOE), Pune,</span> is committed to empowering students with the knowledge, skills, and mindset required to become next-generation innovators and entrepreneurs.
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary my-8 mx-auto rounded-full" />
            
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              Through workshops, competitions, networking events, and startup-oriented programs, E-Cell provides a platform where{" "}
              <span className="text-secondary font-semibold">ideas are nurtured into execution</span> and{" "}
              <span className="text-secondary font-semibold">imagination transforms into innovation</span>.
            </p>

            {/* Quote */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="font-mono text-center text-primary text-lg italic">
                "Innovate Today, Elevate Tomorrow"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
