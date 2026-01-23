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
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">사업 영역</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
          개발 및 디벨로퍼 비즈니스 성장을 지원하는 종합 디지털 솔루션을 제공합니다. 맞춤형 시스템 구축부터 전략 컨설팅까지  황금프로퍼티는 전 과정에서 파트너로 함께합니다.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="h-80 bg-gray-50 rounded-lg p-6 border border-gray-200">
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
        <div className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-200 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">맞춤형 솔루션이 필요하신가요?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          귀사만을 위한 맞춤 전략, 맞춤 솔루션.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-md px-8">
              Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
