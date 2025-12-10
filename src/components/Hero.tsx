import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-slow animation-delay-200" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">
              프론트엔드 개발자를 꿈꾸는
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up animation-delay-200">
            <span className="text-foreground">안녕하세요,</span>
            <br />
            <span className="gradient-text">홍길동</span>
            <span className="text-foreground">입니다</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up animation-delay-400">
            사용자 경험을 최우선으로 생각하는 <span className="text-primary">프론트엔드 개발자</span>입니다.
            <br className="hidden md:block" />
            깔끔한 코드와 아름다운 인터페이스를 만들어갑니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up animation-delay-600">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-200 glow"
            >
              프로젝트 보기
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-all duration-200"
            >
              연락하기
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-fade-in animation-delay-600">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
