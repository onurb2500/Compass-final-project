import React from "react";
import styled from "styled-components";
import img_pc from "../../assets/image_pc.png";

export function Login() {
    const Box = styled.div`
        width: 100vw;
        height: 100vh;
        background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
        box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center
    `;

    const Imagem = styled.div`
        background-image: url(${img_pc});
        width: 50%;
        height: 100%;
    `;

    const Infos = styled.div`
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 15%;
        padding-top: 199px;
        padding-bottom: 197px;
    `;

    const Input = styled.input`
    background: #26292C;
    border: 1px solid #FFFFFF;
    border-radius: 50px;
    width: 379px;
    height: 60px;
    left: 285px;
    top: 547px;
    padding: 20px;
    font-weight: 400;
    font-size: 16px;
    `;

    const Button = styled.button`
    width: 379px;
    height: 67px;
    left: 285px;
    top: 815px;
    border: none;
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));
    font-size: 18px;
    `


    return (
        <Box>
            <Infos>
                    <h1 style={{fontSize: "60px"}}>Olá,</h1>
                    <p style={{fontSize: "16px", width: "301px", marginTop: "-10px"}}>Para continuar navegando de forma segura, efetue o login na rede.</p>
                    <h4 style={{fontSize: "30px", marginTop: "135px"}}>Login</h4>
                    <Input placeholder="Usuário"/>
                    <Input placeholder="Senha"/>
                    <Button>Continuar</Button>
            </Infos>
            <Imagem/>
        </Box>
    );
}
