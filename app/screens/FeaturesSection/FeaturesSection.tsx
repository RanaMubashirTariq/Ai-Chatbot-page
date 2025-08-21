import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export default function FeaturesSection  () {


  return (
    <section className="flex flex-col  gap-14 max-[767px]:gap-8 w-full items-center   px-[135px] py-[65px] max-[1300px]:px-[100px] max-[1300px]:py-[50px] max-[1000px]:px-[50px] max-[767px]:px-[25px] max-[1000px]:py-[40px]">
      <div className="flex flex-col items-center gap-4">
        <Badge className="px-6 py-[9px] rounded-[20px] border border-solid border-[#cdff08] shadow-[0px_0px_0px_1px_#ffffff1a] backdrop-blur-[5px] bg-transparent text-[#cdff09] font-medium-button text-base max-[767px]:text-[14px]">
          Feature
        </Badge>

        <h2 className="font-heading-h2 text-[#ffffff] text-[48px] max-[1100px]:text-[36px] text-center leading-[120%] max-w-[597px] max-[767px]:text-[28px] max-[767px]:leading-[100%]">
          Dynamic Features of Our AI Chatbot
        </h2>
      </div>
             <div className="flex items-center justify-between gap-[30px] w-full max-[500px]:flex-col max-[500px]:gap-5 ">
                   <div className="w-full max-w-[570px] h-auto">
                        <img src="featuresSection-left.png" className="w-full h-full object-contain cursor-zoom-in" alt="" />
                   </div>

                   <div className="w-full max-w-[570px] h-auto">
                        <img src="featuresSection-right.png" className="w-full h-full object-contain cursor-zoom-in" alt="" />
                   </div>
             </div>
    </section>
  );
};
