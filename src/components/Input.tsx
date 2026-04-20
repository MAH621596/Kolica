import type { InputProps } from "@/components/types";

const CustomInput = ({
  id,
  name,
  type,
  value,
  placeholder,
  className,
  checked,
  onChange,
}: InputProps) => {
  return (
    <input
      id={id}
      type={type} name={name} placeholder={placeholder}
      value={type === "checkbox" ? undefined : value}
      checked={type === "checkbox" ? checked : undefined}
      onChange={(e) => {
        if (type === "checkbox") {
          onChange?.(e.target.checked);
        } else {
          onChange?.(e.target.value);
        }
      }}
      className={`border border-[#626262] rounded-[5px] p-[14px] text-[#626262] font-normal text-[14px] lg:text-[18px] leading-tight placeholder:text-[#626262] cursor-pointer focus:outline-0 ${className}`} />
  )
}

export default CustomInput;