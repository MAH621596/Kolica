import type { TextAreaProps } from "@/components/types";

const TextArea = ({
  id,
  value,
  placeholder,
  className,
  onChange,
}: TextAreaProps) => {
  return (
    <>
      <textarea
        id={id}
        required
        placeholder={placeholder}
        value={value || ""}
        onChange={(e) => onChange?.(e.target.value)}
        className={`resize-none border border-[#626262] rounded-[5px] p-[14px] text-[#626262] font-normal text-[14px] leading-tight placeholder:text-[#626262] cursor-pointer focus:outline-0 ${className}`}></textarea>
      <p className="font-semibold text-[12px] text-[#626262] mt-[10px]">You can also enter in the NOTES input field
        4000  characters</p>
    </>
  )
}

export default TextArea;