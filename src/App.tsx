import { Suspense, lazy, ReactNode } from "react"
import { Router, Route, useLocation, useRouter } from "wouter"
// styled-components
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { appTheme } from "./theme/app.theme"
// Pages
const HomePage = lazy(() => import("./pages/home"))
const NationalitiesPage = lazy(() => import("./pages/Nationalities"))
const UsersPage = lazy(() => import("./pages/Users"))
// Global styles styled-component
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Merriweather', serif;
  }
  h1,h2,h3,h4,h5,h6, a {
    font-family: 'Lato', sans-serif;
  }
`

const Scope = (props: { base: string; children: ReactNode }) => {
  const router = useRouter()
  const [parentLocation] = useLocation()
  const nestedBase = `${router.base}${props.base}`

  // don't render anything outside of the scope
  if (!parentLocation.startsWith(nestedBase)) return null
  // we need key to make sure the router will remount if the base changes
  return (
    <Router base={nestedBase} key={nestedBase}>
      {props.children}
    </Router>
  )
}

function App() {
  return (
    <Suspense fallback={null}>
      <ThemeProvider theme={appTheme}>
        <GlobalStyle />

        <Route path="/" component={HomePage} />
        <Scope base="/users">
          <NationalitiesPage>
            <Route path="/:coutry">
              {(params) => <UsersPage country={params.coutry} />}
            </Route>
          </NationalitiesPage>
        </Scope>
      </ThemeProvider>
    </Suspense>
  )
}

export default App
