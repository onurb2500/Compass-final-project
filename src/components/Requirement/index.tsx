import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FiCircle } from "react-icons/fi";
import { DivMain, DivRequire, ParaRequi, ParaTitle, Requires } from "./styles";

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
		<DivMain>
			<ParaTitle>Sua senha deve possuir no mínimo:</ParaTitle>
			<Requires>
				<DivRequire>
					{validatePassword.letters ? <FiCheckCircle /> : <FiCircle />}
					<ParaRequi>6 Caracteres</ParaRequi>
				</DivRequire>
				<DivRequire>
					{validatePassword.upper ? <FiCheckCircle /> : <FiCircle />}
					<ParaRequi>1 Letra maiúscula</ParaRequi>
				</DivRequire>
				<DivRequire>
					{validatePassword.lower ? <FiCheckCircle /> : <FiCircle />}
					<ParaRequi>1 Letra minúscula</ParaRequi>
				</DivRequire>
				<DivRequire>
					{validatePassword.special ? <FiCheckCircle /> : <FiCircle />}
					<ParaRequi>1 Caractere especial: !@#$%^&</ParaRequi>
				</DivRequire>
				<DivRequire>
					{validatePassword.number ? <FiCheckCircle /> : <FiCircle />}
					<ParaRequi>1 Número</ParaRequi>
				</DivRequire>
			</Requires>
		</DivMain>
	);
};

export default Requirement;
