import styled from "styled-components";

import logo_header from "../../assets/LogoCompasso.svg";
import bola_compasso from "../../assets/bola-LogoCompasso.png";
import { Clock } from "../../components/Clock";
import { Time } from "../../components/Time";
import Geoloc from "../../components/Weather";

import { useNameContext } from "../../context/Name/NameContext";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	// width: 100%; teste
	// height: 100vh; teste
`;

const Header = styled.div`
	width: 100%;
	height: 169px;
	display: flex;
	justify-content: space-between;
	justify-items: center;
	align-items: flex-start;
	@media only screen and (max-width: 1100px) {
		flex-direction: column;
		align-items: center;
	}
`;

const Image = styled.div`
	background-image: url(${logo_header});
	background-repeat: no-repeat;
	width: 150px;
	height: 43px;
	margin-left: 30px;
	top: 25px;
	position: relative;
	@media only screen and (max-width: 1100px) {
		margin: 0px;
		top: 10px;
	}
`;

const Date = styled.div`
	width: 350px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	@media only screen and (max-width: 1100px) {
		display: none;
	}
`;

const Temperture = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-right: 30px;
	@media only screen and (max-width: 1100px) {
		margin: 0px;
	}
`;

const Content = styled.div`
	display: flex;
	@media only screen and (max-width: 1100px) {
		justify-content: flex-end;
		margin-bottom: 50px;
	}
`;

// const ContentImage = styled.div`
//     background-image: url(${bola_compasso});
//     background-repeat: no-repeat;
//     margin-top: 60px;
//     width:50%;
//     height:120%;
//     @media only screen and (max-width: 1550px){
//         width:60%;
//         height:126%;
//     }
//     @media only screen and (max-width: 1100px){
//         display:none;
//     }
// `;

const ContentImage = styled.img`
	margin-top: 110px;
	max-width: 50vw;
	max-height: 70vh;
	// @media only screen and (max-width: 1550px){
	//     width:60%;
	//     height:126%;
	// }
	@media only screen and (max-width: 1100px) {
		display: none;
	}
`;

const Text = styled.div`
	margin-top: 150px;
	margin-right: 6%;
	width: 70%;
	text-align: right;
	@media only screen and (max-width: 1024px) {
		margin-top: 150px;
	}
	@media only screen and (max-width: 768px) {
		margin-top: 80px;
	}
`;

const Tef = styled.p`
	font-weight: 700;
	font-size: 36px;
	color: #c12d18;
	@media only screen and (max-width: 1500px) {
		font-size: 26px;
	}
	@media only screen and (max-width: 1024px) {
		font-size: 22px;
	}
`;

const Te = styled.p`
	color: #c12d18;
	font-weight: 700;
	font-size: 64px;
	@media only screen and (max-width: 1500px) {
		font-size: 48px;
	}
	@media only screen and (max-width: 1100px) {
		font-size: 36px;
	}
`;

const Tp = styled.p`
	font-weight: 400;
	font-size: 24px;
	color: #222222;
	@media only screen and (max-width: 1500px) {
		font-size: 17px;
	}
	@media only screen and (max-width: 1100px) {
		font-size: 17px;
	}
`;
const Footer = styled.div`
	position: fixed; //fixed
	bottom: 0px;
	width: 100%;
	background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
	border-color: #33383d;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media only screen and (max-width: 1100px) {
		flex-direction: column;
		// padding: 0 20px 20px 20px;
	}
	@media only screen and (max-width: 400px) {
		position: relative;
	}
	@media only screen and (max-width: 654px) and (max-height: 281px) {
		position: relative;
	}
	@media only screen and (max-height: 899px) {
		position: relative;
	}
`;
const DivSpanFooter = styled.div`
	padding-right: 50px;
	text-align: right;
	width: 50%;
	height: 60px;
	border-right: 1px solid white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media only screen and (max-width: 1100px) {
		padding: 20px 0px 20px 0px;
		text-align: center;
		margin: 0px;
		width: 80%;
		height: auto;
		border-right: none;
		border-bottom: 1px solid white;
		flex-direction: column;
	}
`;

const DivWelcome = styled.div`
	margin-left: 3rem;
	font-size: 24px;
	font-weight: 700;
	text-align: left;
	width: 50%;
	@media only screen and (max-width: 1024px) {
		width: auto;
		margin: 0px;
		text-align: center;
	}
`;

const SpanFooter = styled.span`
	width: 100%;
	font-weight: 400;
	font-size: 12px;
	margin-top: 15px;
	margin-bottom: 15px;
	margin-left: 10%;
	@media only screen and (max-width: 1100px) {
		padding: 20px 0px 20px 0px;
		text-align: center;
		margin: 0px;
		height: auto;
		border-right: none;
	}
`;

const Button = styled.button`
	width: 131px;
	height: 112px;
	border: none;
`;

const ButtonLeft = styled(Button)`
	width: 100%;
	color: #c13216;
`;

const ButtonRight = styled(Button)`
	width: 100%;
	background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
`;
const DivA = styled.div`
	display: flex;
	width: 250px;
	@media only screen and (max-width: 1100px) {
		width: 100%;
	}
`;
const A = styled.a`
	width: 100%;
	@media only screen and (max-width: 1100px) {
		width: 100%;
	}
`;

export function Home() {
	const { name } = useNameContext();
	// const navigate = useNavigate();
	// useEffect(() => {
	// 	!name && navigate("/login");
	// }, [])
	// console.log(name)

	return (
		<Box>
			<Header>
				<Image />
				<Date>
					<Time />
				</Date>
				<Temperture>
					<Geoloc />
					{/* <h4 style={{fontSize:"14px", fontWeight:"400", color: "#222222"}}>Florianópolis - SC</h4>
                    <h2 style={{fontSize:"48px", fontWeight:"700", color: "#222222"}}>22º</h2> */}
				</Temperture>
			</Header>
			<Content>
				<ContentImage src={bola_compasso} />
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
			<Footer>
				<DivSpanFooter>
					<DivWelcome>
						Seja Bem-vindo(a), {name.split(" ").slice(0, 1)}
					</DivWelcome>
					<SpanFooter>
						Essa janela do navegador é usada para manter sua sessão de
						autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova
						janela para continuar a navegar.
					</SpanFooter>
				</DivSpanFooter>
				<div style={{ margin: "20px" }}>
					<Clock />
				</div>
				<DivA>
					<A href="https://compass.uol/en/home/" target="_blank">
						<ButtonLeft>Continuar Navegando</ButtonLeft>
					</A>
					<A href="http://localhost:3000/login">
						<ButtonRight>Logout</ButtonRight>
					</A>
				</DivA>
			</Footer>
		</Box>
	);
}
