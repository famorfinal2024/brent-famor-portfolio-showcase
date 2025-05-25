
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Calendar, MapPin, Users } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Get to know more about my background, family, and personal journey
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Personal Information */}
        <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-400">
              <User className="h-5 w-5" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-gray-400" />
              <span className="text-gray-300">21 years old (May 19, 2004)</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-gray-400" />
              <span className="text-gray-300">Philippines</span>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-white mb-2">About Me</h4>
              <p className="text-gray-400 leading-relaxed">
                I'm a passionate beginner web developer who is excited about creating digital experiences. 
                Currently learning and exploring various web technologies while building my skills 
                through hands-on projects and continuous learning.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Family Background */}
        <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-400">
              <Users className="h-5 w-5" />
              Family Background
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-2">Parents</h4>
              <div className="space-y-1">
                <p className="text-gray-300">Father: Berto Famor</p>
                <p className="text-gray-300">Mother: Brenda Famor</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Siblings</h4>
              <div className="space-y-1">
                <p className="text-gray-300">Ashley Famor</p>
                <p className="text-gray-300">Mark Famor</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-700/50 rounded-lg">
              <p className="text-gray-400 text-sm">
                Coming from a supportive family that encourages learning and growth, 
                which has been instrumental in my journey into web development.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
