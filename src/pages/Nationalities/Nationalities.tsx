import { useState, ReactNode } from "react"
import { Link } from "wouter"
// Styled
import { MainPage } from "./Nationalities.styled"

const NationalitiesPage = (props: { children: ReactNode }) => {
  const { children } = props

  const [selected, setSelected] = useState<string | null>(null)

  return (
    <MainPage selected={selected}>
      <h1>Nacionalities</h1>

      <div className="countries-list">
        <Link
          href="/au"
          className={`country-item country-au`}
          onClick={() => setSelected("au")}
        >
          <img
            src="https://astelus.com/wp-content/viajes/el-origen-de-la-bandera-de-australia-1152x759.png"
            alt="Flag of AUSTRALIA"
          />
          AUSTRALIA
        </Link>
        <Link
          href="/br"
          className={`country-item country-br`}
          onClick={() => setSelected("br")}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/300px-Flag_of_Brazil.svg.png"
            alt="Flag of BRASIL"
          />
          BRASIL
        </Link>
        <Link
          href="/ca"
          className={`country-item country-ca`}
          onClick={() => setSelected("ca")}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/2560px-Flag_of_Canada.svg.png"
            alt="Flag of CANADÁ"
          />
          CANADÁ
        </Link>
      </div>

      <div>{children}</div>
    </MainPage>
  )
}

export default NationalitiesPage
