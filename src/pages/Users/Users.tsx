import { useEffect, useState } from "react"
// Services
import useSWR from "swr"
import { GetUSerNationality } from "../../services/app.services" // Styled
import { MainPage } from "./Users.styled"
import { TUser } from "../../types/app.types"

const UsersPage = (props: { country: string }) => {
  const { country } = props
  const [pageIndex, setPageIndex] = useState(0)
  const [users, setUsers] = useState<Array<TUser>>([])

  // Get users per nationality
  const { data, isLoading, error, mutate } = useSWR("users", () =>
    GetUSerNationality(country, pageIndex)
  )

  // Effects
  useEffect(() => {
    if (data) {
      setUsers(users.concat(data))
    }
  }, [data])

  useEffect(() => {
    mutate()
  }, [pageIndex])

  useEffect(() => {
    // Reset the pager when changing country
    setUsers([])
    setPageIndex(1)
    mutate()
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
        {users?.map((user, index) => (
          <li className="user-item" key={index}>
            <img src={user.picture?.large} alt={`${user.name?.first} avatar`} />
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
