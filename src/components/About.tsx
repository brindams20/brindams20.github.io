import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, LineChart, Brain } from "lucide-react";

const skills = [
  { name: "C++", icon: Code2, category: "Programming" },
  { name: "Java", icon: Code2, category: "Programming" },
  { name: "Python", icon: Code2, category: "Programming" },
  { name: "HTML", icon: Code2, category: "Web" },
  { name: "MySQL", icon: Database, category: "Database" },
  { name: "Power BI", icon: LineChart, category: "Analytics" },
  { name: "MS Excel", icon: LineChart, category: "Analytics" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-block">
              <span className="text-primary font-display text-sm font-bold tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight">
              Turning Ideas Into
              <span className="text-primary"> Reality</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Computer Science Engineering student at Malnad College of Engineering with a strong foundation in programming and data analysis. My passion lies in developing practical software solutions that make a difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With experience in competitive programming and data visualization, I continuously strive to expand my technical knowledge and contribute to innovative projects.
            </p>
          </div>
          
          <div className="space-y-4 animate-in fade-in slide-in-from-right duration-700 delay-200">
            <h3 className="font-display text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card 
                    key={skill.name}
                    className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{skill.name}</p>
                        <p className="text-xs text-muted-foreground">{skill.category}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
