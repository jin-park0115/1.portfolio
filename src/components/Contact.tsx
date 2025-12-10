import { Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background Effect */}
      <div className="absolute left-1/2 bottom-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <span className="font-mono text-primary text-sm">
            04. What's Next?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
            새로운 기회를 찾고 있습니다!
            <br />
            함께 일하고 싶으시다면 언제든지 연락 주세요.
            <br />
          </p>

          {/* Contact Card */}
          <div className="glass-card p-8 rounded-2xl gradient-border mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-primary" />
              <span className="text-foreground font-mono">
                parkjin0115@naver.com
              </span>
            </div>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-200 glow"
            >
              <Send size={18} />
              이메일 보내기
            </a>
          </div>

          {/* Alternative Contact */}
          <p className="text-muted-foreground text-sm">
            또는{" "}
            <a
              href="https://www.linkedin.com/in/%EC%A7%84-%EB%B0%95-b0a491391/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
            으로 연락해 주세요
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
