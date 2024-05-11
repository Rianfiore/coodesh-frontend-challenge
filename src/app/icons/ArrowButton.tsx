import * as React from "react"
import { SVGProps } from "react"
export const ArrowButton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <rect
      width={39.167}
      height={39.167}
      x={0.417}
      y={0.417}
      stroke="#C0C7CA"
      strokeWidth={0.833}
      rx={19.583}
    />
    <path
      stroke="#393B3D"
      strokeLinecap="round"
      strokeWidth={2.083}
      d="m17.5 14.166 5.833 5.833-5.833 5.834"
    />
  </svg>
)
