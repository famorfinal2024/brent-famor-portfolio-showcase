
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 pt-16">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8 relative">
          <img
            src="/lovable-uploads/07942644-24b1-4d72-a10e-651d5f18e6c3.png"
            alt="Brent Jhon Famor"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-6 border-4 border-blue-400 shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 rounded-full bg-blue-400/20 w-32 h-32 md:w-48 md:h-48 mx-auto animate-pulse"></div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
          Brent Jhon Famor
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Beginner Web Developer
        </p>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating digital experiences and constantly learning new technologies. 
          Welcome to my journey in web development!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            onClick={scrollToAbout}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            Learn More About Me
          </Button>
          
          <Button 
            variant="outline" 
            className="border-gray-400 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a href="mailto:brentfamor@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Mail className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Github className="h-6 w-6" />
          </a>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="h-8 w-8 text-gray-400 mx-auto cursor-pointer" onClick={scrollToAbout} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
