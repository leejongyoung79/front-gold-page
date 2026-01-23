import { motion } from "framer-motion";
import { useTeam } from "@/hooks/use-content";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {
  const { data: team, isLoading } = useTeam();

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">About 황금프로퍼티</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
          우리는 기술을 통해 개발 사업과 기업의 성장, 운영 효율, 지속가능한 가치 창출을 실현하는 것을 미션으로 합니다.
          복잡한 기술 환경과 비즈니스 요구를 연결하여, 강력하면서도 직관적이고 사용자 친화적인 솔루션을 제공합니다.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20 mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">경영 이념</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              우리는 복잡한 기술과 비즈니스 요구 사항을 연결하는 가교 역할을 수행합니다. 
              단순히 고성능 기술을 제공하는 것을 넘어, 직관적이고 쾌적한 사용자 경험을 제공하는 솔루션을 구현하는 것을 목표로 합니다.
              </p>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">경영 비전</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
              우리는 모든 규모의 기업과 프로젝트가 디지털 혁신을 쉽고 원활하게 활용할 수 있는 세상을 지향합니다.
              기술이 인간을 대체하는 것이 아니라, 인간의 잠재력을 극대화하는 미래를 만들어가고자 합니다..
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Team collaboration"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          당사의 성공을 견인하는 핵심 인재 그룹입니다.
          각 분야의 전문 역량을 결합해 복잡한 사업 및 기술 과제를 해결합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {isLoading ? (
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <Skeleton className="h-32 w-32 rounded-full mb-4" />
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
                className="flex flex-col items-center text-center"
              >
                <Avatar className="h-32 w-32 border-4 border-white shadow-lg mb-4">
                  <AvatarImage src={member.imageUrl} className="object-cover" />
                  <AvatarFallback className="text-xl bg-primary text-white">{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </motion.div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
