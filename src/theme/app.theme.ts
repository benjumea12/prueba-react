import { DefaultTheme } from "styled-components"

export type TColors = "primary" | "secondary" | "tertiary"
export type TAlignText = "center" | "left" | "right" | "justify"

const appTheme: DefaultTheme = {
  colors: {
    primary: "#D6F8B8",
    secondary: "#8FBBAF",
    tertiary: "#ACDEAA",
    dark: "#0F0F0F",
    light: "#FFFFFF",
    danger: "#F5727F",
  },
  fonts: {
    primary: "Fjalla-One",
    secondary: "MerriweatherSans-Light",
  },
}

export { appTheme }
