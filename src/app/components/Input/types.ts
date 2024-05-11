import { ReactNode } from "react";

export interface InputProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "mobile";
  type?: "text" | "select";
  icon?: ReactNode;
  label?: string;
  placeholder?: string;
  currentValue?: string | null;
  onClick?: () => void;
  onInputChange?: (input: string) => void;
  onInputFocus?: () => void;
  width?: string;
  isHovered?: boolean;
  isInputDisabled?: boolean;
  children?: ReactNode;
}
