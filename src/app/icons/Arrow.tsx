import { SVGProps } from "react";
export const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={5}
    fill="none"
    {...props}
  >
    <path stroke="#555" strokeLinecap="round" d="m1 1 3.5 3L8 1" />
  </svg>
);
