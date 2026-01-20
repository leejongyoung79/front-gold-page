import { motion } from "framer-motion";
import { useServices } from "@/hooks/use-content";
import { ServiceCard } from "@/components/ServiceCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const { data: services, isLoading } = useServices();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold font-heading mb-6">서비스 안내</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            비즈니스의 성장을 돕기 위해 설계된 포괄적인 디지털 솔루션을 제공합니다.
            맞춤형 개발부터 전략적 컨설팅까지, NexCorp가 함께합니다.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="h-80 bg-muted/20 rounded-xl p-6">
                <Skeleton className="h-12 w-12 rounded-lg mb-6" />
                <Skeleton className="h-8 w-3/4 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))
          ) : (
            services?.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="bg-primary/5 rounded-3xl p-12 text-center border border-primary/10">
          <h2 className="text-3xl font-bold font-heading mb-4">맞춤형 솔루션이 필요하신가요?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            모든 비즈니스는 고유합니다. 우리는 귀하의 특정 요구사항과 도전 과제에 맞춰 서비스를 최적화해 드립니다.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-8">
              프로젝트 상담하기 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
