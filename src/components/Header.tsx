import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Renocrete Construction" className="h-12 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-primary">RENOCRETE</h1>
              <p className="text-xs text-muted-foreground">Construction (Pty) Ltd</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("vision")} className="text-foreground hover:text-primary transition-colors">
              Vision
            </button>
            <Button onClick={() => scrollToSection("contact")} variant="cta" size="sm">
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4 border-t border-border animate-fade-in">
            <button onClick={() => scrollToSection("home")} className="text-left text-foreground hover:text-primary transition-colors py-2 px-2 -mx-2 rounded hover:bg-secondary/50">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-left text-foreground hover:text-primary transition-colors py-2 px-2 -mx-2 rounded hover:bg-secondary/50">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-left text-foreground hover:text-primary transition-colors py-2 px-2 -mx-2 rounded hover:bg-secondary/50">
              Services
            </button>
            <button onClick={() => scrollToSection("vision")} className="text-left text-foreground hover:text-primary transition-colors py-2 px-2 -mx-2 rounded hover:bg-secondary/50">
              Vision
            </button>
            <Button onClick={() => scrollToSection("contact")} variant="cta" size="lg" className="w-full mt-2">
              Get Quote
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
