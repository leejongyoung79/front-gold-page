import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import type { InsertContactMessage } from "@shared/schema";
import { useContactSubmit } from "@/hooks/use-content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const submitMutation = useContactSubmit();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: InsertContactMessage) {
    submitMutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-amber-50/80 via-yellow-50/60 to-amber-100/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold font-heading mb-6">문의하기</h1>
          <p className="text-xl text-muted-foreground">
            새로운 프로젝트를 구상 중이신가요? 여러분의 이야기를 들려주세요. 24시간 이내에 답변해 드리겠습니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-border/50 shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">본사 위치</h3>
                    <p className="text-muted-foreground">
                      서울특별시 강남구 혁신대로 123<br />
                      넥스빌딩 5층
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">이메일 문의</h3>
                    <p className="text-muted-foreground">
                      hello@nexcorp.com<br />
                      support@nexcorp.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">전화 문의</h3>
                    <p className="text-muted-foreground">
                      02-123-4567<br />
                      평일 오전 9시 - 오후 6시
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 shadow-xl bg-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold font-heading mb-6">메시지 보내기</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>성함</FormLabel>
                            <FormControl>
                              <Input placeholder="홍길동" className="h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>이메일 주소</FormLabel>
                            <FormControl>
                              <Input placeholder="example@email.com" type="email" className="h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>메시지</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="프로젝트에 대해 알려주세요..." 
                              className="min-h-[160px] resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full md:w-auto px-8"
                      disabled={submitMutation.isPending}
                    >
                      {submitMutation.isPending ? "보내는 중..." : "메시지 보내기"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
