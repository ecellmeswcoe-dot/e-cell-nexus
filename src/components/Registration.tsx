import { useEffect, useRef, useState } from "react";
import CountdownTimer from "./CountdownTimer";

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
          <span className="font-mono text-sm text-primary uppercase tracking-[0.3em]">Event Countdown</span>
          <h2 className="font-mono text-3xl md:text-5xl font-bold mt-4">
            Time Until <span className="text-gradient">The Event</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Project Exhibition — Design Thinking & Idea Lab
          </p>
        </div>

        {/* Countdown Timer */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <CountdownTimer />
        </div>

        {/* Event Details */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <p className="glass-card inline-block px-4 py-2 rounded-xl text-sm text-muted-foreground border border-primary/20">
              <span className="text-primary font-mono">📍</span>{" "}
              <span className="text-secondary font-semibold">Venue:</span> MESWCOE 2nd Floor
            </p>
            <p className="glass-card inline-block px-4 py-2 rounded-xl text-sm text-muted-foreground border border-primary/20">
              <span className="text-primary font-mono">🕐</span>{" "}
              <span className="text-secondary font-semibold">Reporting:</span> 1:30 PM onwards
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <p className="glass-card inline-block px-4 py-2 rounded-xl text-sm text-muted-foreground border border-destructive/30">
              <span className="text-destructive font-mono">⚠️</span>{" "}
              <span className="text-destructive font-semibold">College ID is Compulsory</span>
            </p>
          </div>
          <div className="text-center">
            <p className="glass-card inline-block px-4 py-2 rounded-xl text-sm text-muted-foreground border border-primary/20">
              <span className="text-primary font-mono">{">"}</span> Each team will receive a unique{" "}
              <span className="text-secondary font-semibold">Team ID</span> after submission. If not received, contact{" "}
              <a href="tel:7666963938" className="text-primary font-semibold hover:underline">7666963938</a> to get your ID.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
