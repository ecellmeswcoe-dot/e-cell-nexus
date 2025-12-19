import { useState, useEffect } from "react";
import SplashLoader from "@/components/SplashLoader";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EventHighlights from "@/components/EventHighlights";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if user has already seen the loader in this session
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");
    if (hasSeenLoader) {
      setShowLoader(false);
      setShowContent(true);
    }
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem("hasSeenLoader", "true");
    setShowLoader(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {/* Splash Loader */}
      {showLoader && <SplashLoader onComplete={handleLoaderComplete} />}

      {/* Main Content */}
      {showContent && (
        <div className="relative min-h-screen">
          {/* Animated Background */}
          <AnimatedBackground />

          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main>
            <Hero />
            <About />
            <EventHighlights />
            <Registration />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
