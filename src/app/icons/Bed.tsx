import { SVGProps } from "react";
export const Bed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#A2A7AA" d="M2 4h2v16H2z" />
    <path fill="#A2A7AA" d="M19 13.858v2H3v-2zM20 14h2v6h-2z" />
    <mask id="a" fill="#fff">
      <path d="M18.5 7.858a3.5 3.5 0 0 1 3.5 3.5v3.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6.5Z" />
    </mask>
    <path
      stroke="#A2A7AA"
      strokeWidth={4}
      d="M18.5 7.858a3.5 3.5 0 0 1 3.5 3.5v3.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6.5Z"
      mask="url(#a)"
    />
    <path
      fill="#A2A7AA"
      d="M7.5 8.93a1.805 1.805 0 1 1 0 3.61 1.805 1.805 0 0 1 0-3.61Z"
    />
  </svg>
);
