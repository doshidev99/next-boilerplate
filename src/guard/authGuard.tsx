import { HStack } from "@chakra-ui/react"

import SidebarWithHeader from "src/components/Sidebar"

const AuthGuard = (props: TChildren) => {
  return (
    <SidebarWithHeader>
      <HStack bg={"#F7FAFC"} height="100%" justifyContent={"space-between"} p={6} borderRadius="16">
        {props.children}
      </HStack>
    </SidebarWithHeader>
  )
}
export default AuthGuard
