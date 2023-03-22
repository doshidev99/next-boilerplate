import { ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "react-query"
const queryClient = new QueryClient()

const RootProvider = ({ children }: TChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS>{children}</ChakraProvider>
    </QueryClientProvider>
  )
}
export default RootProvider
