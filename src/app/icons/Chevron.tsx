import * as React from "react"
import { SVGProps } from "react"
export const Chevron = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#4E5254"
      d="M3.178 5.926a.9.9 0 0 1 1.272 0l3.364 3.363 3.364-3.363a.9.9 0 0 1 1.272 1.273l-4.636 4.636-4.636-4.636a.9.9 0 0 1 0-1.273Z"
    />
  </svg>
)
