import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { FiSearch } from "react-icons/fi"

const SidebarInputSearch = ({ width }: { width?: number | string }) => {
  return (
    <InputGroup alignItems={"center"}>
      <InputLeftElement>
        <FiSearch />
      </InputLeftElement>

      <Input
        width={width || 400}
        border="none"
        placeholder={"Searching"}
        // borderBottom="1px solid"
        boxShadow={"none"}
        _focus={{
          border: "none",
        }}
      />
    </InputGroup>
  )
}
export default SidebarInputSearch
