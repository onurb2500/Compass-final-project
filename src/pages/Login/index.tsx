import React, { useState } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import img_pc from "../../assets/image_pc.png";
import icon_user from "../../assets/icon-user.svg";
import icon_compass from "../../assets/Logo-Compasso-Branco-hor.svg";

import { Button } from "../../components/Button";
import Input from "../../components/LoginInput";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { url } from "inspector";
import FormInput from "../../components/LoginInput";

import { useNameContext } from "../../context/Name/NameContext";

import LoginInput from "../../components/LoginInput";

const Box = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
	box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
	display: flex;
	@media only screen and (max-width: 1440px) and (max-height: 900px) {
		height: 900px;
	}
	@media only screen and (max-width: 1100px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const DivForm = styled.div`
	width: 50%;
	min-height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: 1440px) and (max-height: 900px) {
		height: 800px;
		min-height: 700px;
	}
	@media only screen and (max-width: 1100px) {
		min-height: 500px;
		max-width: 418px;
		width: 100%;
		height: 90%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
	}
`;

const Infos = styled.form`
	width: 327px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media only screen and (max-width: 1024px) {
		height: 94%;
		align-content: center;
	}
	@media only screen and (max-width: 375px) {
		overflow: hidden;
	}
	@media only screen and (max-width: 320px) {
		width: 90%;
	}
`;

const Paragraph = styled.p`
	display: flex;
	width: 283px;
	font-weight: 700;
	font-size: 16px;
	color: #e9b425;
	justify-content: space-around;
	margin-left: 1.5rem;
	@media only screen and (max-width: 1024px) {
		margin-left: 0rem;
	}
`;
const Imagem = styled.div`
	display: flex;
	justify-content: space-around;
	background-image: url(${img_pc});
	background-repeat: no-repeat;
	background-size: cover;
	width: 50%;
	height: 100%;
	@media only screen and (max-width: 1100px) {
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
`;

const H1 = styled.p`
	max-width: 327px;
	font-size: 60px;
	text-align: left;
	@media only screen and (max-width: 1100px) {
		font-size: 45px;
	}
`;

const P = styled.p`
	font-size: 16px;
	width: 301px;
	// margin-top: 5px;
	text-align: left;
	@media only screen and (max-width: 1100px) {
		// margin-top: 4px;
	}
	@media only screen and (max-width: 280px) {
		width: 100%;
	}
`;
const PFinal = styled.p`
	font-size: 16px;
	width: 301px;
	/* margin-left: 0.4rem; */
	// margin-top: 5px;
	text-align: center;
	@media only screen and (max-width: 1100px) {
		// margin-top: 4px;
	}
	@media only screen and (max-width: 280px) {
		text-align: center;
		margin-left: 0rem;
		width: 90%;
	}
`;

const ImagemHeader = styled.img`
	display: none;
	@media only screen and (max-width: 1100px) {
		display: inline;
		width: 200px;
		margin-top: 35px;
		margin-left: -10px;
	}
`;

const DivInput = styled.div`
	width: 115%;
	padding-top: 0.4rem;
	@media only screen and (max-width: 1100px) {
		width: 107%;
		display: flex;
		flex-direction: column;
		align-items: left;
	}
	@media only screen and (max-width: 375px) {
		width: 107%;
	}
	@media only screen and (max-width: 320px) {
		width: 108%;
		display: flex;
		flex-direction: column;
		align-items: left;
	}
`;
export function Login() {
	const navigate = useNavigate();
	const [invalid, setInvalid] = useState(true);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { name, setName, boolean, setBoolean } = useNameContext();

	const firebaseConfig = {
		apiKey: "AIzaSyDHY8Woz1ti96rIW9a7Tat9a7gOFGDxZ4o",
		authDomain: "projetofinalcompass-36b71.firebaseapp.com",
		projectId: "projetofinalcompass-36b71",
		storageBucket: "projetofinalcompass-36b71.appspot.com",
		messagingSenderId: "182240882315",
		appId: "1:182240882315:web:a59294af40b07308d5ee8e",
	};

	firebase.initializeApp(firebaseConfig);

	async function onFinish(event: any) {
		event.preventDefault();

		firebase
			.database()
			.ref("users")
			.on("value", function (snapshot) {
				snapshot.forEach(function (item) {
					if (item.val().email === email) {
						setName(item.val().name);
						console.log(item.val().name);
					}
				});
			});

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				setBoolean(true);
				navigate("/home");
				console.log(email, password, name);
			})
			.catch((error) => {
				setInvalid(false);
				if (
					error.code == "auth/wrong-password" ||
					error.code == "auth/user-not-found"
				) {
					return;
				}
			});
	}

	return (
		<Box>
			<ImagemHeader src={icon_compass}></ImagemHeader>
			<DivForm>
				<Infos onSubmit={(event) => onFinish(event)}>
					<div style={{ height: "20%" }}>
						<H1>Olá,</H1>
						<P>
							Para continuar navegando de forma segura, efetue o login na rede.
						</P>
					</div>
					<DivInput>
						<h4
							style={{ fontSize: "30px", textAlign: "left", maxWidth: "327px" }}
						>
							Login
						</h4>
						<LoginInput
							placeholder="Email"
							type="name"
							name="name"
							value={email}
							invalid={invalid}
							onChange={({ target }) => setEmail(target.value)}
						/>
						<LoginInput
							placeholder="Senha"
							type="password"
							name="password"
							value={password}
							invalid={invalid}
							onChange={({ target }) => setPassword(target.value)}
						/>
					</DivInput>
					{/* <div style={{display:invalid ? "none": "vidible", textAlign: "center", marginLeft: "50px"}}></div> */}
					<div
						style={{
							display: "flex",
							justifyContent: "space-around",
						}}
					>
						{!invalid && (
							<Paragraph style={{ textAlign: "center" }}>
								Ops, usuário ou senha inválidos. Tente novamente!
							</Paragraph>
						)}
					</div>
					<Button>Continuar</Button>
					<div style={{ display: "flex", justifyContent: "space-around" }}>
						<PFinal>
							Não possui uma conta?{" "}
							<a style={{ color: "#FF2D04" }} href="/signup">
								{" "}
								Cadastre-se
							</a>
						</PFinal>
					</div>
				</Infos>
			</DivForm>
			<Imagem>
				<Logo />
			</Imagem>
		</Box>
	);
}
