//REACT IMPORTS
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNameContext } from "../../context/Name/NameContext";

//FIREBASE IMPORTS
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

//IMAGES
import icon_compass from "../../assets/Logo-Compasso-Branco-hor.svg";

//COMPONENTS
import { Button } from "../../components/Button";
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
	Label,
} from "./styles";
import SignUpInput from "../../components/SingUpInput";
import Requirement from "../../components/Requirement";
import { textSpanEnd } from "typescript";

export function SignUp() {
	const { name, setName } = useNameContext();
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
	// const database = getFirestore(app);
	// const collectionRef = collection(database, 'users')

	function onSignUp(event: any) {
		event.preventDefault();

		const data = {
			name: name,
			lastName: lastName,
			email: email,
			password: password,
		};

		firebase.database().ref().child("users").push(data);

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(() => {
				navigate("/login");
				alert("Usuário cadastrado com sucesso!");
			})
			.catch((error) => {
				console.log(error);
			});
	}

	const [letters, setLetters ] = useState(false)
	const [upper, setUpper] = useState(false)
	const [lower, setLower] = useState(false)
	const [special, setSpecial] = useState(false)
	const [number, setNumber] = useState(false)

	const lettersRegex = new RegExp("^(?=.{6,})")
	const upperRegex = new RegExp("^(?=.*[A-Z])")
	const lowerRegex = new RegExp("^(?=.*[a-z])")
	const specialRegex = new RegExp("^(?=.[!@#$%^&])")
	const numberRegex = new RegExp("^(?=.*[0-9])")

	

	function CheckList(event:any) {

		if(lettersRegex.test(event)) {
			setLetters(true);
		} else {
			setLetters(false);
		}

		if(upperRegex.test(event)) {
			setUpper(true);
		} else {
			setUpper(false);
		}

		if(lowerRegex.test(event)) {
			setLower(true);
		} else {
			setLower(false);
		}

		if(specialRegex.test(event)) {
			setSpecial(true);
		} else {
			setSpecial(false);
		}

		if(numberRegex.test(event)) {
			setNumber(true);
		} else {
			setNumber(false);
		}
		console.log(letters, upper, lower, special, number);
		
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
						<Label>Qual o seu nome?</Label>
						<SignUpInput
							placeholder="Nome"
							type="name"
							name="name"
							value={name}
							onChange={({ target }) => setName(target.value)}
						/>
						<Label>Qual o seu sobrenome?</Label>
						<SignUpInput
							placeholder="Sobrenome"
							type="name"
							name="lastName"
							value={lastName}
							onChange={(({ target }) => setLastName(target.value))}						/>
						<Label>Qual o seu email?</Label>
						<SignUpInput
							placeholder="Email"
							type="text"
							name="email"
							value={email}
							onChange={(({ target }) => setEmail(target.value))}
						/>
						<Label>Crie uma senha</Label>
						<SignUpInput
							placeholder="Senha"
							type="password"
							name="password"
							value={password}
							onChange={(event) => (CheckList(event.target.value), setPassword(event.target.value))}
						/>
						<Requirement/>
						<Label>Repita sua senha</Label>
						<SignUpInput
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
