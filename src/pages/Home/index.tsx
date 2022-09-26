import styled from "styled-components";

import logo_header from "../../assets/LogoCompasso.svg"
import bola_compasso from "../../assets/bola-LogoCompasso.png"


const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`;

const Header = styled.div`
    width: 100%;
    height: 169px;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
`;

const Image = styled.div`
    background-image: url(${logo_header});
    background-repeat: no-repeat;
    width: 150px;
    height:43px;
    margin-left: 30px;
`;

const Date = styled.div`
    width: 350px;
    height: 169px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-end;
`

const Temperture = styled.div`
    height: 169px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
`

const Content = styled.div`
    width: 100%;
    display: flex;

`

const ContentImage = styled.div`
    background-image: url(${bola_compasso});
    background-repeat: no-repeat;
    width:100vw;
    height:70vh;
    margin-top: 63px;
`
const Text = styled.div`
    width: 55%;
`

export function Home () {
    return (
        <Box>
            <Header>
                <Image/>
                <Date>
                    <h4 style={{fontSize:"144px", fontWeight:"700", color: "#222222", lineHeight: "144px"}}>11:26</h4>
                    <p style={{fontSize:"14px", fontWeight:"400", color: "#222222"}}>terça-feira, 17 de março de 2020</p>
                </Date>
                <Temperture>
                    <h4 style={{fontSize:"14px", fontWeight:"400", color: "#222222"}}>Florianópolis - SC</h4>
                    <h2 style={{fontSize:"48px", fontWeight:"700", color: "#222222"}}>22º</h2>
                </Temperture>
            </Header>
            <Content>
                <ContentImage/>
                <Text>
                    <Tef>Our mission is</Tef>
                    <Tp>Nossa missão é</Tp>
                    <Te>to transform the world</Te>
                    <Tp>transformar o mundo</Tp>
                    <Te>building digital experiences</Te>
                    <Tp>construindo experiências digitais</Tp>
                    <Te>that enable our client's growth</Te>
                    <Tp>que permitem o crescimento dos nossos clientes</Tp>
                </Text>
            </Content>
        </Box>
    );
}