import { ExternalLink, Github, Folder } from "lucide-react";
import smartbuyImg from "../assets/smart-buy.png";
import jejaImg from "../assets/jejaYouth.png";
const featuredProjects = [
  {
    title: "Smart Buy",
    description:
      "팀은 2명으로 구성되었습니다, React와 TypeScript, Nest.JS를 활용한, AI 상품분석 애플리케이션입니다. 상품검색, 비교 등의 핵심 기능을 구현했습니다.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Nest",
      "Postgres",
      "HyperClovaX",
      "n8n",
    ],
    github: "https://github.com/jin-park0115/smatybuy",
    live: "https://blog.naver.com/jeanpark0115/224027124839",
    image: `${smartbuyImg}`,
  },
  {
    title: "Jeja Youth",
    description:
      "SupaBase를 활용한 제자광성교회 청년들의 영성 체크리스트입니다. 일주일 체크리스트를 시각화했습니다.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Supabase"],
    github: "https://github.com/jin-park0115/JejaYuth",
    live: "https://blog.naver.com/jeanpark0115/224055565034",
    image: `${jejaImg}`,
  },
];

const otherProjects = [
  {
    title: "MoodYunes",
    description: "AI를 활용한 노래 추천 웹사이트",
    tech: ["React", "Python", "Tailwind CSS"],
    github: "https://github.com/Kosa-ncp/ncp-dj",
  },
  {
    title: "투두",
    description: "Next.JS 활용한 투두리스트",
    tech: ["Next.JS", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/jin-park0115/nextjs-todo",
  },
  {
    title: "Trip Talk",
    description: "여행 SNS",
    tech: ["React", "TypeScript", "Redux", "Styled-Components", "Axios"],
    github: "https://github.com/triptalk-4/triptalk-frontend",
  },
  {
    title: "영화 검색 앱",
    description: "TMDB API를 활용한 영화 검색 및 즐겨찾기 기능",
    tech: ["React", "Redux", "TMDB API", "Styled-Components", "firebase"],
    github: "https://github.com/jin-park0115/film",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background Effect */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">03.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Projects
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`md:col-span-7 ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative aspect-video rounded-xl glass-card overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                        <div className="text-center p-8">
                          <img src={project.image} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div
                  className={`md:col-span-5 ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <span className="font-mono text-primary text-sm">
                    Featured Project
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mt-2 mb-4">
                    {project.title}
                  </h3>
                  <div className="glass-card p-6 rounded-lg mb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div
                    className={`flex flex-wrap gap-2 mb-4 ${
                      index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`flex gap-4 ${
                      index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <h3 className="text-xl font-bold text-foreground text-center mb-8">
            Other Noteworthy Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="glass-card p-6 rounded-xl hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
                <h4 className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
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

export default Projects;
