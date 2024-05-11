import { ReactNode } from "react";

export interface SearchButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  isExpanded?: boolean;
  children?: ReactNode;
}
