import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  // height: 92vh;
  /* text-align: center; */
  // background: linear-gradient(to right, #4c4c4c 0%,#595959 17%,#474747 30%,#000000 45%,#111111 60%,#131313 65%,#131313 65%,#1c1c1c 68%,#2b2b2b 70%,#666666 83%,#2c2c2c 99%);
  background-color: #e8eef1;
  object-fit: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 0px 0px 10px 10px;

  & form {
    // background-color:rgba(129, 65, 142, 0.7);
    margin: 0px 10px;
    padding: 10px 10px;
    // border-radius: 10px;
    // border: 3px solid blue;
    width: 100%;
    // max-width: 700px;
    color: white;
    font-size: 1.2rem;
    // box-shadow: 10px 10px 5px 5px rgba(168, 160, 169, 0.6);
    & label {
      margin-left: 5px;
      font-size: larger;
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
      letter-spacing: 2px;
    }
    & input {
      width: 100%;
      height: 20px;
      border-radius: 10px;
      padding: 20px 20px;
      margin-bottom: 10px;
      margin-top: 5px;
      &:focus {
        outline: none;
      }
    }
    & .add_button {
      padding: 3px 30px;
      border-radius: 5px;
      background-color: orange;
    }
    & section {
      display: flex;
      gap: 20px;
      margin-top: 10px;
      flex-wrap: wrap;
      & h3 {
        background-color: rgb(143, 210, 241);
        color: rgb(18, 124, 66);
        border-radius: 50px;
        padding: 5px 10px;
      }
    }
    & textarea {
      width: 100%;
      /* height: 40   px; */
      border-radius: 10px;
      padding: 5px;
      margin-bottom: 10px;
      margin-top: 5px;
      resize: none;
      &:focus {
        outline: none;
      }
    }
    & div {
      display: flex;
      justify-content: end;
      padding-top: 20px;
      & button {
        padding: 10px 60px;
        border-radius: 10px;
        background-color: lightgreen;
        &:hover {
          background-color: green;
        }
      }
    }
    & span {
      color: rgb(71, 5, 5);
    }
  }
`;
