import styled from "styled-components"

export const Main = styled.nav`
  display: flex;
  justify-content: center;
  gap: 4rem;

  .link-item {
    height: 4rem;
    width: 3rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .link-label {
      display: none;
    }
    &::after {
      content: "▲";
      position: absolute;
      color: green;
      bottom: -5%;
      font-size: 0.8rem;
      opacity: 0;
      transition: bottom 200ms;
    }
    .icon {
      position: absolute;
      font-size: 3.2rem;
      color: gray;
      transition: all 200ms;
      bottom: 0%;
      &:nth-child(2) {
        top: 111%;
        color: green;
        border-top: 2px solid green;
      }
    }

    &:hover {
      &::after {
        bottom: 80%;
        opacity: 1;
      }
      .icon {
        bottom: 100%;
        &:nth-child(2) {
          top: 15%;
          color: green;
        }
      }
    }
  }
`
