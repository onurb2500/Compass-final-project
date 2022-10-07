import { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";

interface IInput {
    placeholder: string,
    type: string,
    invalid: boolean,
}

export function Input ({placeholder, type, invalid}:IInput) {

    const [clicked, setClicked] = useState(false);
    const [password, setPassword] = useState("");

    
    
    const Input = styled.input`
        background: #26292C;
        border: ${invalid ? "1px solid #FFFFFF" : "1px solid #E9B425"};
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

    const Icon = styled.div<IconClicked>`
        transition: 10s;
        ${(props) => props.clicked ? "transform: translate(-40px, 0)" : "transform: translate(10px)"};
        background: #26292C;
    `

    const Container = styled.div`
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 418px; 
        @media only screen and (max-width: 1100px){

        }
        
    `

    return (
        <Container> 
            <Input
                onFocus={() => setClicked(true)} 
                onBlur={(event) => event.target.value.length > 0 ? setClicked(true) : setClicked(false)}
                placeholder={placeholder}
                type={type}
            />
            <Icon clicked={clicked}>
                {type === "name" ? (<AiOutlineUser size={25}/>) : (<MdLockOutline size={25}/>)}
            </Icon>
        </Container>
    )
}