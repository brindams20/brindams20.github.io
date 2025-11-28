import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Trophy } from "lucide-react";

const education = [
  {
    institution: "Malnad College of Engineering",
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science Engineering",
    period: "2023 – 2027",
    icon: GraduationCap,
  },
  {
    institution: "Masters PU College",
    degree: "Pre-University (PU)",
    field: "94.66%",
    period: "2020 – 2023",
    icon: GraduationCap,
  },
  {
    institution: "Kendriya Vidyalaya, Hassan",
    degree: "SSLC (CBSE)",
    field: "86%",
    period: "2020",
    icon: GraduationCap,
  },
];

const certifications = [
  {
    title: "NPTEL Elite",
    description: "Getting Started with Competitive Programming",
    icon: Award,
  },
  {
    title: "Scratch Certification",
    description: "Programming Fundamentals",
    icon: Award,
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-8">
            <div className="animate-in fade-in slide-in-from-left duration-700">
              <span className="text-primary font-display text-sm font-bold tracking-wider uppercase">
                Education
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-8">
                Academic Journey
              </h2>
            </div>
            
            <div className="space-y-4 animate-in fade-in slide-in-from-left duration-700 delay-200">
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <Card 
                    key={edu.institution}
                    className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{edu.institution}</CardTitle>
                          <CardDescription className="text-base">
                            <span className="font-semibold text-foreground">{edu.degree}</span>
                            {edu.field && <span> — {edu.field}</span>}
                          </CardDescription>
                          <p className="text-sm text-muted-foreground mt-2">{edu.period}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
          
          {/* Certifications & Achievements */}
          <div className="space-y-8">
            <div className="animate-in fade-in slide-in-from-right duration-700">
              <span className="text-primary font-display text-sm font-bold tracking-wider uppercase">
                Recognition
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-8">
                Certifications
              </h2>
            </div>
            
            <div className="space-y-4 animate-in fade-in slide-in-from-right duration-700 delay-200">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <Card 
                    key={cert.title}
                    className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold mb-1">{cert.title}</h3>
                          <p className="text-muted-foreground">{cert.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
              
              <Card className="border-2 border-primary/30 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-xl">
                      <Trophy className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-1">Achievement</h3>
                      <p className="text-muted-foreground">Secured NPTEL Elite Certification</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
