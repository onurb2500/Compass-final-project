import styled from "styled-components";

interface IInput {
    placeholder: string,
    type: string,
    invalid: boolean
}

export function Input ({placeholder, type, invalid }:IInput) {
    
    const Input = styled.input`
    background: #26292C;
    border: ${invalid ? "1px solid #FFFFFF" : "1px solid #E9B425"}};
    border-radius: 50px;
    width: 379px;
    height: 60px;
    left: 285px;
    top: 547px;
    padding: 20px;
    font-weight: 400;
    font-size: 16px;
    `;



    return (
        <Input placeholder={placeholder} type={type}></Input>
    )
}