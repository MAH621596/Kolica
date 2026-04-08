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
            <div className="min-h-[260px] flex flex-col items-center justify-center bg-[#253A86] border border-[#253A86] rounded-[10px]">
                <img className="mb-[22px]"
                    src={icon}
                    alt={icon} />
                <div className="text-xl lg:text-[25px] xl:text-[30px] leading-[30px] text-white font-medium">{dealerText}</div>
            </div>
        </>
            :

            <div className={`flex flex-col items-center justify-center gap-0 ${className}`}>
                <h3 className="py-[20px] px-[18px] font-bold text-sm md:text-[16px] lg:text-[18px] leading-[20px] text-[#000000]">{heading}</h3>
                <img
                    src={image}
                    alt={image}
                    className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[750px] object-contain"
                />
                <p className="py-[20px] px-[18px] font-bold text-sm md:text-[16px] lg:text-[18px] leading-[20px] text-[#000000]">{price}</p>
            </div>
    );
}

export default CarCard;