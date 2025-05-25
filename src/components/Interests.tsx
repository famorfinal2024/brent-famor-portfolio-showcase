
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Plus, Edit, Trash2, Code, Gamepad2, Music, Book } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Interest {
  id: number;
  title: string;
  description: string;
  category: "Tech" | "Gaming" | "Music" | "Other";
  icon: string;
}

const Interests = () => {
  const { toast } = useToast();
  const [interests, setInterests] = useState<Interest[]>([
    {
      id: 1,
      title: "Web Development",
      description: "Passionate about creating interactive and responsive web applications using modern technologies.",
      category: "Tech",
      icon: "Code"
    },
    {
      id: 2,
      title: "Gaming",
      description: "Enjoy playing various video games, especially strategy and adventure games that challenge problem-solving skills.",
      category: "Gaming",
      icon: "Gamepad2"
    },
    {
      id: 3,
      title: "Music",
      description: "Love listening to different genres of music and occasionally exploring music production software.",
      category: "Music",
      icon: "Music"
    },
    {
      id: 4,
      title: "Learning New Technologies",
      description: "Always curious about emerging technologies and enjoy experimenting with new programming languages and frameworks.",
      category: "Tech",
      icon: "Book"
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingInterest, setEditingInterest] = useState<Interest | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Other" as Interest["category"],
    icon: "Book"
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code": return <Code className="h-6 w-6" />;
      case "Gamepad2": return <Gamepad2 className="h-6 w-6" />;
      case "Music": return <Music className="h-6 w-6" />;
      default: return <Book className="h-6 w-6" />;
    }
  };

  const getCategoryColor = (category: Interest["category"]) => {
    switch (category) {
      case "Tech": return "bg-blue-600/20 text-blue-300 border-blue-600/30";
      case "Gaming": return "bg-green-600/20 text-green-300 border-green-600/30";
      case "Music": return "bg-purple-600/20 text-purple-300 border-purple-600/30";
      case "Other": return "bg-gray-600/20 text-gray-300 border-gray-600/30";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingInterest) {
      setInterests(interests.map(interest => 
        interest.id === editingInterest.id 
          ? { ...interest, ...formData }
          : interest
      ));
      toast({
        title: "Interest Updated",
        description: "Your interest has been successfully updated.",
      });
    } else {
      const newInterest: Interest = {
        id: Date.now(),
        ...formData
      };
      setInterests([...interests, newInterest]);
      toast({
        title: "Interest Added",
        description: "Your new interest has been added successfully.",
      });
    }

    setFormData({ title: "", description: "", category: "Other", icon: "Book" });
    setEditingInterest(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (interest: Interest) => {
    setEditingInterest(interest);
    setFormData({
      title: interest.title,
      description: interest.description,
      category: interest.category,
      icon: interest.icon
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setInterests(interests.filter(interest => interest.id !== id));
    toast({
      title: "Interest Deleted",
      description: "The interest has been removed from your list.",
    });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
          Personal Interests
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Things I'm passionate about and enjoy doing in my free time
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button 
              className="bg-pink-600 hover:bg-pink-700"
              onClick={() => {
                setEditingInterest(null);
                setFormData({ title: "", description: "", category: "Other", icon: "Book" });
              }}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add New Interest
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-800 border-gray-700 max-w-md">
            <DialogHeader>
              <DialogTitle className="text-white">
                {editingInterest ? "Edit Interest" : "Add New Interest"}
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
                <Label htmlFor="category" className="text-gray-300">Category</Label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as Interest["category"] })}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
                >
                  <option value="Tech">Tech</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Music">Music</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <Label htmlFor="icon" className="text-gray-300">Icon</Label>
                <select
                  id="icon"
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
                >
                  <option value="Code">Code</option>
                  <option value="Gamepad2">Gaming</option>
                  <option value="Music">Music</option>
                  <option value="Book">Book</option>
                </select>
              </div>
              <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
                {editingInterest ? "Update Interest" : "Add Interest"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {interests.map((interest) => (
          <Card key={interest.id} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-pink-400">
                    {getIcon(interest.icon)}
                  </div>
                  <CardTitle className="text-white text-lg">{interest.title}</CardTitle>
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEdit(interest)}
                    className="p-1 h-8 w-8"
                  >
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(interest.id)}
                    className="p-1 h-8 w-8 text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div className={`inline-block px-2 py-1 rounded text-xs ${getCategoryColor(interest.category)}`}>
                {interest.category}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm leading-relaxed">
                {interest.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Interests;
