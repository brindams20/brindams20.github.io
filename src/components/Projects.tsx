import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Hospital Insulin Level Analysis",
    description: "Developed comprehensive visual graphs and data insights for patient insulin-level monitoring using Python data libraries.",
    icon: Activity,
    technologies: ["Python", "Data Visualization", "Analytics"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Netflix Dashboard",
    description: "Built an interactive Power BI dashboard analyzing Netflix content distribution, categories, and viewing trends.",
    icon: TrendingUp,
    technologies: ["Power BI", "Data Analysis", "Dashboard Design"],
    color: "from-cyan-500 to-teal-500",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <span className="text-primary font-display text-sm font-bold tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing data analysis and visualization expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={project.title}
                className="border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                <CardHeader className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-display text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="px-3 py-1 font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
