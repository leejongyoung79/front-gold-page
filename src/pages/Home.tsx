import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Lightbulb, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const coreValues = [
    {
      icon: Lightbulb,
      title: "혁신",
      description: "최첨단 기술과 창의적 개발 솔루션으로 부동산 개발의 한계를 넘어, 새로운 가치와 가능성을 창출합니다."
    },
    {
      icon: Shield,
      title: "정직",
      description: "투명한 사업 운영과 윤리적 경영, 그리고 고객과 파트너에 대한 변함없는 책임으로 신뢰를 구축합니다."
    },
    {
      icon: Leaf,
      title: "지속가능성",
      description: "현재의 요구를 충족하는 것을 넘어, 미래 세대를 위한 자원 보존까지 고려한 지속가능한 개발 솔루션을 제공합니다."
    }
  ];

  const projects = [
    {
      label: "도시 설계",
      title: "Urban Vision Center",
      gradient: "from-green-400/30 via-yellow-400/20 to-green-500/30",
      labelBg: "bg-blue-600"
    },
    {
      label: "SUSTAINABILITY",
      title: "Green Tech Innovation Hub",
      gradient: "from-orange-400/30 via-amber-400/20 to-orange-500/30",
      labelBg: "bg-green-600"
    },
    {
      label: "INFRASTRUCTURE",
      title: "Skyline Plaza Complex",
      gradient: "from-blue-400/30 via-cyan-400/20 to-blue-500/30",
      labelBg: "bg-blue-600"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-40 overflow-hidden">
        {/* Dark Background with Image Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(2px)"
            }}
          ></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                우리는 미래를 설계합니다
              </h1>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              토지와 공간의 잠재력을 실현하는 개발 기획으로, 미래 세대를 위한 지속 가능한 도시와 자산을 만듭니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-md px-8 text-base">
                    View Portfolio
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="bg-transparent border-gray-300 text-white hover:bg-white/10 rounded-md px-8 text-base">
                    Our Process
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">핵심 가치</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">
            탁월한 개발 역량과 선진적인 공간 기획을 통해 미래 가치를 창출하겠다는 우리의 의지
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-0">Recent Projects</h2>
            <Link href="/services">
              <Button variant="link" className="text-primary font-semibold text-lg p-0">
                Explore all projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-80 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} backdrop-blur-sm`}></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${project.labelBg} mb-3`}>
                    {project.label}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
