"use client"

import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold">Prasang Borkute</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <button onClick={() => scrollToSection("about")} className="transition-colors hover:text-accent">
            About
          </button>
          <button onClick={() => scrollToSection("skills")} className="transition-colors hover:text-accent">
            Skills
          </button>
          <button onClick={() => scrollToSection("projects")} className="transition-colors hover:text-accent">
            Projects
          </button>
          <button onClick={() => scrollToSection("contact")} className="transition-colors hover:text-accent">
            Contact
          </button>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}
