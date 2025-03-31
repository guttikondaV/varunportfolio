
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Globe, Languages } from "lucide-react";

const AboutSection: React.FC = () => {
  const languages = [
    { name: "English", level: "Native/Bilingual" },
    { name: "Hindi", level: "Native/Bilingual" },
    { name: "Telugu", level: "Native/Bilingual" },
    { name: "French", level: "Elementary" },
    { name: "Spanish", level: "Elementary" },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Who I Am
          </h2>
          <div className="h-1 w-24 bg-primary rounded mb-8"></div>
          <p className="text-muted-foreground max-w-2xl text-center">
            Graduate Teaching Assistant at Northeastern University with experience in Computer Vision, Data Science and Software Engineering.
          </p>
        </div>
        
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7 animate-slide-left">
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-muted-foreground mb-4">
                I'm a Data Scientist and Machine Learning Engineer with a passion for autonomous vehicles and their experience design. Currently pursuing my Master's in Data Science at Northeastern University, I bring professional experience from roles at SatSure Analytics and BankBuddy.ai.
              </p>
              <p className="text-muted-foreground mb-4">
                My expertise spans Computer Vision, Natural Language Processing, and MLOps. I thrive in innovative environments and enjoy building solutions that leverage cutting-edge machine learning techniques to solve real-world problems.
              </p>
              <p className="text-muted-foreground mb-4">
                With a strong foundation in Python, PyTorch, React.js, Django, AWS, and SQL, I approach technical challenges with both analytical rigor and creative problem-solving. I'm constantly expanding my knowledge through continuous learning and practical application.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Button className="button-hover" size="sm">
                <Github size={18} className="mr-2" />
                GitHub
              </Button>
              <Button className="button-hover" size="sm">
                <Linkedin size={18} className="mr-2" />
                LinkedIn
              </Button>
              <Button className="button-hover" size="sm">
                <Mail size={18} className="mr-2" />
                Email
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-5 space-y-6 animate-slide-right">
            <Card className="glass card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Globe size={20} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold">Location</h4>
                </div>
                <p className="text-muted-foreground">San Jose, California, United States</p>
              </CardContent>
            </Card>
            
            <Card className="glass card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Languages size={20} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold">Languages</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {languages.map((language, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="text-sm font-medium">{language.name}</span>
                      <span className="text-xs text-muted-foreground">{language.level}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass card-hover">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Education</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center mb-1">
                      <img 
                        src="https://media.licdn.com/dms/image/v2/C4D0BAQGwTPCvlTQlvw/company-logo_400_400/company-logo_400_400/0/1630531267482/northeastern_university_logo?e=1748476800&v=beta&t=W0yqUmKm2_XtjkOBaP0RmKqTWZ004dMxW-5WxU93U4Y" 
                        alt="Northeastern University"
                        className="w-5 h-5 mr-2"
                      />
                      <h5 className="font-medium">Northeastern University</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">Master of Science in Data Science (Expected December 2024)</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-1">
                      <img 
                        src="https://media.licdn.com/dms/image/v2/D560BAQH0u0StCXmEkg/company-logo_400_400/company-logo_400_400/0/1732705890200/vellore_institute_of_technology_logo?e=1748476800&v=beta&t=LL7innf9GguNxCxCjPs39OxciIVsVMAej4QpR2cJ5gg" 
                        alt="Vellore Institute of Technology"
                        className="w-5 h-5 mr-2"
                      />
                      <h5 className="font-medium">Vellore Institute of Technology</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">Bachelor's in Computer Science (Graduated September 2022)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
