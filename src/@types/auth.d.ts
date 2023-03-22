type AuthResult = {
  accessToken?: string | undefined
  idToken?: string | undefined
  idTokenPayload?: string
  refreshToken?: string | undefined
  expiresIn?: number | undefined
  scope?: string | undefined
}

type TSocialProvider = "twitter" | "google-oauth2" | "facebook" | "linkedin" | "github"
