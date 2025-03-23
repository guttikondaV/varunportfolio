
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 -z-10"></div>
      
      {/* Background design elements */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-20"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-20"></div>
      
      <div className="container px-6 py-12 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in-slow">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-secondary text-xs font-medium uppercase tracking-wider text-primary">
              Data Scientist & Machine Learning Engineer
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="block">
                Hi, I'm <span className="text-primary">Varun</span>
              </span>
              <span className="block mt-2">
                Turning Data into
              </span>
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Actionable Insights
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Specializing in Machine Learning, Computer Vision, and Natural Language Processing with a passion for creating innovative data-driven solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="button-hover"
                onClick={() => window.open('mailto:varun@example.com')}
              >
                Get in Touch
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="group"
              >
                <Download size={18} className="mr-2 transition-transform group-hover:-translate-y-1" />
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl -z-10"></div>
              <div className={cn(
                "relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden",
                "ring-4 ring-background shadow-xl"
              )}>
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQEAVjgNQHUu0g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681258289988?e=1748476800&v=beta&t=N8EdacDNbXFlhNzU4G3RqpnctgTkUzTQ47SAHqkKdX8" 
                  alt="Varun Guttikonda"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center flex-col animate-fade-in-slow">
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollToAbout}
            className="animate-bounce"
          >
            <ArrowDown size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
