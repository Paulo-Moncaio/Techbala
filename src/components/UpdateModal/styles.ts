import styled, { createGlobalStyle } from "styled-components";

export const ModalStyled = createGlobalStyle`
    .react-modal-overlay{
    
    background: rgba(0,0,0, 0.5);   
    opacity: 0;
    transition: opacity 250ms ease-in-out;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}


.ReactModal__Overlay--after-open{
    opacity: 1;
}

.ReactModal__Overlay--before-close{
    opacity: 0;
}
`;

export const Container = styled.div`
margin: auto;
max-width: 1080px;
width: 100%;
background-color: var(--box);
flex-wrap: wrap;
overflow: auto;
padding: 1rem 6rem;
.titulo{
    margin: 0 auto;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    margin-bottom: 0.25rem;
}
h3{
    padding: 0.5rem 0.5rem;
}
@media(max-width: 600px){
    padding: 1rem 2rem;
}
border-radius: 0.5rem;
.voltar {
  float: right;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2s;
  margin-left: 0.5rem;
  &:hover {
    filter: brightness(0.5);
  }
  img {
    width: 2.25rem;
  }
}

.contentOne {
  display: flex;
  @media (max-width: 600px) {
    display: block;
  }
  

.contentTwo {
  .placeholder{
  text-align: right;
}

.placeholder:before {
  color: lightgrey;
  content: attr(placeholder) !important;
  margin-right: 382em;
}
    
    input {
      width: 100%;
      padding: 0.5rem 2rem;
      height: 3.5rem;
      border-radius: 0.5rem;
      border: 1px solid #d7d7d7;
      background: var(--input);
      font-weight: 400;
      font-size: 1rem;
      text-transform: uppercase;
      &::placeholder {
        color: var(--text-body);
      }
      & + input {
        margin-top: 0.5rem;
      }
    }
    select {
      width: 100%;
      padding: 0.5rem 2rem;
      height: 3.5rem;
      border-radius: 0.5rem;
      border: 1px solid #d7d7d7;
      background: var(--input);
      font-weight: 400;
      font-size: 1rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      &::placeholder {
        color: var(--text-body);
      }
    }
  }
}


.contentThree {
  padding-top: 2rem;
  input {
    width: 100%;
    height: 10rem;
    border-radius: 0.5rem;
    border: 1px solid #d7d7d7;
    background: var(--input);
    font-weight: 400;
    font-size: 1rem;
    &::placeholder {
      padding-left: 2rem;
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.5rem;
    font-size: 1rem;
    margin-top: 0.25rem;
    transition: filter 0.2s;
    font-weight: 600;
    &:hover {
      filter: brightness(0.9);
    }
  }
}
`;

