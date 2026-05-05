import type { caretProps } from "@/components/types";

const Caret = ({ caretColor }: caretProps) => {
    return (
        <div className={`absolute top-full left-1/2 -translate-x-1/2 
            w-0 h-0 
            border-l-8 border-r-8 border-t-8 z-10 
            border-l-transparent border-r-transparent border-t-transparent ${caretColor}`}>
        </div>
    )
}

export default Caret;