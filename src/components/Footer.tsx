import { Link } from "wouter";
import { Rocket, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border/40 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-heading font-bold text-lg tracking-tight">
                NexCorp
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              현대적인 비즈니스를 위한 최첨단 솔루션으로 미래를 혁신합니다.
              더 나은 가치를 함께 만들어가겠습니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">회사</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  회사 소개
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  우리 팀
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  서비스
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">리소스</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  블로그
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  케이스 스터디
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  고객 지원
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">소셜</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-background p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="bg-background p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="bg-background p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} NexCorp Inc. 모든 권리 보유.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">개인정보처리방침</a>
            <a href="#" className="hover:text-primary">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
