import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website built with React and TailwindCSS, featuring dark/light mode toggle and smooth animations.",
      technologies: ["React.js", "TailwindCSS", "Responsive Design"],
      type: "Web Development",
      accent: "border-l-blue-500 bg-card dark:bg-blue-950/30",
      typeColor: "text-blue-700 dark:text-blue-300",
    },
    {
      title: "Task Automation with n8n",
      description:
        "Automated workflow system using n8n to streamline repetitive tasks and integrate various services for improved productivity.",
      technologies: ["n8n", "Automation", "API Integration"],
      type: "Automation",
      accent: "border-l-green-500 bg-card dark:bg-green-950/30",
      typeColor: "text-green-700 dark:text-green-300",
    },
    {
      title: "CRUD Web App",
      description:
        "Full-stack web application with complete CRUD operations, user authentication, and responsive design using the MERN stack.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      type: "Full Stack",
      accent: "border-l-purple-500 bg-card dark:bg-purple-950/30",
      typeColor: "text-purple-700 dark:text-purple-300",
    },
    {
      title: "IoT Mini Project",
      description:
        "Arduino-based IoT project with web interface for remote monitoring and control, bridging hardware and software integration.",
      technologies: ["Arduino", "IoT", "Web Interface", "Hardware"],
      type: "IoT & Electronics",
      accent: "border-l-orange-500 bg-card dark:bg-orange-950/30",
      typeColor: "text-orange-700 dark:text-orange-300",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`h-full flex flex-col hover:shadow-lg transition-all duration-300 border-l-4 ${project.accent}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2 text-card-foreground">{project.title}</CardTitle>
                    <Badge variant="outline" className={`text-xs ${project.typeColor} border-current`}>
                      {project.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-card-foreground/80 mb-4 leading-relaxed flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 text-card-foreground hover:bg-accent bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 text-card-foreground hover:bg-accent bg-transparent"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
