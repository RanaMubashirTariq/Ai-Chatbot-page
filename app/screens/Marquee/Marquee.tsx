import React from 'react'
import { Card, CardContent } from "../../components/ui/card";

export default function Marquee () {


    const trustedCompanies = [
        {
          alt: "Group",
          src: "/group-1000005110.svg",
          width: "205px",
          height: "39px",
          left: "1.5px",
        },
        {
          alt: "Logoipsum",
          src: "/logoipsum-297-1.svg",
          width: "195px",
          height: "39px",
          left: "15px",
        },
        {
          alt: "Logoipsum",
          src: "/logoipsum-288-1.svg",
          width: "169px",
          height: "39px",
          left: "7px",
        },
        {
          alt: "Logoipsum",
          src: "/logoipsum-286-1.svg",
          width: "205px",
          height: "39px",
          left: "7px",
        },
        {
          alt: "Logoipsum",
          src: "/logoipsum-253-1.svg",
          width: "154px",
          height: "29px",
          top: "5px",
          left: "35px",
        },
      ];
    

    return(
      <div className="w-full h-[239px] max-[500px]:h-[180px] max-[800px]:-mt-[100px] max-[768px]:mt-[50px] max-[400px]:mt-0 overflow-hidden relative">
          <div className='absolute z-10 top-0 -right-[30px] bg-[#09090f] rounded-[50%] blur-[14px] w-[158px] h-[242px] max-[767px]:hidden'/>
          <div className='absolute z-10 top-0 -left-[30px] bg-[#09090f] rounded-[50%] blur-[14px] w-[158px] h-[242px] max-[767px]:hidden'/>
      <div className=" mx-auto">
        <div className="flex flex-col items-center gap-8">
          <h4 className="font-['Inter'] text-center text-[24px] max-[767px]:text-[20px] font-semibold leading-[130%] tracking-[0] text-white max-[767px]:px-[25px]">
            Trusted by Global Industry Leaders
          </h4>
    
          {/* Marquee Section */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-6 whitespace-nowrap animate-marquee">
              {[...trustedCompanies, ...trustedCompanies].map((company, index) => (
                <Card
                  key={index}
                  className="inline-block bg-[#18181d] border-none rounded-[18px] min-w-[150px] sm:min-w-[180px] md:minw-[200px] lg:min-w-[269px] px-6 py-4 max-[550px]:px-0 max-[500px]:py-0"
                >
                  <CardContent className="px-6 py-4 flex justify-center items-center h-full">
                    <img
                      src={company.src}
                      alt={company.alt}
                      className="object-cover h-full w-full"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    )
}