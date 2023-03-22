import { Box } from "@chakra-ui/react"
import React from "react"

import WithSubnavigation from "src/components/Navbar"
import SimpleSidebar from "src/components/Sidebar"

const AuthGuard = (props: TChildren) => {
  return (
    <div>
      <SimpleSidebar>
        <Box>
          <WithSubnavigation />
          {props.children}
        </Box>
      </SimpleSidebar>
    </div>
  )
}
export default AuthGuard
