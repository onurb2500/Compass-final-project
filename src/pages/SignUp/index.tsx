//REACT IMPORTS
import React, { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNameContext } from "../../context/Name/NameContext";

//FIREBASE IMPORTS
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

//IMAGES
import icon_compass from "../../assets/Logo-Compasso-Branco-hor.svg";

//COMPONENTS
import { ButtonSignUp } from "../../components/ButtonSignUp";
import {
	Box,
	ImagemHeader,
	DivForm,
	Infos,
	H1,
	P,
	PFinal,
	DivInput,
	Imagem,
	Logo,
	Label,
	Title,
	Error,
} from "./styles";
import SignUpInput from "../../components/SingUpInput";
import Requirement from "../../components/Requirement";
import RepeatPasswordError from "../../components/RepeatPasswordError/RepeatPasswordError";

export function SignUp() {
	const { name, setName } = useNameContext();
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordRepeat, setPasswordRepeat] = useState("");
	const [repeatedPassword, setRepeatedPassword] = useState(true);
	const [invalidData, setInvalidData] = useState(false);

	const navigate = useNavigate();

	// IMPLEMENTAÇÃO FIREBASE

	const firebaseConfig = {
		apiKey: "AIzaSyDHY8Woz1ti96rIW9a7Tat9a7gOFGDxZ4o",
		authDomain: "projetofinalcompass-36b71.firebaseapp.com",
		projectId: "projetofinalcompass-36b71",
		storageBucket: "projetofinalcompass-36b71.appspot.com",
		messagingSenderId: "182240882315",
		appId: "1:182240882315:web:a59294af40b07308d5ee8e",
	};

	firebase.initializeApp(firebaseConfig);

	const data = {
		name: name,
		lastName: lastName,
		email: email,
		password: password,
	};

	function validateSignUp() {
		if (!repeatedPassword && name) {
			firebase.database().ref().child("users").push(data);

			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then(() => {
					navigate("/login");
				})
				.catch((error) => {
					console.log(error);
					setInvalidData(true);
				});
		} else {
			setInvalidData(true);
		}
	}

	function onSignUp(event: any) {
		event.preventDefault();

		validateSignUp();
	}

	const [validatePassword, setValidatePassword] = useState({
		letters: false,
		upper: false,
		lower: false,
		special: false,
		number: false,
	});

	function CheckList(event: any) {
		const lettersRegex = new RegExp(/^(?=.{6,})/);
		const upperRegex = new RegExp(/^(?=.*[A-Z]).+$/);
		const lowerRegex = new RegExp(/^(?=.*[a-z]).+$/);
		const specialRegex = new RegExp(/^(?=.*[!@#$%^&]).+$/);
		const numberRegex = new RegExp(/^(?=.*[0-9]).+$/);

		setValidatePassword({
			letters: lettersRegex.test(event),
			upper: upperRegex.test(event),
			lower: lowerRegex.test(event),
			special: specialRegex.test(event),
			number: numberRegex.test(event),
		});
	}

	useEffect(() => {
		if (
			password.length > 0 &&
			password === passwordRepeat &&
			validatePassword.letters &&
			validatePassword.lower &&
			validatePassword.upper &&
			validatePassword.special &&
			validatePassword.number
		) {
			setRepeatedPassword(false);
		} else {
			setRepeatedPassword(true);
		}
	}, [passwordRepeat, password]);

	return (
		<Box>
			<ImagemHeader src={icon_compass}></ImagemHeader>
			<DivForm>
				<Infos onSubmit={(event) => onSignUp(event)}>
					<Title>
						<H1>Olá,</H1>
						<P>
							Para continuar navegando de forma segura, efetue o cadastro na
							rede.
						</P>
					</Title>
					<h4
						style={{ fontSize: "30px", textAlign: "left", paddingTop: "1rem" }}
					>
						Cadastro
					</h4>
					<DivInput>
						{/* <Label>Qual o seu nome?</Label> */}
						<SignUpInput
							placeholder="Nome"
							type="name"
							name="name"
							value={name}
							onChange={({ target }) => setName(target.value)}
						/>
						{/* <Label>Qual o seu sobrenome?</Label> */}
						{/* <SignUpInput
							placeholder="Sobrenome"
							type="name"
							name="lastName"
							value={lastName}
							onChange={({ target }) => setLastName(target.value)}
						/> */}
						{/* <Label>Qual o seu email?</Label> */}
						<SignUpInput
							placeholder="Email"
							type="text"
							name="email"
							value={email}
							onChange={({ target }) => setEmail(target.value)}
						/>
						{/* <Label>Crie uma senha</Label> */}
						<SignUpInput
							placeholder="Senha"
							type="password"
							name="password"
							value={password}
							onChange={(event) => (
								setPassword(event.target.value), CheckList(event.target.value)
							)}
						/>
						<Requirement validatePassword={validatePassword} />
						<SignUpInput
							placeholder="Repetir senha"
							type="password"
							name="passwordRepeat"
							value={passwordRepeat}
							onChange={(event) => setPasswordRepeat(event.target.value)}
						/>
						<RepeatPasswordError repeatedPassword={repeatedPassword} />
						<ButtonSignUp>Continuar</ButtonSignUp>
						{invalidData ? (
							<Error>Preencha todos os campos corretamente</Error>
						) : (
							<></>
						)}
						<div style={{ display: "flex", justifyContent: "space-around" }}>
							<PFinal>
								Já possui uma conta?{" "}
								<a style={{ color: "#FF2D04" }} href="/login">
									{" "}
									Faça login
								</a>
							</PFinal>
						</div>
					</DivInput>
				</Infos>
			</DivForm>
			<Imagem>
				<Logo />
			</Imagem>
		</Box>
	);
}
