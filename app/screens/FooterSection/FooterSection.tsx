import React from "react";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export default function FooterSection  () {
  // Footer navigation links data
  const footerLinks = [
    {
      title: "Pages",
      links: [
        { name: "About", id: "about" },
        { name: "Team", id: "team" },
        { name: "Pricing", id: "pricing" },
        { name: "Blog", id: "blog" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", id: "contact" },
        { name: "Discord", id: "" }, // External or to be added later
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Telegram", id: "" },
        { name: "Skool", id: "" },
        { name: "Referrals", id: "" },
      ],
    },
  ];
  

  return (
    <footer className="flex flex-col items-center gap-16 max-[1000px]:gap-10 pt-20 max-[1000px]:pt-[60px] max-[767px]:pt-10 pb-0 px-[25px] bg-[#18181d] w-full max-[1300px]:px-[100px] max-[1000px]:px-[50px] max-[680px]:px-[25px] max-[550px]:gap-[20px] max-[550px]:pt-[32px]">
      <div className="flex flex-col w-full max-w-[1170px] items-start gap-14 max-[1000px]:gap-10 max-[550px]:gap-[20px]">
        {/* Logo and Social Media Icons */}
        <div className="flex items-center justify-between relative w-full  max-[550px]:flex-col max-[550px]:gap-[20px]">
          <div className="inline-flex items-center w-[133px] h-[42px]">
               <img src="/logo.png" className="w-full h-full object-cover" alt="" />
          </div>

          <div className="inline-flex items-center gap-5">
            <img
              className="w-6 h-6 cursor-pointer transform transition-transform duration-300 hover:scale-90 "
              alt="Social media icon"
              src="/frame-2.svg"
            />
            <img className="w-6 h-6 cursor-pointer transform transition-transform duration-300 hover:scale-90 " alt="Social media icon" src="/frame.svg" />
            <img
              className="w-6 h-6 cursor-pointer transform transition-transform duration-300 hover:scale-90 "
              alt="Social media icon"
              src="/frame-1.svg"
            />
            <img
              className="w-6 h-6 cursor-pointer transform transition-transform duration-300 hover:scale-90 "
              alt="Social media icon"
              src="/frame-3.svg"
            />
          </div>
        </div>

        <Separator className="w-full bg-white/10" />

        {/* Footer Links and Newsletter */}
        <div className="flex flex-wrap items-start justify-between w-full gap-8  max-[767px]:gap-[20px]">
          {/* Navigation Links */}
          {footerLinks.map((section, index) => (
            <div
              key={`footer-section-${index}`}
              className="flex flex-col items-start gap-6 max-[767px]:gap-3"
            >
              <h3 className="font-semibold font-['Inter'] text-[18px] max-[1100px]:text-[16px] max-[767px]:text-[14px] max-[1000px]:text-[16px] leading-[160%] text-white whitespace-nowrap max-[550px]:text-[16px] max-[1000px]:leading-[130%]">
                {section.title}
              </h3>
              <nav className="flex flex-col items-start gap-[15px]">
              {section.links.map((link, linkIndex) => (
                        <a
                          key={`${section.title}-link-${linkIndex}`}
                          href={link.id ? `#${link.id}` : "#"}
                          className="font-regular font-['Inter'] text-[18px] max-[1100px]:text-[16px] max-[767px]:text-[14px] max-[1000px]:text-[16px] leading-[160%] text-[#ebebeb] whitespace-nowrap hover:text-white transition-colors max-[550px]:text-[14px] max-[1000px]:leading-[130%]"
                        >
                          {link.name}
                        </a>
                      ))}

              </nav>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="flex flex-col items-start gap-6 max-[767px]:gap-3">
            <h3 className="font-semibold font-['Inter'] text-[18px] max-[1100px]:text-[16px] max-[767px]:text-[14px] max-[1000px]:text-[16px] text-white leading-[160%] whitespace-nowrap max-[550px]:text-[16px] max-[1000px]:leading-[130%]">
              Newsletter
            </h3>
            <div className="flex flex-col items-start gap-5">
              <p className="w-[270px] font-regular font-['Inter'] text-[18px] max-[1100px]:text-[16px]  max-[767px]:text-[14px] max-[1000px]:text-[16px] text-[#ebebeb] leading-[160%] max-[550px]:text-[14px] max-[1000px]:leading-[130%]">
                Join our newsletter for exclusive updates and insights.
              </p>
              <div className="flex w-[270px] items-center gap-2 bg-[#ffffff1a] rounded-[1000px] p-1">
                <Input
                  className="flex-1 border-0 outline-none bg-transparent  text-[#a0a0ad] font-regular font-['Inter'] text-[18px] max-[1100px]:text-[16px] max-[767px]:text-[14px]  leading-[160%] placeholder:text-[#a0a0ad] focus-visible:ring-0 focus-visible:ring-offset-0 focus:shadow-none shadow-none  max-[550px]:text-[14px] max-[550px]:leading-[120%]"
                  placeholder="Enter your email"
                />
                <Button
                  size="icon"
                  className="bg-[#cdff09] hover:bg-[#cdff09]/90 rounded-full h-10 w-10 p-0 max-[550px]:h-[28px] max-[550px]:w-[28px] cursor-pointer transform transition-transform duration-300 hover:scale-90 "
                >
                   <ArrowRightIcon className="ml-2 h-4 w-4 text-black" />
                </Button>
              </div>
            </div>
          </div>
        </div>
         
        <Separator className="w-full bg-white/10 " />
      </div>

      {/* Copyright Section */}
     
      <div className="flex flex-col items-center gap-10 pt-0 pb-[60px] max-[767px]:pb-10  px-[135px] w-full max-[1100px]:px-[100px] max-[1000px]:px-[50px] max-[680px]:px-[25px] max-[767px]:gap-[20px] max-[767px]:pb-[32px]">
        <p className="text-[#ebebeb] font-['Inter'] text-center font-medium text-[18px] max-[1100px]:text-[16px] max-[1000px]:text-[16px] leading-[160%] max-[767px]:text-[14px] max-[1000px]:leading-[130%]">
          © 2024 — All Right Reserved, Built by Grooic
        </p>
      </div>
    </footer>
  );
};
