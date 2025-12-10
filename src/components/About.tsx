import profileImg from "../assets/증명사진.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">01.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              About Me
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Text Content */}
            <div className="md:col-span-3 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                안녕하세요! 저는{" "}
                <span className="text-primary">프론트엔드 개발</span>에 열정을
                가진 신입 개발자입니다. 사용자 중심의 인터페이스를 만들고, 웹
                기술로 문제를 해결하는 것에 큰 보람을 느낍니다.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                컴퓨터과학과를 전공하며 웹 개발의 매력에 빠졌고, 다양한 개인
                프로젝트와 팀 프로젝트를 통해 실력을 키워왔습니다. 특히{" "}
                <span className="text-primary">React</span>와{" "}
                <span className="text-primary">TypeScript</span>를 활용한 모던
                웹 개발에 집중하고 있습니다.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                새로운 기술을 배우는 것을 좋아합니다. 함께 성장할 수 있는 팀을
                찾고 있습니다.
              </p>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass-card p-4 rounded-lg">
                  <div className="font-mono text-primary text-2xl font-bold">
                    6+
                  </div>
                  <div className="text-muted-foreground text-sm">
                    개인 프로젝트
                  </div>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <div className="font-mono text-primary text-2xl font-bold">
                    3+
                  </div>
                  <div className="text-muted-foreground text-sm">
                    팀 프로젝트
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Image Placeholder */}
            <div className="md:col-span-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
                <div className="relative aspect-square rounded-xl overflow-hidden glass-card">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                        <img src={profileImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
