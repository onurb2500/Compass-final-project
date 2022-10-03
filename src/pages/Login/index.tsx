import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import img_pc from "../../assets/image_pc.png";
import icon_user from "../../assets/icon-user.svg";
import icon_compass from "../../assets/Logo-Compasso-Branco-hor.svg";


import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { url } from "inspector";

export function Login() {
    const Box = styled.div`
        width: 100vw;
        height: 100vh;
        background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
        box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
        display: flex;
        @media only screen and (max-width: 1100px){
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
    `;

    const DivForm = styled.div`
        width:50%; 
        display: flex;
        align-items: center;
        @media only screen and (max-width: 1100px){
            width: 100%;
            height: 90%;
            display: flex;
            align-items: center;
        }
    `

    const Infos = styled.form`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 25%;
        padding-top: 199px;
        padding-bottom: 197px;
        @media only screen and (max-width: 1500px){
            padding-left: 20%;
        }
        @media only screen and (max-width: 1100px){
            width: 100%;
            padding-left:0px;
            align-items: center;
            padding: 0;
            justify-content: space-around;

        }
    `;

    const Paragraph = styled.p`
        display: flex;
        width: 283px;
        font-weight: 700;
        font-size: 16px;
        color: #E9B425;
        justify-content: space-around;
    `
    const Imagem = styled.div`
        display: flex;
        justify-content: space-around;
        background-image: url(${img_pc});
        background-repeat: no-repeat;
        background-size: cover;
        width: 50%;
        height: 100%;
        @media only screen and (max-width: 1100px){
            display: none;
            width: 0px;
            height: 0px;
        }
    `;

    const Logo = styled.div`
        margin-top: 35px;
        background-image: url(${icon_compass});
        background-repeat: no-repeat;
        background-size: cover;
        width: 306px;
        height: 69px;   
    `
    
    const H1 = styled.p`
        font-size: 60px;
        text-align: left;
        @media only screen and (max-width: 1100px){
            font-size: 45px;
            margin-left: 6px;
        }
    `

    const P = styled.p`
        font-size: 16px;
        width: 301px;
        margin-top: -10px;
        text-align: left;
        @media only screen and (max-width: 1100px){
            padding-left: 8px;
            margin-top: 4px;

        }
        @media only screen and (max-width: 280px){
            width: 100%;
        }
    `

    const ImagemHeader = styled.div`
    @media only screen and (max-width: 1100px){
        width: 100%;
        margin-top: 35px;
        background-image: url(${icon_compass});
        background-repeat: no-repeat;
        background-size: cover;
        width: 250px;
        height: 59px; 
    }
    `

    const DivInput = styled.div`
        @media only screen and (max-width: 1100px){
        width: 85%;
        display: flex;
        flex-direction: column;
        align-items: center;}
    `

    const navigate = useNavigate();
    const [invalid, setInvalid] = useState(true)

    const [name, setName] = useState("")
    const [password, setPassword] =useState("")
    
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
        setName(event.target["0"].value);
        setPassword(event.target["1"].value)
        
        if ((value.email === main.email)&&(value.password === main.password)) {
            navigate("/home");
            setInvalid(true)
        } else {
            setInvalid(false)
            
        }

    }
    

    const [isClicked, setIsClicked] = useState(true);
    
    return (
        
        <Box>
            <ImagemHeader></ImagemHeader>
            <DivForm>
                <Infos onSubmit={(event)=>onFinish(event)}>
                        <div style={{height: "20%"}}>
                            <H1>Olá,</H1>
                            <P>Para continuar navegando de forma segura, efetue o login na rede.</P>
                        </div>
                        <DivInput>
                            <h4 style={{fontSize: "30px", textAlign: "left"}}>Login</h4>
                            <Input placeholder= "Usuário" type="name" invalid={invalid}/>
                            <Input placeholder= "Senha" type="password" invalid={invalid}/>
                        </DivInput>  
                        {/* <div style={{display:invalid ? "none": "vidible", textAlign: "center", marginLeft: "50px"}}></div> */}
                        <div style={{display:"flex", justifyContent:"space-around", width:"379px"}}>{!invalid&&<Paragraph style={{textAlign:"center"}}>Ops, um usuário ou senha inválidos. Tente novamente!</Paragraph>}</div>
                        <Button>Continuar</Button>
                </Infos>
            </DivForm>
            <Imagem>
                <Logo/>
            </Imagem>

        </Box>
    );
}
