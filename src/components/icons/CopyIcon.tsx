import * as React from "react"
import { SVGProps, memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M18 0H8C6.897 0 6 .897 6 2v4H2C.897 6 0 6.897 0 8v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2ZM2 18V8h10l.002 10H2Zm16-6h-4V8c0-1.103-.897-2-2-2H8V2h10v10Z"
      fill="#000"
    />
  </svg>
)

const Memo = memo(SvgComponent)
export default Memo
