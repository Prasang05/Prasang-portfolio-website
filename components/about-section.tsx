import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate 2nd-year Electronics & Telecommunication Engineering student at Surodaya College of
              Engineering & Technology, Nagpur. I love combining my knowledge of electronics with modern web development
              to create innovative solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey involves exploring the intersection of hardware and software, building automation systems, and
              developing web applications that solve real-world problems.
            </p>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  <div>
                    <h3 className="font-semibold">Education</h3>
                    <p className="text-sm text-muted-foreground">Electronics & Telecommunication Engineering</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <div>
                    <h3 className="font-semibold">College</h3>
                    <p className="text-sm text-muted-foreground">
                      Surodaya College of Engineering & Technology, Nagpur
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-accent" />
                  <div>
                    <h3 className="font-semibold">Started</h3>
                    <p className="text-sm text-muted-foreground">2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
