import { Phone, Mail, MapPin, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Contact us today for a consultation and discover how we can bring your vision to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-card p-8 rounded-lg shadow-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-construction-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Company Registration</h3>
                  <p className="text-muted-foreground">Reg No. 2020/129004/07</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-construction-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a href="tel:0734554780" className="text-muted-foreground hover:text-primary transition-colors block">073 455 4780</a>
                  <a href="tel:0817485825" className="text-muted-foreground hover:text-primary transition-colors block">081 748 5825</a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-construction-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:osnotununu@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">osnotununu@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-construction-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">2 Jolly Close, 35 First Avenue<br />Alberton North, 1450</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-4">Request a Quote</h3>
              <p className="text-muted-foreground mb-6">
                Fill out our contact form or reach out directly to discuss your construction project requirements. Our team will respond promptly with a detailed proposal.
              </p>
              <Button variant="cta" size="lg" className="w-full" asChild>
                <a href="tel:0734554780">Contact Us Now</a>
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-construction-blue-dark text-primary-foreground p-6 sm:p-8 md:p-12 rounded-lg text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Why Choose Renocrete Construction?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 sm:mt-8">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">13+</div>
                <p className="text-primary-foreground/90">Years of Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <p className="text-primary-foreground/90">Quality Commitment</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">On Time</div>
                <p className="text-primary-foreground/90">Project Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
