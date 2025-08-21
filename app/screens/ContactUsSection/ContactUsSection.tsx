import { ArrowUpIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

export default function ContactUsSection  () {
  // Topics data for the "Let's Talk About" section
  const topics = [
    "Customer Experience",
    "Quality and Trust",
    "Dependable Service",
  ];

  return (
    <section className="flex w-full items-center justify-between  gap-10 px-[135px] py-[65px] max-[1300px]:px-[100px] max-[1000px]:px-[50px] max-[767px]:px-[25px] max-[767px]:py-[40px] max-[767px]:gap-[32px] max-[767px]:items-start max-[767px]:justify-center max-[767px]:flex-col">
      <div className="flex flex-col items-start gap-12 max-[800px]:gap-5">
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-6">
            <Badge className="font-['Inter'] font-medium text-[16px] max-[767px]:text-[14px] leading-[120%] tracking-[0] px-6 py-[9px] rounded-[20px] border border-solid border-[#cdff08] shadow-[0px_0px_0px_1px_#ffffff1a] backdrop-blur-[5px] backdrop-brightness-[100%]  font-medium  text-[#cdff09]">
              Contact Us
            </Badge>

            <div className="flex flex-col items-start gap-4">
              <h2 className="font-['Inter'] font-semibold text-[48px] text-white leading-[120%] tracking-[0] max-[1100px]:text-[36px]  max-[767px]:text-[28px]">
                Get in Touch With Us
              </h2>

              <p className="max-w-[606px] font-['Inter'] font-regular text-[#ebebeb] text-[18px] leading-[160%] tracking-[0] max-[1100px]:text-[16px] max-[1100px]:leading-[120%] max-[767px]:text-[14px] max-[680px]:leading-[120%]">
                We&apos;re here to support you! Feel free to reach out for
                assistance, feedback, or any questions.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 max-[767px]:gap-5">
          <h4 className="font-['Inter'] font-semibold text-[24px] leading-[130%] tracking-[0] text-[#ffffff] max-[1100px]:text-[20px] max-[1100px]:leading-[120%] max-[767px]:text-[18px] max-[680px]:leading-[120%]">
            Let&apos;s Talk About:
          </h4>

          <div className="flex flex-col items-start gap-4">
            {topics.map((topic, index) => (
              <div
                key={`topic-${index}`}
                className="flex items-center justify-center gap-2 pl-2 pr-4 py-2 bg-[#18181d] rounded-[32px]"
              >
                <div className="flex items-center justify-center p-1.5 bg-[#cdff09] rounded-2xl data-[state=open]:rotate-90">
                   <img src="/arrow-right.svg" alt="" className="w-6 h-6 max-[680px]:w-[20px] max-[680px]:h-[20px]" />
                </div>
                <span className="font-['Inter'] font-medium text-[16px] leading-[160%] tracking-[0] text-[#ebebeb]  max-[1100px]:text-[14px] max-[1100px]:leading-[120%] ">
                  {topic}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Card className="bg-[#18181d] rounded-[25px] border border-solid border-[#cdff08] max-[767px]:w-full">
        <CardHeader className="pb-0">
          <CardTitle className="font-['Inter'] font-medium text-[28px] leading-[120%] tracking-[0] text-[#ffffff] max-[1100px]:text-[20px] max-[1100px]:leading-[120%] max-[680px]:text-[18px] max-[680px]:leading-[120%]">
            Get a quote
          </CardTitle>
          <CardDescription className="max-w-[397px] font-['Inter'] font-regular text-[18px] leading-[160%] tracking-[0] text-[#ebebeb]  max-[1100px]:text-[16px] max-[1100px]:leading-[120%] max-[767px]:text-[14px] max-[680px]:leading-[120%]">
            Fill up the form and our Team will get back to you within 24 hours.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-5">
          <Input
            placeholder="Name"
            className="px-5 py-[15px] bg-[#ffffff1a] rounded-xl font-regular text-[#a0a4ad] text-lg max-[767px]:text-[14px] leading-[22px] font-['Inter'] tracking-[0]"
          />
          <Input
            placeholder="Email"
            className="px-5 py-[15px] bg-[#ffffff1a] rounded-xl font-regular text-[#a0a4ad] text-lg max-[767px]:text-[14px] leading-[22px] font-['Inter'] tracking-[0]"
          />
          <Input
            placeholder="Subject"
            className="px-5 py-[15px] bg-[#ffffff1a] rounded-xl font-regular text-[#a0a4ad] text-lg max-[767px]:text-[14px] leading-[22px] font-['Inter'] tracking-[0]"
          />
          <Textarea
            placeholder="Your Message"
            className="px-5 py-[15px] min-h-[95px] bg-[#ffffff1a] rounded-xl font-regular text-[#a0a4ad] text-lg max-[767px]:text-[14px] leading-[22px] font-['Inter'] tracking-[0]"
          />
        </CardContent>
        <CardFooter>
          <Button className="w-[175px] max-[1100px]:w-[150px] h-[52px] max-[1000px]:w-[150px] max-[767px]:w-[120px] max-[1000px]:h-10 cursor-pointer transform transition-transform duration-300 hover:scale-90  px-6 py-[15px] bg-[#cdff09] hover:bg-[#ccff09]/90 rounded-[58px] font-['Inter'] font-medium text-[18px] max-[1100px]:text-[16px] max-[1000px]:text-[16px] max-[767px]:text-[14px] leading-[120%] tracking-[0] text-[#09090f] ">
            Send Message
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};
