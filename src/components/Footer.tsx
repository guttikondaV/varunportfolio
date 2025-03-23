
import React from 'react';
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold tracking-tight">Varun Guttikonda</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Data Scientist & Machine Learning Engineer
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Twitter size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Mail size={18} />
            </Button>
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={scrollToTop}
            className="group"
          >
            <ArrowUp size={18} className="transition-transform group-hover:-translate-y-1" />
          </Button>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Varun Guttikonda. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
