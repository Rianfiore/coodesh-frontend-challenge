export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: "full-rounded" | "default";
}
