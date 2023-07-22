import { useEffect, useState } from "react"
// Services
import useSWR from "swr"
import { GetUSerNationality } from "../../services/app.services" // Styled
import { MainPage } from "./Users.styled"

const UsersPage = (props: { country: string }) => {
  const { country } = props
  const [pageIndex, setPageIndex] = useState(1)

  // Get users per nationality
  const { data, isLoading, error, mutate } = useSWR("/getusernationality", () =>
    GetUSerNationality(country, pageIndex)
  )

  // Effects
  useEffect(() => {
    mutate()
  }, [pageIndex])

  useEffect(() => {
    if (pageIndex === 1) {
      mutate()
    } else {
      setPageIndex(1)
    }
  }, [country])

  // Is error
  if (error) {
    return (
      <MainPage>
        No se ha podido cargar la información, vuelve a intentarlo...
      </MainPage>
    )
  }
  // Is loading
  if (isLoading) {
    return <MainPage>Cargando...</MainPage>
  }

  return (
    <MainPage>
      <h1>Users</h1>

      <ul className="users-list">
        {data?.map((user) => (
          <li className="user-item">
            <img src={user.picture?.large} alt="" />
            <h2>
              {user.name?.first} {user.name?.last}
            </h2>
            <p>{user.nat}</p>
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button onClick={() => setPageIndex(pageIndex + 1)}>
          More results
        </button>
      </div>
    </MainPage>
  )
}

export default UsersPage
