export type TVarEnv = {
  VITE_API_URL?: string
}


export type TUser = {
  name?: {
    title: string
    first: string
    last: string
  }
  picture?: {
    large: string
  }
  nat: string
}
