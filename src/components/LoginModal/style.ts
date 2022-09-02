import styled from "styled-components"; 

export const ModalLogin = styled.div` 
  position: fixed; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  width: 100%; 
  height: 100vh; 
  background-color: rgba(0,0,0,0.60);

  font-family: 'Montserrat';

  h2 {
    color: #4169E1;
    font-family: "Montserrat";
    font-weight: 700;

    
  }
  
  .box-login {
    max-width: 310px; 
    width: 100%; 
    max-height: 400px; 
    height: 100%; 

    padding-top: 30px;

    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    background-color: #ffffff;
    border: none;
    border-radius: 10px;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 15px;

      width: 100%;

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 80%;
        gap: 10px;

        line-height: 5px;

        div {
          display: flex;
          align-items: center;
          flex-direction: row;
          
          
          background-color: transparent;

          width: 100%;
          
          border-bottom: 1px solid #D9D9D9;

          padding-right: 10px;

          input {
            border: none;
          }
        }

        label {
          color: #979797;
          font-family: "Montserrat";
        }

        input {
          font-family: "MontSerrat";

          width: 100%;
          
          padding: 8px 0 8px 8px;

          font-size: 14px;

          border: none;
          border-bottom: 1px solid #D9D9D9;

          background-color: transparent;

          outline: 0;
          
          ::placeholder {
            color: #D9D9D9;
          }
        }
        button {
          border: none;
          background-color: transparent;
          
        }
        span {
          font-size: 10px;
          color: red;
        }
      }
      
      .enter-btn {
        width: 80%;

        margin-top: 20px;
        color: #ffffff;
        background-color: #83C067;

        padding: 12px 0;

        font-size: 16px;
        font-weight: 600;

        border-radius: 5px;
        border: none;

        font-family: "Montserrat";

        :hover {
          opacity: 80%;
        }
      }
    }

    .box-to-register {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 80%;

      margin: 0 auto;
      padding-bottom: 20px;

      h3 {
        color: #4169e1;
        font-size: 14px;
        font-family: "Montserrat";

        padding-bottom: 20px;
      }

      button {
        width: 100%;

        color: #ffffff;
        background-color: #979797;
        
        border-radius: 5px;
        border: none;

        padding: 12px 0;

        font-size: 16px;
        font-weight: 600;
        font-family: "Montserrat";

        :hover {
          opacity: 80%;
        }
      }
    }
  } 
`