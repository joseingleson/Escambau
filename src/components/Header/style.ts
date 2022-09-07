import styled from "styled-components";

export const HeaderTag = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--blue);

  height: 110px;
  width: 100vw;

  padding: 10px 0px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 90%;

    margin-bottom: 10px;
    
    button{
      & > h1 {
        color: white;
        font-family: "Montserrat";
        font-size: 18px;
        font-weight: 700;
      }
    }
  }

  .notification-perfil {
    width: 75px;
    display: flex;
    justify-content: space-between;
  }
  .notification {
    color: white;
    font-size: 20px;

    transition: 0.3s;
    :hover {
      font-size: 22px;
    }
  }
  .perfil {
    color: black;
    font-size: 32px;
    background: var(--lightGreen);
    padding: 5px;
    border-radius: 100%;

    transition: 0.3s;
    :hover {
      padding: 6px;
    }
  }
  .userName {
    transition: 0.3s;
    :hover {
      color: var(--darkGrey);
    }
  }

  .searchBar {
    position: relative;
    width: 90%;
    max-width: 450px;
    & > input {
      width: 100%;
      height: 40px;

      border-radius: 8px;
      font-size: 14px;

      outline: none;

      padding-left: 15px;
    }
    & > button {
      position: absolute;
      top: 10px;
      right: 10px;
    }
    .magnifyGlass {
      font-size: 18px;
      color: var(--blue);

      transition: 0.3s;
      :hover {
        font-size: 20px;
      }
    }
  }

  @media (min-width: 600px) {
    position: relative;
    height: 60px;
    padding: 0px 0px;
    justify-content: center;

    .container {
      margin: 0px;
      width: 80%;
    }

    .searchBar {
      position: absolute;
      width: 25%;
      min-width: 215px;

      & > input {
        width: 100%;
        max-width: 450px;
        height: 40px;

        border-radius: 8px;
        font-size: 14px;
      }
    }
  }

  @media (min-width: 768px) {
    .container {
      width: 70%;
    }

    .notification-perfil {
      width: 160px;
      & > button {
        display: flex;
        align-items: center;

        & > h3 {
          font-size: 14px;
          color: white;
          font-weight: 400;

          overflow: hidden;
          white-space: nowrap;
          max-width: 150px;
        }

        & > svg {
          margin-right: 10px;
        }
      }
    }
  }
`;