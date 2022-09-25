import React from "react";
import styled from "styled-components";
import img_pc from "../../assets/image_pc.png";

export function Login() {
    const Box = styled.div`
        width: 100%;
        height: 100vh;
        background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
        box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
        display: flex;
    `;

    const Imagem = styled.div`
        background-image: url(${img_pc});
        width: 50%;
    `;

    const Infos = styled.div`
        width: 50%;
        display: flex;
        flex-direction: column;
        padding: 197px 258px 198px 285px;
        justify-content: space-between;
    `;
    return (
        <Box>
            <Infos>
                <h1>Olá</h1>
                <p>Para continuar navegando de forma segura, efetue o login na rede</p>
                <h4>Titulo</h4>
                <input/>
                <input/>
                <button></button>
            </Infos>
            <Imagem/>
        </Box>
    );
}
