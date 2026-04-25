import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, CustomInput } from "@/components";
import type { Hero_CardProps } from "@/components/types";

const HeroCard = ({
  image,
  heading,
  paragraph,
  buttonText,
  smallbuttonText,
  className,
  list,
  children,
  parentClass,
}: Hero_CardProps) => {

  const [inpValue, setInpValue] = useState("");

  return (
    image ? (
      <div
        className={`hidden md:flex flex-col lg:flex-row items-center justify-between gap-8 ${className}`}
      >
        {/* TEXT SECTION */}
        <div className="w-full lg:w-[50%] py-4 text-center lg:text-left">
          <h3 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-tight text-white mb-4 lg:mb-[30px]">
            {heading}
          </h3>

          <p className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-tight text-white mb-6 lg:mb-[30px]">
            {paragraph}
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button
              type="button"
              text={buttonText}
              className="!bg-[#B1222C] font-medium text-lg md:text-xl lg:text-[30px] border-[#B1222C] 
              !text-white w-[180px] md:w-[220px] lg:w-[250px] h-[50px] md:h-[60px] hover:scale-110"
            />
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-end relative">
          <img
            src={image}
            alt="hero"
            className="w-full object-contain max-w-[680px] lg:max-w-full lg:min-w-[620px] lg:ml-[118px]"
          />
          <Button
            type="button"
            text={smallbuttonText}
            className="absolute bottom-[60px] md:right-[130px] lg:bottom-[50px] lg:right-[10px] 
            !bg-[#B1222C] 
            font-bold text-[10px] lg:text-[14px] border-[#B1222C] p-0 !text-white w-[167px] h-[30px] 
            hover:scale-110"
          />
        </div>
      </div>
    )
      : children ? <>
        <div className={`w-full max-w-[972px] mx-auto px-[28px] py-[46px] md:px-[45px] md:py-[50px] md:mb-[50px] relative z-10 bg-white text-black md:rounded-[20px] ${parentClass}`}>{children}</div>
      </> : (
        <>
          <div
            className={`flex items-center justify-between gap-8 ${className}`}
          >
            {/* TEXT SECTION */}
            <div className="w-full text-start md:text-left">
              <h3 className="font-medium text-[21px] leading-tight text-[#253A86] mb-4 md:mb-[30px]">
                {heading}
              </h3>

              <div className="">
                <ul className="list-none grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0 md:gap-4">
                  {list?.map((item, index) => (
                    <li>
                      <Link to={`/${item}`} target="_blank" key={index} className="font-normal text-sm leading-tight text-black transition-all duration-200 hover:text-[#253A86]">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <hr className="border-[#000000] w-full my-[30px]" />

              <div className="flex items-center justify-start">
                <i className="fa fa-search text-sm"></i>
                <CustomInput  
                  type="text"
                  className="!text-sm w-full border-0 h-[42px] pl-3 text-black placeholder:text-black"
                  placeholder="See an overview of all brands from A to Z"
                  value={inpValue}
                  onChange={(val) => { setInpValue(val as string)}}
                  />
              </div>
            </div>
          </div>
        </>
      )
  );
};

export default HeroCard;