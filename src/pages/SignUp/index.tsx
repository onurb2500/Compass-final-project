import React, { FormEvent, useState } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import { useNavigate } from "react-router-dom";

import icon_compass from "../../assets/Logo-Compasso-Branco-hor.svg";

import { Button } from "../../components/Button";
import FormInput from "../../components/Input";
import {
	Box,
	ImagemHeader,
	DivForm,
	Infos,
	H1,
	P,
	DivInput,
	Imagem,
	Logo,
} from "./styles";
import {useNameContext} from "../../context/Name/NameContext"

export function SignUp() {
	const {name, setName} = useNameContext();
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordRepeat, setPasswordRepeat] = useState("");

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

	function onSignUp(event: any) {
		event.preventDefault();
		console.log(email, password);

		console.log(event);

        const data = {
            name: name,
            lastName: lastName, 
            email: email,
            password: password,
        }

        firebase.database().ref().child('users').push(data)

		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				navigate("/login");
				alert("Usuário cadastrado com sucesso!");
			})
			.catch((error) => {
				console.log(error);
			});
	}
	function text(event: any) {
		console.log(name);
	}
	return (
		<Box>
			<ImagemHeader src={icon_compass}></ImagemHeader>
			<DivForm>
				<Infos onSubmit={(event) => onSignUp(event)}>
					<div style={{ height: "20%" }}>
						<H1>Olá,</H1>
						<P>
							Para continuar navegando de forma segura, efetue o cadastro na
							rede.
						</P>
					</div>
					<h4 style={{ fontSize: "30px", textAlign: "left" }}>Cadastro</h4>
					<DivInput>
						<FormInput
							placeholder="Nome"
							type="name"
							name="name"
							value={name}
							onChange={({ target }) => setName(target.value)}
						/>
						<FormInput
							placeholder="Sobrenome"
							type="name"
							name="lastName"
							value={lastName}
							onChange={text}
						/>
						<FormInput
							placeholder="Email"
							type="text"
							name="email"
							value={email}
							onChange={({ target }) => setEmail(target.value)}
						/>
						<FormInput
							placeholder="Senha"
							type="password"
							name="password"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
						<FormInput
							placeholder="Repetir senha"
							type="password"
							name="passwordRepeat"
							value={passwordRepeat}
							onChange={({ target }) => setPasswordRepeat(target.value)}
						/>
					</DivInput>
					<Button>Continuar</Button>
				</Infos>
			</DivForm>
			<Imagem>
				<Logo />
			</Imagem>
		</Box>
	);
}

function initializeApp(firebaseConfig: {
	apiKey: string;
	authDomain: string;
	projectId: string;
	storageBucket: string;
	messagingSenderId: string;
	appId: string;
}) {
	throw new Error("Function not implemented.");
}
