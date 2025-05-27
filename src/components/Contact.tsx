
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "brentfamor@gmail.com",
      href: "mailto:brentfamor@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "09976815210",
      href: "tel:09976815210"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Philippines",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "#",
      color: "hover:text-gray-300"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          I'd love to connect and discuss opportunities in web development
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="text-blue-400">{contact.icon}</div>
                  <div>
                    <p className="text-gray-400 text-sm">{contact.label}</p>
                    {contact.href ? (
                      <a 
                        href={contact.href}
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-white">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Message */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Let's Connect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                I'm actively looking for opportunities to grow as a web developer. 
                Whether it's for internships, entry-level positions, or collaborative projects, 
                I'd love to hear from you!
              </p>
              
              <div className="space-y-4">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('mailto:brentfamor@gmail.com')}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`text-gray-400 transition-colors ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
