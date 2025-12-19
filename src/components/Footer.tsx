import ecellLogo from "@/assets/ecell-logo.png";

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 border-t border-border/50">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center gap-4">
            <img 
              src={ecellLogo} 
              alt="E-Cell MESWCOE Logo" 
              className="w-20 h-20 object-contain"
            />
            <h3 className="font-mono text-xl font-bold text-foreground text-center">
              Entrepreneurship Cell
            </h3>
            <p className="text-muted-foreground text-center">
              MES Wadia College of Engineering, Pune
            </p>
          </div>

          {/* Motto */}
          <div className="glass-card px-8 py-4 rounded-xl border border-primary/20">
            <p className="font-mono text-sm md:text-base text-center">
              <span className="text-primary">Innovate</span>
              <span className="text-muted-foreground mx-2">•</span>
              <span className="text-secondary">Inspire</span>
              <span className="text-muted-foreground mx-2">•</span>
              <span className="text-primary">Create</span>
              <span className="text-muted-foreground mx-2">•</span>
              <span className="text-secondary">Transform</span>
            </p>
          </div>

          {/* Divider */}
          <div className="w-64 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Credit */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Website developed by <a href="https://instagram.com/harshad.h.pakhale.01" target="_blank" rel="noopener noreferrer" className="text-primary font-mono hover:text-primary/80 transition-colors">@harshad.h.pakhale.01</a>
            </p>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/60 font-mono">
            © {new Date().getFullYear()} E-Cell MESWCOE. All rights reserved.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-4 left-4 w-12 h-12 border-l border-b border-primary/20 opacity-50" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-r border-b border-primary/20 opacity-50" />
      </div>
    </footer>
  );
};

export default Footer;
