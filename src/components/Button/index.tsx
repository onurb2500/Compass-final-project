import React from "react";
import styled from "styled-components";


export function Button ({children}:{children:string}) {
    
    const ButtonSubmit = styled.button`
        width:100%;
        max-width: 379px;
        border: none;
        background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
        box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
        border-radius: 50px;
        filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));
        font-size: 18px; 

        @media only screen and (max-width: 1100px){
            width: 90%;
        }
        @media only screen and (max-width: 280px){
            width: 97%;
        }
    `
    
    return (
        <ButtonSubmit>{children}</ButtonSubmit>
    )
}

