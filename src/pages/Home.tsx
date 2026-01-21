import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { useServices, useTestimonials } from "@/hooks/use-content";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  const { data: services, isLoading: isLoadingServices } = useServices();
  const { data: testimonials, isLoading: isLoadingTestimonials } = useTestimonials();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                이로운 이로운
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold font-heading tracking-tight text-foreground mb-6 text-balance">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">황금프러퍼티</span><br></br>
                미래를 설계합니다
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
                여기는 테스트 화면입니다. 이로운 화이팅!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                    이로운 시작하기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="rounded-full px-8 text-base">
                    서비스 둘러보기
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-20 mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-border/50"
          >
            {/* modern office workspace bright clean */}
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="Modern office workspace"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">우리의 전문 분야</h2>
            <p className="text-lg text-muted-foreground">
              비즈니스 운영과 효율성을 확장하기 위해 맞춤화된 포괄적인 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoadingServices ? (
              Array(3).fill(0).map((_, i) => (
                <Card key={i} className="h-64">
                  <CardContent className="pt-6">
                    <Skeleton className="h-12 w-12 rounded-lg mb-4" />
                    <Skeleton className="h-6 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6 mt-2" />
                  </CardContent>
                </Card>
              ))
            ) : (
              services?.slice(0, 3).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))
            )}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="link" className="text-primary font-semibold text-lg">
                전체 서비스 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">함께 성장하는 파트너들</h2>
            <p className="text-lg text-muted-foreground">
              수많은 기업들이 황금프러퍼티와 함께하고 있습니다..
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {isLoadingTestimonials ? (
              Array(3).fill(0).map((_, i) => (
                <Skeleton key={i} className="h-48 w-full rounded-2xl" />
              ))
            ) : (
              testimonials?.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-secondary/10 border-none shadow-none">
                    <CardContent className="pt-6 flex flex-col h-full">
                      <div className="flex gap-1 mb-4 text-amber-400">
                        {Array(5).fill(0).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                      <p className="text-foreground/80 italic mb-6 flex-grow leading-relaxed">"{testimonial.content}"</p>
                      <div className="flex items-center gap-3 mt-auto">
                        <Avatar className="h-10 w-10 border border-border">
                          <AvatarImage src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.clientName)}&background=random`} />
                          <AvatarFallback>{testimonial.clientName[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-sm">{testimonial.clientName}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-6">비즈니스의 변화를 시작할 준비가 되셨나요?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            NexCorp의 기업 솔루션을 통해 혁신을 경험하고 있는 수많은 파트너들과 함께하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="rounded-full px-8 text-base text-primary font-bold">
                문의하기
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                더 알아보기
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
