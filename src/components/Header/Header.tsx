import { FC, HTMLAttributes } from "react"
// Services
import useSWR from "swr"
import { GetUSer } from "../../services/app.services"
// Styled
import { HeaderStyled } from "./Header.styled"

const Header: FC<HTMLAttributes<HTMLHeadElement>> = () => {
  const { data, isLoading, error } = useSWR("/getuser", GetUSer)

  if (isLoading) {
    return <HeaderStyled>Cargando...</HeaderStyled>
  }

  if (error) {
    return (
      <HeaderStyled>
        No se ha podido cargar la información, vuelve a intentarlo...
      </HeaderStyled>
    )
  }

  return (
    <HeaderStyled>
      <div className="avatar-contain">
        <figure className="avatar-figure">
          <img
            className="avatar"
            src={data?.picture?.large}
            alt={`${data?.name?.first} avatar`}
          />
        </figure>
      </div>
      <div className="avatar-info">
        <p>Hi!, My name is</p>
        <h1>
          {data?.name?.first} {data?.name?.last}
        </h1>
      </div>
    </HeaderStyled>
  )
}

export default Header
