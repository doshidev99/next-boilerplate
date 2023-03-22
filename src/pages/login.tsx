import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react"

import { ERole } from "@config/constants"
import { useAuth0Login } from "@modules/authentication/auth0Hook"

export default function LoginPage() {
  const {
    isLoading,
    onSubmit,
    form: {
      register,
      formState: { errors },
    },
  } = useAuth0Login()

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
          <form onSubmit={onSubmit}>
            <Stack spacing={4}>
              <FormControl id="email" isInvalid={!!errors.email}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register("email")} placeholder="Enter your email" />
                <FormErrorMessage>{errors.email?.message || "We'll never share your email."}</FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={!!errors.password}>
                <FormLabel>Password</FormLabel>
                <Input type="password" {...register("password")} placeholder="Enter your password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack direction={{ base: "column", sm: "row" }} align={"start"} justify={"space-between"}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  type="submit"
                  isLoading={isLoading}
                  disabled={isLoading}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}

LoginPage.role = ERole.ADMIN
