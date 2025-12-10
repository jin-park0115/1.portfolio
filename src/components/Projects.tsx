import { ExternalLink, Github, Folder } from 'lucide-react';

const featuredProjects = [
  {
    title: '투두 앱',
    description: 'React와 TypeScript를 활용한 할 일 관리 애플리케이션입니다. 로컬 스토리지를 활용한 데이터 영속성과 드래그 앤 드롭 기능을 구현했습니다.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'DnD Kit'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: null,
  },
  {
    title: '날씨 대시보드',
    description: '오픈 API를 활용한 날씨 정보 대시보드입니다. 현재 위치 기반 날씨와 5일 예보를 시각화했습니다.',
    tech: ['React', 'Chart.js', 'OpenWeather API', 'Geolocation'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: null,
  },
];

const otherProjects = [
  {
    title: '영화 검색 앱',
    description: 'TMDB API를 활용한 영화 검색 및 즐겨찾기 기능',
    tech: ['React', 'Redux', 'TMDB API'],
    github: 'https://github.com',
  },
  {
    title: '포모도로 타이머',
    description: '생산성 향상을 위한 집중 타이머 애플리케이션',
    tech: ['React', 'CSS Animations'],
    github: 'https://github.com',
  },
  {
    title: '마크다운 에디터',
    description: '실시간 미리보기가 가능한 마크다운 에디터',
    tech: ['React', 'Marked.js', 'LocalStorage'],
    github: 'https://github.com',
  },
  {
    title: '퀴즈 게임',
    description: 'trivia API를 활용한 인터랙티브 퀴즈 게임',
    tech: ['React', 'TypeScript', 'Framer Motion'],
    github: 'https://github.com',
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Projects</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? 'md:text-right' : ''
                }`}
              >
                {/* Project Image */}
                <div
                  className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}
                >
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative aspect-video rounded-xl glass-card overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                        <div className="text-center p-8">
                          <Folder className="w-16 h-16 mx-auto mb-4 text-primary/50" />
                          <p className="font-mono text-muted-foreground text-sm">
                            // 프로젝트 스크린샷
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div
                  className={`md:col-span-5 ${
                    index % 2 === 1 ? 'md:order-1' : ''
                  }`}
                >
                  <span className="font-mono text-primary text-sm">Featured Project</span>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mt-2 mb-4">
                    {project.title}
                  </h3>
                  <div className="glass-card p-6 rounded-lg mb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`flex gap-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
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
            ))
          }
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
