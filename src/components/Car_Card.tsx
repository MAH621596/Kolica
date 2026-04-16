import type { Car_CardProps } from "@/components/types";

const CarCard = ({
    image,
    heading,
    className,
    price,
    dealerText,
    icon,
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
                        className="w-full h-[125px] w-[281px] object-cover transition-all duration-300 group-hover:scale-98"
                    />
                </div>
                <div className="card_footer  flex items-center justify-center h-[40px]">
                    <p className="font-bold text-sm md:text-[13px] lg:text-[15px] leading-[20px] text-[#000000] group-hover:text-gray-600">{price}</p>
                </div>
            </div>
    );
}

export default CarCard;