import styled from "styled-components";

export const Input = styled.input`
        background: #26292C;
        border: "1px solid #FFFFFF";
        border-radius: 50px;
        width: 100%;
        height: 67px;
        left: 285px;
        top: 547px;
        padding: 20px;
        font-weight: 400;
        font-size: 16px;
        margin: 20px 0;
        @media only screen and (max-width: 1100px){
            width: 100%;
            margin: 20px 0;
        }
        @media only screen and (max-width: 280px){
            width: 90%;
        }
    `;

    interface IconClicked {
        clicked: boolean
    }

    export const Icon = styled.div<IconClicked>`
        transition: 10s;
        ${(props) => props.clicked ? "transform: translate(-40px, 0)" : "transform: translate(10px)"};
        background: #26292C;
    `

    export const Container = styled.div`
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 418px;  
    `