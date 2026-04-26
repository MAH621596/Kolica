import type { DashboardProps } from "@/components/types";

const DashboardCard = ({
    children,
    className,
    svgClass,
    imageClass,
    headerClass,
    cardBodyIcon,
    cardHeaderText,
    cardFooterText,
    parentCardClass,
    cardBodyHeading,
    cardHeadingClass,
    cardSubHeadingClass,
    cardBodySubHeading,
}: DashboardProps) => {
    return (
        <div className={`bg-white rounded-[20px] cursor-pointer transition-all duration-300 ease-in-out ${parentCardClass}`}>
            {cardHeaderText &&
                <div className={`px-[30px] pt-[30px] text-sm lg:text-[18px] font-medium capitalize text-black ${headerClass}`}>
                    <h4>{cardHeaderText}</h4>
                </div>}

            {(cardBodyHeading || cardBodySubHeading) &&
                <div className={`flex items-center justify-start gap-[18px] py-[30px] px-[30px] ${className}`}>
                    {cardBodyIcon && (
                        <span>
                            {typeof cardBodyIcon === "string" ? (
                                <img src={cardBodyIcon} alt="img" className={`${imageClass}`} />
                            ) : (
                                <span className={`${svgClass}`}>{cardBodyIcon}</span>
                            )}
                        </span>
                    )}

                    <div className={`text-black`}>
                        <div className={`text-sm md:text-[18px] lg:text-[22px] font-medium capitalize leading-[25px] ${cardHeadingClass}`}>{cardBodyHeading}</div>
                        {cardBodySubHeading && <div className={`text-[14px] lg:text-[18px] font-normal capitalize text-[#94A3B3] leading-[25px] ${cardSubHeadingClass}`}>{cardBodySubHeading}</div>}
                    </div>
                </div>}

            {children && <>{children}</>}

            {cardFooterText &&
                <div className="leading-[28px] px-[30px] pb-[30px] text-sm lg:text-[18px] font-medium capitalize text-black">
                    <h4>{cardFooterText}</h4>
                </div>}
        </div>
    )
}

export default DashboardCard;