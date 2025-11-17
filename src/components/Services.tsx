import buildingImage from "@/assets/building-construction.jpg";
import roadImage from "@/assets/road-construction.jpg";
import projectImage from "@/assets/project-management.jpg";

export const Services = () => {
  const services = [
    {
      title: "Civil Engineering Structures and Roads Construction",
      description: "Construction ranging from steel structures erections, reinforced concrete structures and road construction in gravel, paving blocks, concrete, bitumen roads and associated drainage structures.",
      image: roadImage,
    },
    {
      title: "Building Construction",
      description: "We pride ourselves of vast experience in the building industry where we have constructed both high-rise and low-rise residential buildings, commercial buildings and also institutional buildings.",
      image: buildingImage,
    },
    {
      title: "Construction Project Management",
      description: "Renocrete Construction offers a wide range of project management services including construction project planning & management, contract management, construction project supervisions and site inspections.",
      image: projectImage,
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive construction solutions delivered with precision, quality, and professionalism
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-construction transition-all hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
