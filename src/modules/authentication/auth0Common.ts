import * as yup from "yup"

export const auth0LoginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required()
    .test("password", "Password must be at least 6 characters", (value) => value.length > 6),
})
