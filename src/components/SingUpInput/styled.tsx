import styled from "styled-components";

export const Input = styled.input`
        background: #26292C;
        border: 1px solid #FFFFFF;
        border-radius: 50px;
        width: 100%;
        height: 67px;
        padding: 20px;
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 15px;
        @media only screen and (max-width: 1100px){
            width: 100%;
        }
    `;

    export const Container = styled.div`
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 418px;  
    `