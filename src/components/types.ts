import type { ReactNode } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: ReactNode;
  className?: string;
}

export interface LabelProps {
  text?: string;
  htmlFor?: string;
  className?: string;
}

export interface NavbarProps {
  className?: string;
  logStatus?: boolean;
}

export interface FAQProps {
  className?: string;
}

export interface InputProps {
  id?: string;
  icon?: ReactNode;
  name?: string;
  type: "text" | "checkbox";
  value?: string;
  checked?: boolean;
  placeholder?: string;
  className?: string;
  onChange?: (value: string | boolean) => void;
}

export interface CheckBoxProps {
  id?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  custom_label_for?: string;
  custom_label_text?: string;
  checkboxParent?: string;
  inputClassName?: string;
  labelClassName?: string;
  onChange?: (value: string | boolean) => void;
}

export interface TextAreaProps {
  id?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  onChange?: (value: string) => void;
}

export interface Hero_CardProps {
  image?: string;
  heading?: string;
  paragraph?: string;
  list?: React.ReactNode[]
  buttonText?: string;
  smallbuttonText?: string;
  className?: string;
  parentClass?: string;
  children?: React.ReactNode;
}

export interface TabsProps {
  variant?: "route" | "state";
  tabs_list?: {
    id: number;
    label?: string;
    path?: string;
    icon?: ReactNode | string;
    link_text?: string;
    href?: string;
  }[];
  children?: React.ReactNode;
  className?: string;
  tabItemClass?: string;
  activeTabClass?: string;
  inActiveTabClass?: string;
  activeTextClass?: string;
  inactiveTextClass?: string;
  tabItemClassInner?: string;
  tabContainerClass?: string;
  activeTab?: number;
  setActiveTab?: (id: number) => void;
  onClick?: (tabId: number) => void;
}

export interface CustomSelectProps {
  options?: string[];
  className?: string;
  innerOptionsClass?: string;
  divider?: boolean;
  customArrows?: React.ReactNode;
   onChange?: (value: string) => void;
};

export interface Car_CardProps {
  image?: string;
  heading?: string;
  price?: number | string;
  className?: string;
  dealerText?: string;
  icon?: string;
  imageSizeClass?: string;
  footerbutton?: boolean;
}