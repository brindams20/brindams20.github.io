import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="space-y-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Computer Science Engineering Student
            </span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight">
            <span className="block text-foreground">BRINDA M S</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Aspiring engineer passionate about creating practical software solutions with strong programming and analytical skills.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover:bg-primary/5 transition-all duration-300"
              asChild
            >
              <a href="/brinda_ms.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
