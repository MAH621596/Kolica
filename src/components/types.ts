import type { ReactNode } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: ReactNode;
  className?: string;
}

export interface Hero_CardProps {
  image?: string;
  heading?: string;
  paragraph?: string;
  list?: React.ReactNode[]
  buttonText?: string;
  className?: string;
  simpleCard?: boolean;
}

export interface CustomSelectProps {
  options: string[];
  className?: string;
};

export interface Car_CardProps {
  image?: string;
  heading?: string;
  price?: number | string;
  className?: string;
  dealerText?: string;
  icon?: string;
}