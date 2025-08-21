'use client'
import { ArrowRightIcon, ChevronDownIcon, Menu as MenuIcon, X as XIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import Link from "next/link";

export default function HeroSection  () {
  const [menuOpen, setMenuOpen] = useState(false);
  const [City, setToCity] = useState("Pages");
  const navItems = [
    { name: "Home",  id:'' , hasDropdown: false },
    { name: "Pages", id:'' , hasDropdown: true },
    { name: "Pricing", id:'pricing' , hasDropdown: false },
    { name: "Contact Us", id:'contact' , hasDropdown: false },
  ];

  const CustomDropdown = ({
    options,
    selected,
    setSelected,
  }: {
    options: { label: string; id: string }[];
    selected: string;
    setSelected: (value: string) => void;
  }) => {
    const [open, setOpen] = useState(false);
  
    const handleSelect = (option: { label: string; id: string }) => {
      setSelected(option.label);
      setOpen(false);
  
      // Scroll to the section
      if (option.id) {
        const element = document.getElementById(option.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
  
    return (
      <div className="relative w-full max-w-[81px] z-20">
        <div
          onClick={() => setOpen(!open)}
          className="z-10 bg-transparent font-['Inter'] font-medium text-white text-[18px] leading-[120%] border-none rounded-[10px] py-1 cursor-pointer flex justify-between items-center gap-[10px]"
        >
          <span>{selected}</span>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {open && (
          <ul className="absolute top-full mt-1 w-full bg-[#09090f] rounded-[10px] shadow z-40">
            {options.map((option) => (
              <li
                key={option.label}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 text-white cursor-pointer hover:bg-white/10 font-['Inter'] font-medium text-[16px] leading-[120%]"
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  



  return (
      <section className="w-full h-[1600px] max-[1100px]:h-[1150px] max-[860px]:h-[1050px] max-[767px]:h-[800px] max-[560px]:h-[700px] max-[500px]:h-[600px] max-[365px]:h-[550px] relative">
                  <div className="absolute w-[369px] h-[607px] top-[130px] -left-[210px] bg-[#ccff09] rounded-[184.71px/303.48px] rotate-[-27.23deg] blur-[170px] opacity-20" />
                  <div className="absolute w-[326px] h-[535px] top-[151px] -right-[100px] bg-[#ccff09] rounded-[162.86px/267.59px] rotate-[-29.58deg] blur-[170px] opacity-25" />
                  <img className="w-[416px] h-[778px] absolute top-[932px] right-0 max-[1249px]:w-[300px] max-[1249px]:h-[500px] max-[860px]:h-[400px] max-[1249px]:top-[700px] max-[800px]:top-[600px] max-[767px]:top-[450px] max-[767px]:h-[400px] max-[560px]:w-[200px] max-[560px]:h-[250px] max-[500px]:w-[100px] max-[500px]:h-[150px] max-[500px]:hidden  max-[1249px]:right-[0px]" alt="Ellipse" src="/ellipse-136.svg"
        />


     <div className="relative w-full h-[645px] max-[1100px]:h-[520px] max-[860px]:h-[440px] overflow-hidden max-[767px]:h-[330px]">
        <div className="relative w-full h-full">
              <img className="absolute w-full h-[645px] top-0 left-0 object-cover" alt="Vector background" src="/check-lines.png"/>

        {/* Decorative blurred elements */}

        {/* Navigation bar */}
        <header className="absolute top-0 left-0 w-full flex items-center justify-between px-[135px] py-[25px] z-10  max-[1300px]:px-[100px] max-[1100px]:px-[50px] max-[767px]:px-[25px]">
          <div className="flex items-center w-[119.5px] h-[38px] max-[850px]:w-[80px] max-[850px]:h-[30px]">
            <img src="/logo.png" className="h-full w-full object-contain" alt="Logo" />
          </div>

          {/* Desktop Navigation links */}
          <div className=" min-[851px]:block max-[880px]:hidden">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-[50px] max-[1100px]:gap-[30px]">
              {navItems.map((item, index) => (
  <NavigationMenuItem key={index}>
    {item.name === "Pages" ? (
      <CustomDropdown
      options={[
        { label: "About", id: "about" },
        { label: "Team", id: "team" },
        { label: "Pricing", id: "pricing" },
        { label: "Blogs", id: "blog" }
      ]}
      selected={City}
      setSelected={setToCity}
    />
    
    ) : (
      <NavigationMenuLink asChild>
        <Link
          href={item.id ? `#${item.id}` : "#"}
          scroll={true}
          className="flex items-center gap-2.5 font-['Inter'] text-[18px] max-[1100px]:text-[16px] font-medium text-white cursor-pointer"
        >
          {item.name}
        </Link>
      </NavigationMenuLink>
    )}
  </NavigationMenuItem>
))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA Button */}
          <div className=" min-[851px]:block max-[880px]:hidden ">
            <Button className="w-[174px] h-[52px] z-10 cursor-pointer transform transition-transform duration-300 hover:scale-90  px-6 py-[15px] bg-[#cdff08] hover:bg-[#cdff08]/90 font-['Inter'] font-medium text-[18px] leading-[120%] max-[1100x]:text-[16px] max-[767px]:text-[14px] rounded-[58px] ">
              Get Started
              <img src='/arrow.svg' className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Hamburger Icon for mobile */}
          <button
            className="z-11 block min-[851px]:hidden text-white focus:outline-none z-20 "
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </button>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="fixed top-[70px] right-0 w-[250px] h-[300px] rounded-[15px] bg-black bg-opacity-80 flex flex-col items-center justify-center gap-8 min-[851px]:hidden z-10">
              <nav className="flex flex-col items-center gap-5">
              {navItems.map((item, index) => (
  <NavigationMenuItem key={index}>
    {item.name === "Pages" ? (
      <CustomDropdown
        options={[
          { label: "About", id: "about" },
          { label: "Team", id: "team" },
          { label: "Pricing", id: "pricing" },
          { label: "Blogs", id: "blog" }
        ]}
        selected={City}
        setSelected={setToCity}
      />
    ) : (
      <NavigationMenuLink asChild>
        <Link
          href={item.id ? `#${item.id}` : "#"}
          scroll={true}
          className="flex items-center gap-2.5 font-['Inter'] text-[18px] max-[1100px]:text-[16px] font-medium text-white cursor-pointer"
        >
          {item.name}
        </Link>
      </NavigationMenuLink>
    )}
  </NavigationMenuItem>
))}


              </nav>
              <Button className=" px-6 py-[15px] bg-[#cdff08] rounded-[58px] text-neutral-05 font-big-buttton-2 w-40">
                Get Starte
                <img src='/arrow.svg' className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}
        </header>

        {/* Hero content */}
        <div className="flex flex-col items-center gap-14 max-[860px]:gap-9 absolute top-[185px] max-[1100px]:top-[150px] max-[860px]:top-[120px] max-[767px]:top-[90px] left-1/2 transform -translate-x-1/2 w-[873px] max-[1100px]:w-[700px] max-[1000px]:w-[600px] max-[570px]:w-[100%] max-[767px]:gap-5 max-[767px]:px-[25px]">
          <div className="flex flex-col items-center gap-8 w-full max-[860px]:gap-5">
            <h1 className=" text-white text-center text-[74px] leading-[110.001%] font-bold max-[1100px]:text-[54px] max-[1100px]:leading-[100%] max-[1000px]:text-[44px] max-[767px]:text-[36px] max-[500px]:text-[28px] ">
              The Future of <br className="max-[360px]:hidden" />
              The Next-Gen Chatbot
            </h1>

            <p className="font-['Inter'] text-white text-center text-[16px] font-normal leading-[160%] max-[850px]:leading-[100%] tracking-[0] max-[1000px]:text-[14px]  ">
              Meet Aidy, the next-gen AI chatbot designed to enhance
              conversations with intuitive responses, seamless integration, and
              powerful automation.
            </p>
          </div>

          <div className="flex items-center gap-4 max-[365px]:w-[100%] max-[365px]:flex-col max-[365px]:gap-2">
            <Button className="z-11 cursor-pointer transform transition-transform duration-300 hover:scale-90  w-[174px] h-[52px] max-[365px]:w-[100%]  max-[365px]:h-10 px-6 py-[15px] bg-[#ccff09] hover:bg-[#ccff09]/90 text-[18px] max-[1100px]:text-[16px] max-[767px]:text-[14px] max-[500px]:leading-[100%]  font-medium font-['Inter']  leading-[120%] tracking-[0] rounded-[58px] text-[#09090f] font-big-buttton-2 max-[680px]:w-full">
              Get Started
              <img src='/arrow.svg' className="ml-2 w-4 h-4" />
            </Button>

            <Button
             
              className="z-11 cursor-pointer transform transition-transform duration-300 hover:scale-90  w-[189px] h-[52px] max-[365px]:w-[100%] max-[365px]:h-10 text-[18px] max-[1100px]:text-[16px] leading-[120%] max-[767px]:text-[14px] max-[500px]:leading-[100%] tracking-[0] font-['Inter] font-medium px-6 py-[15px] rounded-[58px] border-[1.5px] border-[#eaeaea] hover:bg-[#eaeaea]/20 text-[#ebebeb] font-big-buttton-2 max-[680px]:w-full"
            >
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
               </div>

               <div className="absolute z-0 top-[630px] max-[1100px]:top-[380px] max-[860px]:top-[270px] max-[840px]:top-[220px] max-[767px]:top-[150px] max-[560px]:top-[80px] max-[500px]:top-[30px] max-[380px]:top-[10px] max-[365px]:top-5 max-[340px]:top-[10px]   left-1/2 -translate-x-1/2 w-full max-w-[1170px] h-[825px]  max-[1100px]:px-[100px] max-[1000px]:px-[50px] max-[767px]:px-[25px]">
                    <img src="/dash-1.svg" className="w-full h-full object-contain" alt="" />
               </div>
      </section>
  );
};
