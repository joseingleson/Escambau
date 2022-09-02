import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);

  @media (min-width: 600px) {
  }

  @media (min-width: 768px) {
  }
`;

export const Box = styled.div`
  position: relative;
  width: 70vw;
  height: 40vh;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;

  .x {
    background-color: black;
    color: white;
    border-radius: 100%;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      opacity: 80%;
    }
  }

  div {
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 60px;
    background-color: var(--blue);

    p {
      width: 70%;
      color: white;
      font-family: "Montserrat";
      font-weight: 700;
      font-size: 15px;
      text-align: left;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 180px;
    width: 100%;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    .confirm {
      background-color: var(--green);
      width: 160px;
      height: 40px;
      color: white;
      font-family: "Montserrat";
      font-weight: 900;
      font-size: 16px;

      &:hover {
        opacity: 80%;
      }
    }

    .cancel {
      background-color: var(--red);
      width: 160px;
      height: 40px;
      color: white;
      font-family: "Montserrat";
      font-weight: 900;
      font-size: 16px;

      &:hover {
        opacity: 80%;
      }
    }
  }

  //Tablet
  @media (min-width: 600px) {
    width: 45vw;
    height: 20vh;

    section {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
      height: 180px;
      background-color: white;
    }
  }

  //Desktop
  @media (min-width: 768px) {
    width: 50vw;
    height: 30vh;

    section {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
      height: 180px;
      background-color: white;
    }
  }
`;
