import { useDisclosure, useToast } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

import { auth0LoginSchema } from "./auth0Common"
import { authService } from "./auth0Service"

export const useAuth0Login = () => {
  const { isOpen: isLoading, onOpen, onClose } = useDisclosure()

  const toast = useToast()
  const form = useForm<{
    email: string
    password: string
  }>({
    resolver: yupResolver(auth0LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  })

  const onSubmit = (formValues: ILogin) => {
    onOpen()
    authService
      .loginWithUser({
        username: formValues.email,
        password: formValues.password,
      })
      .catch((err) => {
        onClose()
        toast({
          description: err?.error_description || "Login failed",
          status: "error",
          duration: 3000,
        })
      })
  }

  return { isLoading, form, onSubmit: form.handleSubmit(onSubmit) }
}
