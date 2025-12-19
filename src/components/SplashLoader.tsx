import { useEffect, useState } from "react";
import ecellLogo from "@/assets/ecell-logo.png";

interface SplashLoaderProps {
  onComplete: () => void;
}

const SplashLoader = ({ onComplete }: SplashLoaderProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2500),
      setTimeout(() => setPhase(4), 4000),
      setTimeout(() => onComplete(), 5000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 animated-grid opacity-30" />
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line opacity-50" />
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary opacity-50" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary opacity-50" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary opacity-50" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary opacity-50" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo */}
        <div 
          className={`transition-all duration-1000 ease-out ${
            phase >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <img 
            src={ecellLogo} 
            alt="E-Cell MESWCOE Logo" 
            className="w-32 h-32 md:w-40 md:h-40 object-contain animate-float"
          />
        </div>

        {/* Text Animation */}
        <div className="flex flex-col items-center gap-4">
          <h1 
            className={`font-mono text-xl md:text-2xl text-muted-foreground transition-all duration-700 ${
              phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            E-Cell MESWCOE Presents...
          </h1>

          <h2 
            className={`font-mono text-2xl md:text-4xl font-bold text-center glow-text transition-all duration-700 ${
              phase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-gradient">Project Exhibition</span>
          </h2>

          <p 
            className={`font-mono text-lg md:text-xl text-secondary transition-all duration-700 ${
              phase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Design Thinking & Idea Lab
          </p>
        </div>

        {/* Loading Bar */}
        <div className={`w-64 h-1 bg-muted rounded-full overflow-hidden transition-opacity duration-500 ${
          phase >= 1 ? "opacity-100" : "opacity-0"
        }`}>
          <div 
            className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full transition-all duration-[4000ms] ease-linear"
            style={{ width: phase >= 1 ? "100%" : "0%" }}
          />
        </div>

        {/* Loading Text */}
        <p 
          className={`font-mono text-sm text-muted-foreground animate-glow-pulse transition-opacity duration-500 ${
            phase >= 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          {phase < 4 ? "[ INITIALIZING... ]" : "[ READY ]"}
        </p>
      </div>

      {/* Fade Out Overlay */}
      <div 
        className={`absolute inset-0 bg-background transition-opacity duration-500 pointer-events-none ${
          phase >= 4 ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default SplashLoader;
