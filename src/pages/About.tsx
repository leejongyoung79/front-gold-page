import { motion } from "framer-motion";
import { useTeam } from "@/hooks/use-content";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {
  const { data: team, isLoading } = useTeam();

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold font-heading mb-6">황금프로퍼티 소개</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            이로운 이로운 이로운
            우리의 사명은 기업들이 성장, 효율성, 그리고 지속 가능성을 견인하는 기술을 통해 도약할 수 있도록 돕는 것입니다.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary/30 py-20 mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold font-heading mb-6">우리의 사명</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                복잡한 기술과 비즈니스 요구사항 사이의 가교 역할을 하는 것입니다. 
                우리는 단순한 고성능 기술을 넘어, 직관적이고 즐거운 경험을 제공하는 솔루션을 만드는 것을 목표로 합니다.
              </p>
              
              <h2 className="text-3xl font-bold font-heading mb-6">우리의 비전</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                디지털 혁신이 모든 규모의 기업에게 쉽고 원활하게 이루어지는 세상을 꿈꿉니다.
                우리는 기술이 인간을 대체하는 것이 아니라, 인간의 잠재력을 극대화하는 미래를 그려 나갑니다.
              </p>
            </div>
            <div className="order-1 md:order-2">
              {/* team meeting modern office collaboration */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">우리 팀을 만나보세요</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            성공 뒤에 있는 뛰어난 인재들을 소개합니다. 우리는 다양한 전문성을 결합하여 복잡한 문제들을 해결합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading ? (
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <Skeleton className="h-40 w-40 rounded-full mb-4" />
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))
          ) : (
            team?.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Avatar className="h-40 w-40 border-4 border-background shadow-xl">
                    <AvatarImage src={member.imageUrl} className="object-cover" />
                    <AvatarFallback className="text-2xl">{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
