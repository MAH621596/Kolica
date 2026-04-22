import { useState } from "react";
import type { CustomSelectProps } from "@/components/types";

const CustomSelect = ({
  options, className, innerOptionsClass, divider, customArrows, name, value, onChange, onBlur
}: CustomSelectProps) => {
  const [open, setOpen] = useState(false);
  // const [selected, setSelected] = useState("Any");

  return (
    <div className={`relative w-full`}>

      {/* Select Box */}
      <div
        onBlur={() => onBlur?.(String(name))}
        tabIndex={0}
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between text-xs font-normal border-[0.64px] border-[#626262] rounded-md px-4 py-4 cursor-pointer bg-white text-[#626262] h-[41px] ${className}`}
      >
        <span className="text-gray-700">{value || "Select"}</span>

        {customArrows ?
          <>
            <span>
              {open ? customArrows : <span className="rotate-360">{customArrows}</span>}</span>
          </> :
          <>
            <span className={`text-xs ${divider ? "border-l border-l-[#626262] pl-[16px] h-[41px] flex items-center" : ""}`}>
              {open ? "▲" : "▼"}
            </span>
          </>}
      </div>

      {/* Dropdown Options */}
      {open && (
        <div className={`absolute w-full bg-white border-[0.64px] border-[#626262] rounded-md shadow-md z-10 ${innerOptionsClass}`}>

          {options?.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                onChange?.(option);
                setOpen(false);
              }}
              className={`px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#626262] font-normal text-xs`}
            >
              {option}
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default CustomSelect;