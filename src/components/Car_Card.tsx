import type { Car_CardProps } from "@/components/types";
import { Link } from "react-router-dom";
import Button from "./Button";

const CarCard = ({
    image,
    heading,
    className,
    icon,
    price,
    dealerText,
    footerbutton,
    imageSizeClass,
    dealerTextClass,
    dealerHeadingClass,
}: Car_CardProps) => {
    return (
        dealerText ? <>
            <Link to="/" className={`flex flex-col items-center justify-center gap-[15px] bg-[#253A86] border border-[#253A86] rounded-[10px] transition-all duration-300 ease-in-out ${dealerTextClass}`}>
                <img className="w-[30px] h-[30px]"
                    src={icon}
                    alt="img" />
                <div className={`text-xl lg:text-[16px] xl:text-[18px] leading-[30px] text-white font-medium ${dealerHeadingClass}`}>{dealerText}</div>
            </Link>
        </>
            :
            <Link to="/product-detail">
                <div className={`group flex flex-col items-center justify-center cursor-pointer gap-0 h-[206px] w-[206px] bg-[#F1F1F1] border border-[#C8C8C8] rounded-[10px] ${className}`}>
                    <div className="card_header flex items-center justify-center h-[40px]">
                        <span className="font-bold text-sm leading-[20px] text-[#000000] group-hover:underline decoration-1">{heading}</span>
                    </div>

                    <div className="card_body">
                        <img
                            src={image}
                            alt="img"
                            className={`w-full object-cover transition-all duration-300 group-hover:scale-98 ${imageSizeClass ? imageSizeClass :
                                "h-[125px] w-[281px]"
                                }`}
                        />
                    </div>
                    <div className="card_footer flex items-center justify-center h-[40px] w-full">
                        {footerbutton ? <Button type="button" text="Add" className="hover:scale-110 w-full max-w-[233px] flex justify-center
                     !bg-[#B1222C] border-[#B1222C] font-semibold text-xs lg:text-[16px] !text-white h-[35px] 
                     " />
                            :
                            <p className="font-bold text-sm leading-[20px] text-[#000000] group-hover:text-gray-600">{price}</p>
                        }
                    </div>
                </div>
            </Link>
    );
}

export default CarCard;