import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FiCircle } from "react-icons/fi";
import { DivReq, ParaRequi } from "./styles";

interface IRequirement {
	validatePassword: {
		letters: boolean;
		upper: boolean;
		lower: boolean;
		special: boolean;
		number: boolean;
	};
}

const Requirement = ({ validatePassword }: IRequirement) => {
	return (
		<DivReq>
			<p>Sua senha deve possuir no mínimo:</p>
			<div>
				<div style={{ display: "flex" }}>
					{validatePassword.letters ? <FiCheckCircle /> : <FiCircle />}
					<ParaRequi>6 Caracteres</ParaRequi>
				</div>
				<div style={{ display: "flex" }}>
					{validatePassword.upper ? <FiCheckCircle /> : <FiCircle />}
					<ParaRequi>1 Letra maiúscula</ParaRequi>
				</div>
				<div style={{ display: "flex" }}>
					{validatePassword.lower ? <FiCheckCircle /> : <FiCircle />}
					<ParaRequi>1 Letra minúscula</ParaRequi>
				</div>
				<div style={{ display: "flex" }}>
					{validatePassword.special ? <FiCheckCircle /> : <FiCircle />}
					<ParaRequi>1 Caractere especial: !@#$%^&</ParaRequi>
				</div>
				<div style={{ display: "flex" }}>
					{validatePassword.number ? <FiCheckCircle /> : <FiCircle />}
					<ParaRequi>1 Número</ParaRequi>
				</div>
			</div>
		</DivReq>
	);
};

export default Requirement;
