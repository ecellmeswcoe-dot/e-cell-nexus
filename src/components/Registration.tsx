import { useEffect, useRef, useState } from "react";

const Registration = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
          <span className="font-mono text-sm text-primary uppercase tracking-[0.3em]">Event Status</span>
          <h2 className="font-mono text-3xl md:text-5xl font-bold mt-4">
            Event <span className="text-gradient">Completed</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Project Exhibition — Design Thinking & Idea Lab
          </p>
        </div>

        {/* Thank You Message */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="glass-card p-8 rounded-2xl border border-primary/30 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="font-mono text-2xl md:text-3xl font-bold text-secondary mb-4">
              Thanks For Participating!
            </h3>
            <p className="text-muted-foreground mb-6">
              We hope you had an amazing experience at our event. Stay connected for more exciting opportunities!
            </p>
            
            {/* WhatsApp Community Link */}
            <a 
              href="https://chat.whatsapp.com/B9khcm1zUf6DcK8C2GKFur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#25D366]/30"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Join Our WhatsApp Community
            </a>
          </div>
        </div>

        {/* Event Summary */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex flex-wrap justify-center gap-3">
            <p className="glass-card inline-block px-4 py-2 rounded-xl text-sm text-muted-foreground border border-primary/20">
              <span className="text-primary font-mono">📍</span>{" "}
              <span className="text-secondary font-semibold">Venue:</span> MESWCOE 2nd Floor
            </p>
            <p className="glass-card inline-block px-4 py-2 rounded-xl text-sm text-muted-foreground border border-primary/20">
              <span className="text-primary font-mono">📅</span>{" "}
              <span className="text-secondary font-semibold">Date:</span> December 29, 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
