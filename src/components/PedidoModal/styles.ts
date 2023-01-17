import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div``;

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
.react-modal-content-pedido{
    width: 100%;
    max-width: 23rem;
    background: #29292e;
    position: relative;
    border-radius: 0.25rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
    border-radius: 0.25rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    color: whitesmoke;
    .img{
        /* width: 25%; */
        margin: 0 auto;
        padding: 1rem;
    }
    .h2{
        width: 100%;
        text-align: center;
        /* margin: 0 auto; */
        padding: 1rem;
    }
    p{
        width: 100%;
        text-align: center;
        color: var(--text-body);
        font-weight: 400;
    }
    button{
        margin-top: 2rem;
        margin-bottom: 2rem;
        padding: 1rem 2rem;
        background: #47474d;
        color: whitesmoke;
        border: none;
        border-radius: 0.25rem;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.8);
        }
        
    }
}

.ReactModal__Overlay--after-open{
    opacity: 1;
    z-index: 1;
}

.ReactModal__Overlay--before-close{
    opacity: 0;
}
`;
