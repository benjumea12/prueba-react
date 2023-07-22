import styled from "styled-components"

export const MainPage = styled.div`
  margin-top: 3em;
  .users-list {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2em;
    margin-top: 1em;

    .user-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 0.8rem;
    }
  }

  .pagination {
    margin-top: 2em;
    button {
      font-size: 1rem;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
  }
`
