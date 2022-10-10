import React from "react";
import styled from "styled-components";


export function ButtonSignUp ({children}:{children:string}) {
    
    const ButtonSubmit = styled.button`
        width:327px;
        height: 64px;
        margin: 3rem 0;
        border: none;
        background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
        box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
        border-radius: 50px;
        filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));
        font-size: 18px; 

        @media only screen and (max-width: 320px){
            width: 100%;
        }
    `
    
    return (
        <ButtonSubmit>{children}</ButtonSubmit>
    )
}

