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
      className={`flex items-center justify-center gap-2 ${className}`}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;