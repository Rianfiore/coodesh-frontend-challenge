import { SVGProps } from "react";
export const Blueprint = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      fill="#652D91"
      d="M3 3.333a.333.333 0 0 0-.333.334v5H6V7.333a.667.667 0 0 1 1.333 0v5.334H9A.667.667 0 1 1 9 14H3c-.92 0-1.667-.746-1.667-1.667V3.667C1.333 2.747 2.08 2 3 2h10c.92 0 1.667.746 1.667 1.667v8.666c0 .92-.746 1.667-1.667 1.667h-1.333a.667.667 0 0 1 0-1.333H13c.184 0 .334-.15.334-.334V10h-3a.667.667 0 0 1-.667-.667v-6H7.334v1.334a.667.667 0 0 1-1.334 0V3.333H3Zm8 0v5.334h2.334v-5A.333.333 0 0 0 13 3.333h-2ZM2.667 10v2.333c0 .184.15.334.333.334h3V10H2.667Z"
    />
  </svg>
);
