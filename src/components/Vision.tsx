import { Eye, Target, Users, TrendingUp } from "lucide-react";

export const Vision = () => {
  const visionPoints = [
    {
      icon: Target,
      title: "Industry Leadership",
      description: "Remain an industry leader in the multi-disciplines which we currently operate within the civil engineering industry and expand in South Africa's construction economy.",
    },
    {
      icon: TrendingUp,
      title: "Partner of Choice",
      description: "Be the industry's partner of choice, delivering quality and value in various construction sectors through integrated solutions and services.",
    },
    {
      icon: Users,
      title: "Desirable Workplace",
      description: "Create a desirable place of work within a safe working environment while achieving personal and community growth.",
    },
    {
      icon: Eye,
      title: "Legacy of Excellence",
      description: "Be the recognized leader in creating desirable communities while leaving a legacy of excellence.",
    },
  ];

  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-primary to-construction-blue-dark text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Vision
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Committed to excellence, innovation, and sustainable development in every project we undertake
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visionPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-lg border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4">
                <point.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{point.title}</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-foreground/10 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-primary-foreground/20 text-center">
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed italic">
            "To provide quality services through loyal relationships, clear communication and creative solutions within our unique work environment while achieving personal and community growth."
          </blockquote>
        </div>
      </div>
    </section>
  );
};
