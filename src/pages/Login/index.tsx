import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import img_pc from "../../assets/image_pc.png";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuth } from "../../context/AuthProvider/useAuth";

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

    const Infos = styled.form`
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 15%;
        padding-top: 199px;
        padding-bottom: 197px;
    `;

    const Paragraph = styled.p`
        display: flex;
        width: 283px;
        font-weight: 700;
        font-size: 16px;
        color: #E9B425;
        justify-content: space-around;
    `

    const navigate = useNavigate();
    const [invalid, setInvalid] = useState(true)

    async function onFinish(event: any) {
        event.preventDefault();
        
        const value = {
            email: event.target["0"].value,
            password: event.target["1"].value
        }
        
        const main ={
            email: "brunosjaques@gmail.com",
            password: "123456"
        }

        if ((value.email === main.email)&&(value.password === main.password)) {
            navigate("/home");
            setInvalid(true)
        } else {
            setInvalid(false)
            
        }

    }

    
    return (
        <Box>
            <Infos onSubmit={(event)=>onFinish(event)}>
                    <h1 style={{fontSize: "60px"}}>Olá,</h1>
                    <p style={{fontSize: "16px", width: "301px", marginTop: "-10px"}}>Para continuar navegando de forma segura, efetue o login na rede.</p>
                    <h4 style={{fontSize: "30px", marginTop: "135px"}}>Login</h4>
                    <Input placeholder= "Usuário" type="" invalid={invalid}/>
                    <Input placeholder= "Senha" type="password" invalid={invalid}/>
                    <div style={{display:invalid ? "none": "vidible", textAlign: "center", marginLeft: "50px"}}><Paragraph>Ops, um usuário ou senha inválidos. Tente novamente!</Paragraph></div>
                    <Button>Continuar</Button>
            </Infos>
            <Imagem/>
        </Box>
    );
}
