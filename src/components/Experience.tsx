
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "Academic",
      title: "Web Development Studies",
      organization: "Self-Learning & Online Courses",
      duration: "2023 - Present",
      description: "Currently learning web development fundamentals including HTML, CSS, JavaScript, React, and modern development practices.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
    },
    {
      type: "Project",
      title: "Personal Development Projects",
      organization: "Independent Study",
      duration: "2024 - Present",
      description: "Working on various personal projects to apply learned concepts and build a portfolio of work.",
      skills: ["Problem Solving", "Project Management", "UI/UX Design"]
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Experience & Education
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          My learning journey and development experience so far
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((experience, index) => (
          <Card 
            key={index} 
            className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02]"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {experience.type === "Academic" ? (
                    <GraduationCap className="h-6 w-6 text-green-400" />
                  ) : (
                    <Briefcase className="h-6 w-6 text-blue-400" />
                  )}
                  <div>
                    <CardTitle className="text-white">{experience.title}</CardTitle>
                    <p className="text-gray-400">{experience.organization}</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-gray-300 border-gray-600">
                  {experience.duration}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    className="bg-blue-600/20 text-blue-300 border-blue-600/30"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Card className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-blue-600/30 max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold text-white mb-2">Looking Forward</h3>
            <p className="text-gray-300">
              As a beginner in web development, I'm actively seeking opportunities to apply my skills, 
              learn from experienced developers, and contribute to meaningful projects. 
              I'm open to internships, entry-level positions, and collaborative projects.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Experience;
