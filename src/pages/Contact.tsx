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
  // 1. form 선언은 딱 한 번만!
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. 그 다음 onSubmit 함수
  async function onSubmit(data: InsertContactMessage) {
    try {
      const response = await fetch("https://formspree.io/f/xlgjjvql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.");
        form.reset(); 
      } else {
        const errorData = await response.json();
        alert("전송 실패: " + (errorData.error || "다시 시도해주세요."));
      }
    } catch (error) {
      alert("네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.");
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <div className="text-xl text-gray-600">
          새로운 개발 프로젝트를 계획하고 계신가요?<br />
          프로젝트의 개요와 목표를 알려주시면, 24시간 이내에 검토 후 신속히 연락드리겠습니다.
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
          <Card className="border border-gray-200 shadow-sm">
  <CardContent className="pt-6">
    <div className="flex items-start gap-4">
      <div className="bg-blue-50 p-3 rounded-lg">
        <MapPin className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1 text-gray-900">본사</h3>
        <a 
          href="https://www.google.com/maps/search/?api=1&query=대구광역시+서구+달서로7길" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 block hover:text-blue-600 hover:underline transition-all"
        >
          대구광역시 서구 달서로 7길 14
        </a>
      </div>
    </div>
  </CardContent>
</Card>

            <Card className="border border-gray-200 shadow-sm">
  <CardContent className="pt-6">
    <div className="flex items-start gap-4">
      <div className="bg-blue-50 p-3 rounded-lg">
        <Mail className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1 text-gray-900">Email</h3>
        <div className="text-gray-600 space-y-1">
          {/* 첫 번째 이메일 */}
          <a 
            href="mailto:zeiss1001@hanmail.net" 
            className="block hover:text-blue-600 hover:underline transition-all"
          >
            zeiss1001@hanmail.net
          </a>
          {/* 두 번째 이메일 */}
          <a 
            href="mailto:motoz3@naver.com" 
            className="block hover:text-blue-600 hover:underline transition-all"
          >
            motoz3@naver.com
          </a>
        </div>
      </div>
    </div>
  </CardContent>
</Card>

            <Card className="border border-gray-200 shadow-sm">
  <CardContent className="pt-6">
    <div className="flex items-start gap-4">
      <div className="bg-blue-50 p-3 rounded-lg">
        <Phone className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1 text-gray-900">Phone</h3>
        <div className="text-gray-600 space-y-1">
          {/* 첫 번째 번호 */}
          <a href="tel:01074438888" className="block hover:text-blue-600 hover:underline transition-all">
            010-7443-8888
          </a>
          {/* 두 번째 번호 */}
          <a href="tel:01025247407" className="block hover:text-blue-600 hover:underline transition-all">
            010-2524-7407
          </a>
        </div>
      </div>
    </div>
  </CardContent>
</Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border border-gray-200 shadow-lg bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900">Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="h-12 border-gray-300" {...field} />
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
                            <FormLabel className="text-gray-900">Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="example@email.com" type="email" className="h-12 border-gray-300" {...field} />
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
                          <FormLabel className="text-gray-900">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project..." 
                              className="min-h-[160px] resize-none border-gray-300" 
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
  className="w-full md:w-auto px-8 bg-primary hover:bg-primary/90 text-white rounded-md"
  // isLoading 상태를 따로 만들지 않았다면 일단 비활성화 로직을 제거하거나 
  // form.formState.isSubmitting를 사용하면 편리합니다.
  disabled={form.formState.isSubmitting}
>
  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
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
