export interface LocationDropdownItemProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  title: string;
  subtitle: string;
}

export interface LocationDropdownProps {
  onSelectItem: (text: string) => void;
  onClose?: () => void;
  variant?: "default" | "mobile";
}
