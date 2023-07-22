import styled from "styled-components"

export const HeaderStyled = styled.header`
  margin-bottom: 3em;
  .avatar-contain {
    background-color: #e3e2e2;
    height: 10rem;
    border-bottom: 1px gray solid;
    display: flex;
    justify-content: center;
    .avatar-figure {
      border: 1px gray solid;
      border-radius: 100%;
      height: 10rem;
      width: 10rem;
      background-color: #ffffff;
      margin-top: 3rem;
      .avatar {
        margin: 2.5%;
        height: 95%;
        width: 95%;
        object-fit: cover;
        border-radius: 100%;
      }
    }
  }
  .avatar-info {
    margin-top: 5rem;
    text-align: center;
  }
`
