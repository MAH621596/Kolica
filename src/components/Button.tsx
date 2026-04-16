import type { ButtonProps } from "@/components/types";

const Button = ({
  text,
  icon,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-[5px] gap-2 px-4 ${className}`}
    >
      {icon && <span className="flex items-center justify-center w-5 h-5">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;