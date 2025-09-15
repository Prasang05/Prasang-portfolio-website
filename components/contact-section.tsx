import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "Prasang05",
      href: "https://github.com/Prasang05",
      type: "link",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Prasang Borkute",
      href: "https://www.linkedin.com/in/prasang-borkute-37488228a",
      type: "link",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "prasangborkute12@gmail.com",
      href: "mailto:prasangborkute12@gmail.com",
      type: "email",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "8668501492",
      href: "tel:8668501492",
      type: "phone",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>

        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground mb-6 text-balance">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and
            innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="text-accent">{contact.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm text-muted-foreground mb-1">{contact.label}</h3>
                    <p className="font-medium">{contact.value}</p>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={contact.href}
                      target={contact.type === "link" ? "_blank" : undefined}
                      rel={contact.type === "link" ? "noopener noreferrer" : undefined}
                    >
                      Connect
                    </a>
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
