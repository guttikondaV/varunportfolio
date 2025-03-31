
import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string[];
  githubLink?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Image Captioning System",
    description: "A deep learning model that generates descriptive captions for images using a combination of CNN and LSTM architectures.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["PyTorch", "Computer Vision", "NLP", "Deep Learning"],
    category: ["ml", "computer-vision"],
    githubLink: "#",
  },
  {
    id: 2,
    title: "On-Device Translation PWA",
    description: "A Progressive Web App that performs language translation directly on the device, ensuring privacy and offline functionality.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["React.js", "TensorFlow.js", "PWA", "NLP"],
    category: ["web", "nlp"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 3,
    title: "Satellite Imagery Analysis",
    description: "A machine learning pipeline for analyzing satellite imagery to detect and classify land use patterns for agricultural insights.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["PyTorch", "Computer Vision", "Geospatial", "MLOps"],
    category: ["ml", "computer-vision", "data"],
    githubLink: "#",
  },
  {
    id: 4,
    title: "Banking Chatbot",
    description: "An intelligent conversational agent for banking services, leveraging NLP to understand and respond to customer queries.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["NLP", "Django", "React.js", "AWS"],
    category: ["nlp", "web"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 5,
    title: "Data Pipeline for IoT Devices",
    description: "A scalable data processing pipeline for IoT devices, enabling real-time analytics and visualization of sensor data.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    tags: ["Apache Spark", "AWS", "Python", "Data Engineering"],
    category: ["data"],
    githubLink: "#",
  },
  {
    id: 6,
    title: "Sentiment Analysis Dashboard",
    description: "A dashboard for real-time sentiment analysis of social media data, providing insights for brand monitoring and market research.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    tags: ["NLP", "React.js", "Python", "Machine Learning"],
    category: ["web", "nlp", "ml"],
    githubLink: "#",
    liveLink: "#",
  },
];

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "ml", name: "Machine Learning" },
    { id: "computer-vision", name: "Computer Vision" },
    { id: "nlp", name: "NLP" },
    { id: "web", name: "Web Development" },
    { id: "data", name: "Data Engineering" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="py-24">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-primary rounded mb-8"></div>
          <p className="text-muted-foreground max-w-2xl text-center">
            A selection of my most noteworthy projects that showcase my skills and experience
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category.id)}
              className="min-w-[120px]"
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="glass overflow-hidden card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.githubLink && (
                    <Button size="icon" variant="secondary" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                      </a>
                    </Button>
                  )}
                  
                  {project.liveLink && (
                    <Button size="icon" variant="secondary" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={20} />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* <div className="flex justify-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="group transition-all duration-300"
          >
            <span className="mr-2 transition-transform group-hover:translate-x-1">View All Projects</span> 
            <ExternalLink size={16} className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
