import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";

export default function CallToActionSection  ()  {
  return (
    <section className="relative w-full bg-[#18181d] overflow-hidden py-[108px] max-[1100px]:py-[60px]   max-[680px]:gap-[32px] max-[680px]:items-center max-[680px]:justify-center max-[680px]:px-[25px]">
      {/* Decorative elements */}
      <div className="absolute w-72 h-[234px] top-[176px] right-[55px] bg-[#cdff091f] rounded-[143.91px/117.23px] blur-[130px] max-[1100px]:w-[50px] max-[1100px]:h-[150px] max-[1000px]:w-[30px] max-[1000px]:h-[100px]  max-[680px]:w-[10px] max-[680px]:h-[50px]" />
      <div className="absolute w-[329px] h-60 top-0 left-[119px] bg-[#cdff090f] rounded-[164.5px/120px] blur-[90px]" />

      <div className="absolute -right-[129px] top-[-115px] w-[444px] h-[525px] max-[1100px]:w-[300px] max-[1100px]:h-[350px] max-[1100px]:-right-[50px]  max-[680px]:w-[100px] max-[680px]:h-[150px]">
        <div className="absolute w-[231px] h-[239px] top-0 left-[119px] rounded-[115.5px/119.5px] border-2 border-solid border-[#ffffff29] max-[1100px]:w-[150px] max-[1100px]:h-[150px] max-[1100px]:left-[100px] max-[1100px]:top-[30px] max-[860px]:w-[100px] max-[860px]:h-[100px] max-[860px]:left-[130px] max-[860px]:top-[50px]  max-[680px]:w-[50px] max-[680px]:h-[50px]" />
        <img
          className="absolute w-[417px] h-[364px] top-0 left-0 max-[1100px]:w-[300px] max-[1100px]:h-[250px] max-[860px]:w-[200px] max-[860px]:h-[200px] max-[860px]:left-[50px]   max-[680px]:w-[100px] max-[680px]:h-[70px]"
          alt="Ellipse"
          src="/ellipse-666.svg"
        />
        <div className="absolute w-[9px] h-[9px] top-[232px] max-[1100px]:top-[175px] max-[1100px]:left-[180px] max-[860px]:top-[145px] left-[231px] bg-[#cdff09] rounded-[4.5px] border border-solid border-[#09090f]" />
      </div>

      <div className="relative mx-auto max-w-[921px] max-[1100px]:max-w-[500px]">

        <div className="flex flex-col items-center gap-12 max-[767px]:gap-[30px]">
          <div className="flex flex-col items-center gap-6">
            <h2 className="w-full max-w-[555px] font-semibold font-['Inter'] text-white text-center text-[48px] leading-[120%]  max-[1100px]:text-[36px] max-[1100px]:leading-[120%] max-[767px]:text-[28px] max-[1000px]:leading-[120%]">
              Experience the Future of AI With Aidy
            </h2>
            <p className="font-regular font-['Inter'] text-center text-[18px] leading-[160%] text-[#ebebeb] tracking-[0] max-[1100px]:text-[16px] max-[1100px]:leading-[130%] max-[767px]:text-[14px]  ">
              Join millions and upgrade to Aidy today to feel the difference!
            </p>
          </div>

          <div className="flex items-start gap-4 max-[365px]:flex-col max-[365px]:gap-[12px] max-[365px]:items-center max-[365px]:justify-center max-[365px]:w-[100%]">
            <Button className="w-[174px] h-[52] max-[767px]:w-[140px] max-[767px]:h-10 cursor-pointer transform transition-transform duration-300 hover:scale-90  max-[365px]:w-full px-6 py-[15px] bg-[#cdff09] hover:bg-[#ccff09]/90 rounded-[58px]  ">
              <span className="font-medium font-['Inter'] text-[16px] leading-[120%] max-[767px]:text-[14px]">
                Get Started
              </span>
              <img src='/arrow.svg' className="ml-2 w-4 h-4" />
            </Button>

            <Button
              
              className="w-[189px] h-[52] max-[767px]:w-[140px] max-[767px]:h-10 cursor-pointer transform transition-transform duration-300 hover:scale-90  max-[365px]:w-full px-6 py-[15px] rounded-[58px] border-[1.5px] border-solid border-[#eaeaea] hover:bg-[#eaeaea]/20"
            >
              <span className="font-medium font-['Inter'] text-[16px] leading-[120%] max-[767px]:text-[14px] text-white">
                Request a Demo
              </span>
            </Button>
          </div>
        </div>
      </div>

      <img
          className="absolute w-[230px] h-56 top-[135px] left-[76px] max-[1100px]:w-[150px] max-[1100px]:h-[150px] max-[1100px]:left-[50px] max-[1000px]:w-[100px] max-[1000px]:h-[100px] max-[800px]:left-[50px] max-[800px]:top-[150px] max-[480px]:left-[150px] max-[480px]:top-[200px] max-[365px]:top-[300px] max-[767px]:z-0"
          alt="Polygon"
          src="/polygon-3.svg"
        />
    </section>
  );
};
