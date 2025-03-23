
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";

interface NavbarProps {
  setDarkMode: (value: boolean) => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ setDarkMode, darkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
          isScrolled 
            ? "glass py-2" 
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a 
            href="#hero" 
            className="text-lg font-bold tracking-tight text-foreground"
          >
            Varun Guttikonda
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a onClick={() => scrollToSection('about')} className="nav-link cursor-pointer">About</a>
            <a onClick={() => scrollToSection('experience')} className="nav-link cursor-pointer">Experience</a>
            <a onClick={() => scrollToSection('skills')} className="nav-link cursor-pointer">Skills</a>
            <a onClick={() => scrollToSection('projects')} className="nav-link cursor-pointer">Projects</a>
            <a onClick={() => scrollToSection('contact')} className="nav-link cursor-pointer">Contact</a>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode}
              className="ml-2"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </nav>
          
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode}
              className="mr-2"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </header>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 glass md:hidden transition-transform duration-300 ease-in-out transform",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 py-8">
          <a onClick={() => scrollToSection('about')} className="nav-link text-xl cursor-pointer">About</a>
          <a onClick={() => scrollToSection('experience')} className="nav-link text-xl cursor-pointer">Experience</a>
          <a onClick={() => scrollToSection('skills')} className="nav-link text-xl cursor-pointer">Skills</a>
          <a onClick={() => scrollToSection('projects')} className="nav-link text-xl cursor-pointer">Projects</a>
          <a onClick={() => scrollToSection('contact')} className="nav-link text-xl cursor-pointer">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
