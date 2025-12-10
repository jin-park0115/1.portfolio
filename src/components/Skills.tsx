const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 80 },
      { name: "Figma", level: 80 },
      { name: "Vite", level: 75 },
      { name: "REST API", level: 80 },
      { name: "Responsive Design", level: 90 },
    ],
  },
];

const techStack = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Git",
  "Figma",
  "Vite",
  "Zustand",
  "Redux",
  "Axios",
  "Supabase",
  "NCP",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background Effect */}
      <div className="absolute left-0 top-1/2 w-72 h-72 bg-accent/10 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">02.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Skills
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-3 mb-16">
            {techStack.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full glass-card text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200 cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Skill Bars */}
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground text-sm">
                          {skill.name}
                        </span>
                        <span className="font-mono text-primary text-xs">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            background:
                              "linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
