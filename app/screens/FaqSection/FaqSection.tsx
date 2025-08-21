"use client"
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

export default function FaqSection  () {
  // FAQ data for mapping
  const faqItems = [
    {
      id: "item-1",
      number: "1.",
      question: "What is Aidy Chatbot?",
      answer:
        "Aidy is an AI-powered chatbot designed to help you achieve your goals and improve your productivity. It offers personalized information, reminders, and encouragement tailored to your specific needs.",
      isOpen: true,
    },
    {
      id: "item-2",
      number: "2.",
      question: "How does Aidy work?",
      answer: "Aidy is an AI-powered assistant designed to streamline customer interactions by providing fast, accurate, and intuitive responses It helps businesses automate support, onboard clients efficiently, and handle complex queries with ease.",
      isOpen: false,
    },
    {
      id: "item-3",
      number: "3.",
      question: "What features does Aidy offer?",
      answer: "Aidy offers fast and accurate AI-driven responses for customer support. It includes seamless onboarding tools, automated query handling, and intelligent interaction management.",
      isOpen: false,
    },
    {
      id: "item-4",
      number: "4.",
      question: "Is my data safe with Aidy?",
      answer: "Yes, Aidy uses advanced encryption to protect your data. It follows strict privacy and compliance standards to ensure your information stays secure. Your data is never shared with unauthorized parties.",
      isOpen: false,
    },
    {
      id: "item-5",
      number: "5.",
      question: "Who can benefit from using Aidy?",
      answer: "Businesses of all sizes looking to enhance customer support can benefit from Aidy.Startups and enterprises can use it to automate onboarding and handle complex queries efficiently.",
      isOpen: false,
    },
    {
      id: "item-6",
      number: "6.",
      question: "Can I Join with my team on Aidy?",
      answer: "Yes, Aidy supports team collaboration by allowing multiple users to manage interactions together.You can assign roles, share access, and track performance across your team.",
      isOpen: false,
    },
  ];

  const [openItem, setOpenItem] = useState("item-1");

  return (
    <section className="relative flex  gap-[75px] max-[1300px]:gap-10 px-[135px] py-[65px] max-[1250px]:flex-col max-[1300px]:px-[100px] max-[1000px]:px-[50px] max-[680px]:px-[25px] max-[680px]:py-[32px] max-[680px]:gap-[32px] max-[680px]:items-center max-[680px]:justify-center max-[1000px]:py-[32px] ">
      {/* Left side - Header card */}
      <Card className="flex w-[100%] max-w-[525px] h-[592px] max-[1250px]:max-w-[100%] max-[1250px]:h-auto flex-col items-center gap-8 max-[1250px]:gap-5 px-[50px] py-[103px] bg-[#18181d] rounded-[36px] max-[500px]:rounded-[20px] border-none max-[1250px]:w-[100%] max-[1250px]:px-[25px] max-[1250px]:py-[50px] max-[767px]:py-[25px]">
        <div className="flex flex-col items-center gap-10 w-full max-[1250px]:gap-5">
          <div className="w-[82.99px] h-[87.13px]   bg-[url(/group.svg)] bg-[100%_100%]" />

          <div className="flex flex-col items-center gap-4 w-full">
            <Badge className="px-6 py-[9px] rounded-[20px] border border-solid border-[#cdff08] shadow-[0px_0px_0px_1px_#ffffff1a] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] bg-transparent">
              <span className="font-medium font-['Inter'] text-[16px] max-[767px]:text-[14px] leading-[120%] text-[#cdff09]">
                FAQs
              </span>
            </Badge>

            <h2 className="font-semibold font-['Inter'] text-[48px] leading-[120%] text-white text-center max-[1100px]:text-[36px]  max-[767px]:text-[28px]">
              Frequently Asked Questions
            </h2>
          </div>
        </div>

        <CardContent className="p-0">
          <p className="w-[425.12px] max-[1250px]:w-[100%] font-regular font-['Inter'] text-[18px] max-[1100px]:text-[16px] leading-[160%] text-white text-center  max-[767px]:text-[14px] max-[1000px]:leading-[130%] max-[680px]:text-[12px]  max-[680px]:w-[100%]">
            Your quick guide to common inquiries and solutions.
          </p>
        </CardContent>
      </Card>

      {/* Right side - FAQ accordion */}
      <div className="flex flex-col gap-[30px] relative w-full max-w-[570px] h-[587px] max-[1250px]:max-w-[100%] max-[1250px]:h-auto">
        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
    
        >
          {faqItems.map((item) => {
            const isOpen = openItem === item.id;
            return (
              <AccordionItem
                key={item.id}
                value={item.id}
                className={
                  isOpen
                    ? "bg-[#cdff09] rounded-3xl shadow-[0px_12px_36px_#e19f6d1f] p-[30px]"
                    : "mb-0"
                }
              >
                <AccordionTrigger className="flex justify-between items-center gap-5 py-0 px-0 [&>svg]:hidden">
                  <div className="flex items-center gap-5 py-4 relative max-[1100px]:w-[100%] max-[500px]:gap-2 max-[340px]:pr-8">
                    <span
                      className={`flex justify-center items-center w-9 h-[43px] max-[500px]:w-5 max-[500px]:h-5 mt-[-1.00px] font-['Inter'] text-[24px] max-[1100px]:text-[18px] underline-none text-center tracking-[0] leading-[130%] whitespace-nowrap ${isOpen ? "font-medium text-[#18181d]" : "font-normal text-white"} max-[1250px]:text-[20px] max-[1250px]:leading-[120%] max-[1000px]:text-[18px] max-[1000px]:leading-[120%] max-[767px]:text-[16px] max-[680px]:leading-[120%] max-[360px]:w-[20px] max-[360px]:h-[30px]`}
                    >
                      {item.number}
                    </span>
                    <h4
                      className={`font-regular  font-['Inter'] text-[24px] leading-[160%] 'bg-[#cdff09]'  ${isOpen ? "text-[#18181d]"  : "text-white"} max-[1300px]:text-[18px] max-[1300px]:leading-[130%] max-[1000px]:text-[18px]  max-[767px]:text-[16px]`}
                    >
                      {item.question}
                    </h4>
                  </div>
                  {/* Icon on the right */}
                  <span className="ml-4 flex items-center absolute right-[30px] max-[500px]:right-[10px]">
                    {isOpen ? (
                             <img src="/minus.svg" alt="" className="max-[480px]:w-[20px] max-[480px]:h-[20px]" />
                    ) : (
                      <img src="/plus.svg" alt="" className="max-[480px]:w-[20px] max-[480px]:h-[20px]" />
                    )}
                  </span>
                </AccordionTrigger>
                {item.answer && (
                  <AccordionContent className="pl-14 pr-0 py-0 max-[767px]:pl-[30px]">
                    <p className="w-[414px] max-[1250px]:w-[100%] mt-[-1.00px] font-regular  font-['Inter'] text-[16px] max-[767px]:text-[14px] max-[500px]:text-[13px] leading-[160%] max-[1000px]:leading-[130%]">
                      {item.answer}
                    </p>
                  </AccordionContent>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};
