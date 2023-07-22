// Styled
import { MainPage } from "./Home.styled"
// Components
import { Header, NavBar } from "../../components"

const HomePage = () => {
  return (
    <MainPage>
      <Header />
      <NavBar />
      {/* Other content... */}
    </MainPage>
  )
}

export default HomePage
