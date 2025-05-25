
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Plus, Edit, Trash2, Code, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  status: "In Progress" | "Completed" | "Planning";
  progress: number;
}

const Projects = () => {
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      status: "In Progress",
      progress: 80
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A simple task management application with CRUD functionality to help organize daily activities.",
      technologies: ["React", "Local Storage", "CSS"],
      status: "Planning",
      progress: 15
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions and forecasts using a weather API.",
      technologies: ["JavaScript", "API Integration", "CSS"],
      status: "Planning",
      progress: 5
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    status: "Planning" as Project["status"],
    progress: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const techArray = formData.technologies.split(",").map(tech => tech.trim()).filter(tech => tech);
    
    if (editingProject) {
      setProjects(projects.map(project => 
        project.id === editingProject.id 
          ? { ...project, ...formData, technologies: techArray }
          : project
      ));
      toast({
        title: "Project Updated",
        description: "Your project has been successfully updated.",
      });
    } else {
      const newProject: Project = {
        id: Date.now(),
        ...formData,
        technologies: techArray
      };
      setProjects([...projects, newProject]);
      toast({
        title: "Project Added",
        description: "Your new project has been added successfully.",
      });
    }

    setFormData({ title: "", description: "", technologies: "", status: "Planning", progress: 0 });
    setEditingProject(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      technologies: project.technologies.join(", "),
      status: project.status,
      progress: project.progress
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setProjects(projects.filter(project => project.id !== id));
    toast({
      title: "Project Deleted",
      description: "The project has been removed from your list.",
    });
  };

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "Completed": return "bg-green-600/20 text-green-300 border-green-600/30";
      case "In Progress": return "bg-yellow-600/20 text-yellow-300 border-yellow-600/30";
      case "Planning": return "bg-blue-600/20 text-blue-300 border-blue-600/30";
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Current and upcoming projects I'm working on
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => {
                setEditingProject(null);
                setFormData({ title: "", description: "", technologies: "", status: "Planning", progress: 0 });
              }}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add New Project
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-800 border-gray-700 max-w-md">
            <DialogHeader>
              <DialogTitle className="text-white">
                {editingProject ? "Edit Project" : "Add New Project"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title" className="text-gray-300">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div>
                <Label htmlFor="description" className="text-gray-300">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div>
                <Label htmlFor="technologies" className="text-gray-300">Technologies (comma-separated)</Label>
                <Input
                  id="technologies"
                  value={formData.technologies}
                  onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="React, TypeScript, Tailwind CSS"
                />
              </div>
              <div>
                <Label htmlFor="status" className="text-gray-300">Status</Label>
                <select
                  id="status"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as Project["status"] })}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
                >
                  <option value="Planning">Planning</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div>
                <Label htmlFor="progress" className="text-gray-300">Progress (%)</Label>
                <Input
                  id="progress"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.progress}
                  onChange={(e) => setFormData({ ...formData, progress: parseInt(e.target.value) || 0 })}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                {editingProject ? "Update Project" : "Add Project"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project) => (
          <Card key={project.id} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEdit(project)}
                    className="p-1 h-8 w-8"
                  >
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(project.id)}
                    className="p-1 h-8 w-8 text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <Badge className={getStatusColor(project.status)}>
                {project.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-400 mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
