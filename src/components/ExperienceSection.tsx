
import React, { useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Building, Calendar, MapPin } from 'lucide-react';

interface Experience {
  id: number;
  role: string;
  company: string;
  logo: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Graduate Research Assistant",
    company: "Northeastern University",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGwTPCvlTQlvw/company-logo_400_400/company-logo_400_400/0/1630531267482/northeastern_university_logo?e=1748476800&v=beta&t=W0yqUmKm2_XtjkOBaP0RmKqTWZ004dMxW-5WxU93U4Y",
    period: "August 2024 - December 2024",
    location: "San Jose, California, United States",
    description: [
      "Researching about different neural architectures for medical applications",
      "Finetuning LLM models to support multi-modal medical research",
      "Reading research papers and helping professors write and present research"
    ],
    skills: ["Data Science", "Machine Learning", "Python", "Teaching", "Mentoring"]
  },
  {
    id: 2,
    role: "Graduate Teaching Assistant",
    company: "Northeastern University",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGwTPCvlTQlvw/company-logo_400_400/company-logo_400_400/0/1630531267482/northeastern_university_logo?e=1748476800&v=beta&t=W0yqUmKm2_XtjkOBaP0RmKqTWZ004dMxW-5WxU93U4Y",
    period: "August 2023 - December 2024",
    location: "San Jose, California, United States",
    description: [
      "Assisting professors in teaching data science and machine learning courses",
      "Mentoring students on complex data science projects and research",
      "Conducting review sessions and providing additional learning support"
    ],
    skills: ["Data Science", "Machine Learning", "Python", "Teaching", "Mentoring"]
  },
  {
    id: 3,
    role: "Data Scientist",
    company: "SatSure Analytics",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQFQED6kGut4_g/company-logo_400_400/company-logo_400_400/0/1678962420647/satsure_logo?e=1748476800&v=beta&t=IFnGJ497Tv_3SQ1LR3zMR4EqBOCoM4aGm-4sOh9ak8A",
    period: "April 2024 - September 2024",
    location: "Bengaluru, Karnataka, India",
    description: [
      "Developed machine learning models for satellite imagery analysis",
      "Created computer vision algorithms for agricultural insights",
      "Implemented data pipelines for efficient processing of geospatial data",
      "Collaborated with cross-functional teams to deliver data-driven solutions"
    ],
    skills: ["Computer Vision", "Satellite Imagery", "PyTorch", "Data Engineering", "MLOps"]
  },
  {
    id: 4,
    role: "Software Engineer",
    company: "BankBuddy.ai",
    logo: "https://media.licdn.com/dms/image/v2/C510BAQHLsHggFnuPHQ/company-logo_400_400/company-logo_400_400/0/1631407277572?e=1748476800&v=beta&t=hoQ6jdnenh3ZZHY-jRAxoVjdWJA9g7u-5NiksBP0oKA",
    period: "January 20222 - June 20222",
    location: "Greater Bengaluru Area",
    description: [
      "Built NLP solutions for banking chatbots and virtual assistants",
      "Developed frontend interfaces using React.js",
      "Created RESTful APIs using Django for backend services",
      "Optimized database queries and data processing pipelines"
    ],
    skills: ["NLP", "React.js", "Django", "SQL", "RESTful APIs"]
  }
];

const ExperienceSection: React.FC = () => {
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="experience" className="py-24">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Professional Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-24 bg-primary rounded mb-8"></div>
          <p className="text-muted-foreground max-w-2xl text-center">
            My professional journey across data science and software engineering roles
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="timeline-container">
            {experiences.map((experience, index) => (
              <div 
                key={experience.id}
                ref={(el) => (timelineRefs.current[index] = el)}
                className={cn(
                  "mb-12 opacity-0 transition-all duration-700",
                  index % 2 === 0 ? "delay-100" : "delay-300"
                )}
              >
                <div className="timeline-dot">
                  <div className="w-2 h-2 rounded-full bg-background"></div>
                </div>
                <Card className="glass card-hover mt-[-8px] border border-primary/10 hover:border-primary/30 transition-all">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-md overflow-hidden mr-4 bg-white p-1 shadow-sm">
                        <img 
                          src={experience.logo} 
                          alt={experience.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{experience.role}</h3>
                        <p className="text-primary font-medium">{experience.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" />{experience.period}</span>
                      <span>•</span>
                      <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" />{experience.location}</span>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, i) => (
                        <span key={i} className="skill-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
