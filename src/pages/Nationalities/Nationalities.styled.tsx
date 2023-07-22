import styled from "styled-components"

export const MainPage = styled.div<{ selected: string | null }>`
  padding: 4em 10%;

  .countries-list {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    margin-top: 1em;
    .country-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      text-decoration: none;
      font-weight: bold;
      font-size: 0.8rem;

      ${(props) => props.selected && "opacity: .6;"}
      img {
        width: 5em;
        height: 3em;
        object-fit: cover;
      }
    }

    ${(props) =>
      props.selected &&
      `.country-${props.selected} {
      opacity: 1;
    }`}
  }
`
