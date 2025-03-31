
import React, { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Machine Learning & AI
  { name: "PyTorch", level: 90, category: "ml" },
  { name: "Analytics", level: 85, category: "ml" },
  { name: "Computer Vision", level: 95, category: "ml" },
  { name: "NLP", level: 90, category: "ml" },
  { name: "Deep Learning", level: 85, category: "ml" },
  { name: "ML Ops", level: 80, category: "ml" },
  { name: "Scikit-learn", level: 95, category: "ml" },
  
  // Programming Languages
  { name: "Python", level: 95, category: "languages" },
  { name: "JavaScript", level: 85, category: "languages" },
  { name: "TypeScript", level: 80, category: "languages" },
  { name: "SQL", level: 90, category: "languages" },
  { name: "C++", level: 75, category: "languages" },
  { name: "Java", level: 70, category: "languages" },
  
  // Web Development
  { name: "React.js", level: 85, category: "web" },
  { name: "Django", level: 80, category: "web" },
  { name: "HTML/CSS", level: 90, category: "web" },
  { name: "RESTful APIs", level: 85, category: "web" },
  { name: "Node.js", level: 75, category: "web" },
  
  // Data Engineering
  { name: "Azure", level: 80, category: "mlops" },
  { name: "Data Pipeline", level: 85, category: "mlops" },
  { name: "MongoDB", level: 75, category: "mlops" },
  { name: "PostgreSQL", level: 85, category: "mlops" },
  { name: "Docker", level: 80, category: "mlops" },
  { name: "Apache Spark", level: 70, category: "mlops" },
];

const categories = [
  { id: "ml", name: "Machine Learning & AI" },
  { id: "languages", name: "Programming Languages" },
  { id: "web", name: "Web Development" },
  { id: "mlops", name: "MLOps" },
];

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("ml");
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    // Reset animation states when tab changes
    setAnimatedSkills({});
    
    // Animate skills progressively
    const skillsToAnimate = skills.filter(skill => skill.category === activeTab);
    
    skillsToAnimate.forEach((skill, index) => {
      setTimeout(() => {
        setAnimatedSkills(prev => ({
          ...prev,
          [skill.name]: true
        }));
      }, 100 + index * 100);
    });
  }, [activeTab]);

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Technical Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Skills & Proficiency
          </h2>
          <div className="h-1 w-24 bg-primary rounded mb-8"></div>
          <p className="text-muted-foreground max-w-2xl text-center">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="ml" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 glass">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="py-3"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {categories.map(category => (
              <TabsContent key={category.id} value={category.id} className="mt-6 animate-fade-in">
                <Card className="glass">
                  <CardContent className="p-6">
                    <div className="grid gap-6">
                      {skills
                        .filter(skill => skill.category === category.id)
                        .map((skill, index) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="progress-bar">
                              <div 
                                className="progress-bar-fill"
                                style={{ 
                                  width: animatedSkills[skill.name] ? `${skill.level}%` : '0%',
                                  transitionDelay: `${index * 50}ms`
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="flex flex-wrap gap-4 justify-center mt-16">
            <div className="flex flex-col items-center p-6 glass rounded-lg w-full sm:w-auto sm:min-w-[180px] card-hover animate-scale-in">
              <h3 className="text-4xl font-bold mb-2">4+</h3>
              <p className="text-muted-foreground text-center">Years of Experience</p>
            </div>
            
            <div className="flex flex-col items-center p-6 glass rounded-lg w-full sm:w-auto sm:min-w-[180px] card-hover animate-scale-in delay-100">
              <h3 className="text-4xl font-bold mb-2">20+</h3>
              <p className="text-muted-foreground text-center">Projects Completed</p>
            </div>
            
            <div className="flex flex-col items-center p-6 glass rounded-lg w-full sm:w-auto sm:min-w-[180px] card-hover animate-scale-in delay-200">
              <h3 className="text-4xl font-bold mb-2">5+</h3>
              <p className="text-muted-foreground text-center">Certifications</p>
            </div>
            
            <div className="flex flex-col items-center p-6 glass rounded-lg w-full sm:w-auto sm:min-w-[180px] card-hover animate-scale-in delay-300">
              <h3 className="text-4xl font-bold mb-2">3</h3>
              <p className="text-muted-foreground text-center">Languages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
