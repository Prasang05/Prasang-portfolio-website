import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React.js", icon: "⚛️" },
        { name: "TailwindCSS", icon: "💨" },
      ],
      color: "bg-blue-900/20 dark:bg-blue-950/20 border-blue-700/30 dark:border-blue-800/30",
      headerColor: "text-blue-400 dark:text-blue-400",
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" },
        { name: "MongoDB", icon: "🍃" },
      ],
      color: "bg-green-900/20 dark:bg-green-950/20 border-green-700/30 dark:border-green-800/30",
      headerColor: "text-green-400 dark:text-green-400",
      gradient: "from-green-500/10 to-emerald-500/10",
    },
    {
      title: "Electronics & IoT",
      skills: [
        { name: "Arduino", icon: "🔧" },
        { name: "Basic Electronics", icon: "⚡" },
        { name: "IoT", icon: "📡" },
        { name: "Hardware Integration", icon: "🔌" },
      ],
      color: "bg-purple-900/20 dark:bg-purple-950/20 border-purple-700/30 dark:border-purple-800/30",
      headerColor: "text-purple-400 dark:text-purple-400",
      gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", icon: "🐙" },
        { name: "n8n Automation", icon: "🤖" },
        { name: "MERN Stack", icon: "📚" },
      ],
      color: "bg-orange-900/20 dark:bg-orange-950/20 border-orange-700/30 dark:border-orange-800/30",
      headerColor: "text-orange-400 dark:text-orange-400",
      gradient: "from-orange-500/10 to-red-500/10",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${category.color} relative overflow-hidden group`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <CardContent className="p-6 relative z-10">
                <div className="mb-6">
                  <h3 className={`font-bold text-lg ${category.headerColor} mb-2`}>{category.title}</h3>
                  <div className={`h-1 w-12 bg-gradient-to-r ${category.gradient.replace("/10", "")} rounded-full`} />
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-2 rounded-lg bg-black/10 dark:bg-black/20 hover:bg-black/20 dark:hover:bg-black/40 transition-colors duration-200"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span className="font-medium text-sm text-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8 text-muted-foreground">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              {
                name: "JavaScript",
                icon: "⚡",
                color:
                  "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-900 dark:text-yellow-100 border border-yellow-300 dark:border-yellow-700",
              },
              {
                name: "React",
                icon: "⚛️",
                color:
                  "bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 border border-blue-300 dark:border-blue-700",
              },
              {
                name: "Node.js",
                icon: "🟢",
                color:
                  "bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 border border-green-300 dark:border-green-700",
              },
              {
                name: "MongoDB",
                icon: "🍃",
                color:
                  "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-100 border border-emerald-300 dark:border-emerald-700",
              },
              {
                name: "TailwindCSS",
                icon: "💨",
                color:
                  "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-900 dark:text-cyan-100 border border-cyan-300 dark:border-cyan-700",
              },
              {
                name: "Arduino",
                icon: "🔧",
                color:
                  "bg-orange-100 dark:bg-orange-900/40 text-orange-900 dark:text-orange-100 border border-orange-300 dark:border-orange-700",
              },
              {
                name: "Git",
                icon: "🐙",
                color:
                  "bg-slate-100 dark:bg-slate-800/40 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-600",
              },
              {
                name: "IoT",
                icon: "📡",
                color:
                  "bg-purple-100 dark:bg-purple-900/40 text-purple-900 dark:text-purple-100 border border-purple-300 dark:border-purple-700",
              },
            ].map((tech, index) => (
              <Badge
                key={index}
                className={`px-4 py-2 text-sm font-medium hover:scale-105 transition-transform duration-200 ${tech.color}`}
                variant="outline"
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
