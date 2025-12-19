import ecellLogo from "@/assets/ecell-logo.png";

const Hero = () => {
  const scrollToRegister = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-5xl mx-auto text-center">
        {/* Logo */}
        <div className="animate-float">
          <img 
            src={ecellLogo} 
            alt="E-Cell MESWCOE" 
            className="w-24 h-24 md:w-32 md:h-32 object-contain"
          />
        </div>

        {/* Event Badge */}
        <div className="glass-card px-6 py-2 border border-primary/30 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <span className="font-mono text-sm text-primary uppercase tracking-wider">
            E-Cell MESWCOE Presents
          </span>
        </div>

        {/* Main Title */}
        <h1 className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <span className="block font-mono text-4xl md:text-6xl lg:text-7xl font-bold text-gradient glow-text leading-tight">
            Project Exhibition
          </span>
          <span className="block font-mono text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Design Thinking & Idea Lab
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <span className="text-secondary font-semibold">Don't Miss Out!</span> Unleash Your Innovation.
        </p>

        {/* CTA Button */}
        <button 
          onClick={scrollToRegister}
          className="group relative mt-4 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity animate-pulse-glow" />
          <div className="relative px-10 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-mono font-bold text-lg text-primary-foreground flex items-center gap-3 transform transition-transform group-hover:scale-105">
            Register Now
            <span className="text-2xl group-hover:translate-x-1 transition-transform">🚀</span>
          </div>
        </button>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-8 animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <div className="text-center">
            <p className="font-mono text-3xl md:text-4xl font-bold text-primary glow-text">₹20,000+</p>
            <p className="text-sm text-muted-foreground">Prize Pool</p>
          </div>
          <div className="text-center">
            <p className="font-mono text-3xl md:text-4xl font-bold text-secondary glow-text-yellow">2-4</p>
            <p className="text-sm text-muted-foreground">Team Members</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
