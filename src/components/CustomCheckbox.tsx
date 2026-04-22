import type { CheckBoxProps } from "@/components/types";
import { CheckboxIcon, CustomInput, CustomLabel } from "@/components";

const CustomCheckbox = ({
    id,
    name,
    value,
    checked,
    checkboxParent,
    custom_label_for,
    inputClassName,
    labelClassName,
    custom_label_text,
    onChange,
}: CheckBoxProps) => {
    return (
        <div className={`${checkboxParent} flex gap-[12px] items-center justify-center`}>
            <div className="relative">
                <CustomInput
                    id={id}
                    name={name}
                    value={value}
                    type="checkbox"
                    checked={checked}
                    onChange={(val) => onChange?.(val as boolean)}
                    className={`${inputClassName} peer 
                    appearance-none w-[22px] h-[22px]
                    border-2 border-[#626262]
                    rounded-[6px] bg-white mb-[-5px] !p-[8px]
                    checked:bg-[#B1222C] checked:border-0 checked:shadow-[0_0px_0px_0.25rem_rgba(177,34,44,.25)]`}
                />
                <CheckboxIcon />
            </div>
            <CustomLabel
                className={`${labelClassName} text-[18px]`}
                text={custom_label_text}
                htmlFor={custom_label_for}
            />
        </div>
    )
}

export default CustomCheckbox