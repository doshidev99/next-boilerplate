import { ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "react-query"

import { theme } from "@styles/theme"
const queryClient = new QueryClient()

const RootProvider = ({ children }: TChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme} resetCSS>
        {children}
      </ChakraProvider>
    </QueryClientProvider>
  )
}
export default RootProvider
