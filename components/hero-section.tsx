"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent/30 to-secondary/20 flex items-center justify-center border-2 border-accent/20">
            <span className="text-4xl font-bold text-accent">PB</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            Hi, I'm <span className="text-accent">Prasang Borkute</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
            2nd-year ETC Engineering student passionate about web development and electronics
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button onClick={scrollToContact} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" asChild className="border-accent/30 hover:bg-accent/10 bg-transparent">
            <a href="https://github.com/Prasang05" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Prasang05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/prasang-borkute-37488228a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:prasangborkute12@gmail.com"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a href="tel:8668501492" className="text-muted-foreground hover:text-accent transition-colors">
            <Phone className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
