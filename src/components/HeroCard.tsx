import type { Hero_CardProps } from "@/components/types";
import Button from "./Button";

const HeroCard = ({
  image,
  heading,
  paragraph,
  buttonText,
  className,
  list,
}: Hero_CardProps) => {
  return (
    image ? (
      <div
        className={`flex flex-col md:flex-row items-center justify-between gap-8 ${className}`}
      >
        {/* TEXT SECTION */}
        <div className="w-full md:w-1/2 py-4 text-center md:text-left">
          <h3 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-tight text-white mb-4 md:mb-[30px]">
            {heading}
          </h3>

          <p className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-tight text-white mb-6 md:mb-[30px]">
            {paragraph}
          </p>

          <div className="flex justify-center md:justify-start">
            <Button
              text={buttonText}
              className="!bg-[#B1222C] font-medium text-lg md:text-xl lg:text-[24px] border-[#B1222C] !text-white w-[180px] md:w-[220px] lg:w-[250px] h-[50px] md:h-[60px]"
            />
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={image}
            alt="hero"
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[750px] object-contain"
          />
        </div>
      </div>
    )
      : (
        <>
          <div
            className={`flex items-center justify-between gap-8 ${className}`}
          >
            {/* TEXT SECTION */}
            <div className="w-full py-4 text-center md:text-left">
              <h3 className="font-medium text-md md:text-2xl leading-tight text-[#253A86] mb-4 md:mb-[30px]">
                {heading}
              </h3>

              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {list?.map((item, index) => (
                  <p
                    key={index}
                    className="font-normal text-[16px] lg:text-[18px] leading-tight text-black"
                  >
                    {item}
                  </p>
                ))}

              </div>
              <hr className="border-[#000000] w-full my-[30px]" />

              <div className="flex items-center justify-start">
                <i className="fa fa-search"></i>
                <p className="pl-3 font-normal text-[16px] lg:text-[18px] leading-tight text-black">See an overview of all brands from A to Z</p>
              </div>
            </div>
          </div>
        </>
      )
  );
};

export default HeroCard;