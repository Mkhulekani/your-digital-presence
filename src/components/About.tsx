import { Building2, Users, Award, Target } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Building2,
      title: "Expert Team",
      description: "Dynamic and skilled site management team with extensive experience across all facets of civil engineering construction.",
    },
    {
      icon: Target,
      title: "Infrastructure Capacity",
      description: "Expansive plant holding ensures capacity and continuity for projects of varying scales, from small to large-scale initiatives.",
    },
    {
      icon: Users,
      title: "Diverse Clientele",
      description: "Proudly serving governments, local authorities, corporate groups, and property developers with proven track record.",
    },
    {
      icon: Award,
      title: "Quality Standards",
      description: "Rigorous company-wide training regime ensuring quality across all levels while upskilling staff and sub-contractors.",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Company
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Renocrete Construction prides itself on a dynamic and skilled site management team, equipped with extensive experience across all facets of civil engineering construction. Our commitment is evident in the consistent delivery of successful projects, executed with precision, on time, within budget, and adhering to the highest quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-card hover:shadow-construction transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-construction-blue-light rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card p-8 rounded-lg shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-4">Leadership</h3>
          <p className="text-muted-foreground leading-relaxed">
            At the helm of Renocrete Construction is Director <span className="font-semibold text-foreground">Oscar S Notununu</span>, a seasoned professional with a Diploma in Civil Engineering and an impressive 13-year tenure in the built environment. His visionary leadership sets the tone for our commitment to excellence, innovation, and sustainable development in every endeavor we undertake. Choose Renocrete Construction for a partnership marked by proficiency, reliability, and a relentless pursuit of excellence in civil and structural works.
          </p>
        </div>
      </div>
    </section>
  );
};
