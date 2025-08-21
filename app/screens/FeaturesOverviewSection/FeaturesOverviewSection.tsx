import React from "react";
import { Badge } from "../../components/ui/badge";
import { Card } from "../../components/ui/card";

export default function FeaturesOverviewSection  () {
  const featureItems = [
    {
      text: "Multi-Language Support",
    },
    {
      text: "Code Optimization and Refactoring",
    },
    {
      text: "Code Testing and Validation",
    },
  ];

  return (
    <section className="flex items-center justify-between w-full py-16 px-[135px] gap-16 max-[1300px]:px-[100px] max-[1100px]:py-8 max-[1000px]:px-[50px] max-[680px]:px-[25px]  max-[1000px]:gap-8 max-[1000px]:flex-col max-[1000px]:items-start max-[1000px]:-mt-[30px] max-[767px]:-mt-[60px] max-[600px]:-mt-[100px]  max-[500px]:-mt-[50px]">
      <div className="flex flex-col items-start gap-12 max-[1300px]:gap-6">
        <div className="flex flex-col items-start gap-8 max-[1300px]:gap-6">
          <div className="flex flex-col items-start gap-6 max-[767px]:gap-4">
            <div className="flex flex-col items-start gap-4 ">
              <Badge className="px-6 py-2 rounded-[20px] bg-transparent border border-solid border-[#cdff08] shadow-[0px_0px_0px_1px_#ffffff1a] backdrop-blur-[5px] font-medium text-[#ccff09] leading-[120%] text-[16px] max-[767px]:text-[14px] max-[365px]:text-[12px] max-[767px]:leading-[100%] font-['Inter'] ">
                Feature
              </Badge>

              <h2 className="font-['Inter'] font-semibold text-[48px] leading-[120%]  text-[#ffffff]  max-w-[500px] max-[1000px]:max-w-[100%] max-[1100px]:text-[36px] max-[767px]:text-[28px] max-[767px]:leading-[100%]">
                Clean and Efficient Code Generation
              </h2>
            </div>

            <p className="max-w-[500px] max-[1000px]:max-w-[100%]  font-['Inter'] text-[18px] text-[#ebebeb] font-regular leading-[160%] max-[1100px]:text-[16px] max-[767px]:text-[14px] max-[767px]:leading-[100%] max-[365px]:text-[12px]">
              Boost your development speed with Aidy&#39;s clean and efficient
              code generation.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[307px] items-start gap-6 max-[500px]:gap-3">
          {featureItems.map((item, index) => (
            <div key={index} className="flex gap-3 w-full items-center">
              <div className="flex-shrink-0 w-6 h-6 max-[365px]:h-4 max-[365px]:w-4">
                <img className="w-6 h-6 max-[365px]:h-4 max-[365px]:w-4" alt="Icons" src="/check-icon.png" />
              </div>

              <p className="font-['Inter'] text-[16px] text-[#ebebeb] leading-[160%] font-medium max-[767px]:text-[14px] max-[767px]:leading-[100%] max-[365px]:text-[12px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Card className="relative w-full max-w-[595px] h-[425px] bg-[#ffffff0f] rounded-[28px] overflow-hidden shadow-[0px_4px_4px_#00000040] border-none max-[1300px]:h-[430px] max-[1300px]:max-w-[500px] max-[1100px]:max-w-[400px] max-[1100px]:h-[370px] max-[1000px]:max-w-[100%] max-[1000px]:h-[auto] max-[500px]:max-w-[100%] max-[500px]:h-[300px]">
        <div className="relative h-[425px]">
          <img
            className="absolute w-[560px] h-[425px] top-[35px] left-[35px] max-[1300px]:h-[430px]  max-[1300px]:w-[500px] max-[1100px]:max-w-[400px] max-[1100px]:h-[340px] max-[1000px]:w-[100%] max-[1000px]:h-full max-[500px]:w-[100%] max-[500px]:h-[300px]"
            alt="Code example"
            src="/imge.png"
          />
          <div className="w-full h-full left-0 blur-[132px] bg-[linear-gradient(180deg,rgba(205,255,9,0)_82%,rgba(205,255,9,1)_100%)] absolute top-0" />
        </div>
      </Card>
    </section>
  );
};
