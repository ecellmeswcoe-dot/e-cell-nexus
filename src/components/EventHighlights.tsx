import { useEffect, useRef, useState } from "react";
import { Trophy, Users, Award, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: Trophy,
    title: "Prize Pool",
    value: "₹20,000+",
    description: "& Exciting Gifts",
    color: "primary",
  },
  {
    icon: Users,
    title: "Team Size",
    value: "2-4",
    description: "Members per Team",
    color: "secondary",
  },
  {
    icon: Award,
    title: "Certificates",
    value: "100%",
    description: "& Recognition",
    color: "primary",
  },
  {
    icon: Briefcase,
    title: "Industry",
    value: "Exposure",
    description: "& Networking",
    color: "secondary",
  },
];

const EventHighlights = () => {
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
      id="highlights" 
      className="relative py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="font-mono text-sm text-secondary uppercase tracking-[0.3em]">What's In Store</span>
          <h2 className="font-mono text-3xl md:text-5xl font-bold mt-4">
            Event <span className="text-gradient">Highlights</span>
          </h2>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            const isPrimary = item.color === "primary";

            return (
              <div
                key={item.title}
                className={`group relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg ${
                  isPrimary ? "bg-primary/50" : "bg-secondary/50"
                }`} />

                {/* Card */}
                <div className="relative glass-card p-6 rounded-2xl border border-border/50 group-hover:border-primary/50 transition-colors h-full">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    isPrimary 
                      ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground" 
                      : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground"
                  } transition-all duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="font-mono text-sm text-muted-foreground uppercase tracking-wider mb-2">
                    {item.title}
                  </h3>
                  <p className={`font-mono text-3xl font-bold mb-1 ${
                    isPrimary ? "text-primary" : "text-secondary"
                  }`}>
                    {item.value}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>

                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-16 h-16 rounded-bl-3xl ${
                    isPrimary ? "bg-primary/5" : "bg-secondary/5"
                  }`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
