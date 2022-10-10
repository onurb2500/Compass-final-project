import styled from "styled-components";

interface BorderInvalid {
    invalid: boolean
}

export const Input = styled.input<BorderInvalid>`
        background: #26292C;
        ${(props) => props.invalid ? "border: 1px solid #FFFFFF" : "border: 1px solid #E9B425"};
        border-radius: 50px;
        width: 100%;
        height: 67px;
        padding: 20px;
        font-weight: 400;
        font-size: 16px;
        margin: 20px 0;
        @media only screen and (max-width: 1100px){
            width: 100%;
            margin: 20px 0;
        }
        @media only screen and (max-width: 280px){
            width: 100%;
        }
    `;

    interface IconClicked {
        clicked: boolean
    }

    export const Icon = styled.div<IconClicked>`
        transition: 0.5s;
        ${(props) => props.clicked ? "transform: translate(-40px, 0)" : "transform: translate(10px)"};
        @media only screen and (max-width: 1024px) {
            transform: translate(-40px, 0);
            background: #26292C;
        }
    `

    export const Container = styled.div`
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 418px;
        @media only screen and (max-width: 375px){
            width: 100%;
        }

    `