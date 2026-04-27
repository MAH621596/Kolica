import { Link } from "react-router-dom";
import type { CategoriesCardProps } from "@/components/types";

const CategoriesCard = ({
    icon,
    subcategory,
    className,
}: CategoriesCardProps) => {
    return (
        <Link to="/">
            <div className={`px-4 group flex flex-col items-center justify-center cursor-pointer gap-[28px] 
                h-[177px] bg-[#F1F1F1] border border-[#F1F1F1] hover:border-[#253A86] rounded-[20px]
                transition-all duration-300 ease-in-out ${className}`}>
                <div>{icon}</div>
                <h4 className="text-center font-medium text-base leading-tight text-black group-hover:text-[#253A86] group-hover:font-semibold">{subcategory}</h4>
            </div>
        </Link>
    );
}

export default CategoriesCard;