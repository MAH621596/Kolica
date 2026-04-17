import type { Car_CardProps } from "@/components/types";
import Button from "./Button";

const CarCard = ({
    image,
    heading,
    className,
    price,
    dealerText,
    icon,
    footerbutton,
    imageSizeClass,
}: Car_CardProps) => {
    return (
        dealerText ? <>
            <a href="/" className="h-[206px] w-[206px] flex flex-col items-center justify-center bg-[#253A86] border border-[#253A86] rounded-[10px]">
                <img className="mb-[22px]"
                    src={icon}
                    alt={icon} />
                <div className="text-xl lg:text-[16px] xl:text-[18px] leading-[30px] text-white font-medium">{dealerText}</div>
            </a>
        </>
            :

            <div className={`group flex flex-col items-center justify-center cursor-pointer gap-0 h-[206px] w-[206px] bg-[#F1F1F1] border border-[#C8C8C8] rounded-[10px] ${className}`}>
                <div className="card_header flex items-center justify-center h-[40px]">
                    <a href={heading} className="font-bold text-sm md:text-[13px] lg:text-[15px] leading-[20px] text-[#000000] group-hover:underline decoration-1">{heading}</a>
                </div>

                <div className="card_body">
                    <img
                        src={image}
                        alt={image}
                        className={`w-full object-cover transition-all duration-300 group-hover:scale-98 ${imageSizeClass ? imageSizeClass : 
                            "h-[125px] w-[281px]"
                        }`}
                    />
                </div>
                <div className="card_footer flex items-center justify-center h-[40px] w-full">
                    {footerbutton ? <Button text="Add" className="w-full max-w-[233px] flex justify-center !bg-[#B1222C] border-[#B1222C] font-semibold text-xs lg:text-[16px] !text-white h-[35px] cursor-pointer transition-all duration-200 hover:opacity-80" />
                        :
                        <p className="font-bold text-sm md:text-[13px] lg:text-[15px] leading-[20px] text-[#000000] group-hover:text-gray-600">{price}</p>
                    }
                </div>
            </div>
    );
}

export default CarCard;