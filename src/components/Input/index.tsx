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
        width: 379px;
        height: 60px;
        left: 285px;
        top: 547px;
        padding: 20px;
        font-weight: 400;
        font-size: 16px;
    `;

    interface IconClicked {
        clicked: boolean
    }

    const Icon = styled.div<IconClicked>`
        transition: 10s;
        ${(props) => props.clicked ? "transform: translate(-40px, 0)" : "transform: translate(10px)"};
    `

    const Container = styled.div`
        display: flex;
        align-items: center;
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
                {type === "name" ? (<AiOutlineUser size={20}/>) : (<MdLockOutline size={20}/>)}
            </Icon>
        </Container>
    )
}