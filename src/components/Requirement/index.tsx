import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FiCircle } from "react-icons/fi";
import { DivReq, ParaRequi } from "./styles";

const Requirement = () => {
	return (
		<DivReq>
			<p>Sua senha deve possuir no mínimo:</p>
			<div>
				<div style={{ display: "flex" }}>
					<FiCircle />
					<ParaRequi>6 Caracteres</ParaRequi>
				</div>
				<div style={{ display: "flex" }}>
					<FiCircle />
					<ParaRequi>1 Letra maiúscula</ParaRequi>
				</div>
				<div style={{ display: "flex" }}>
					<FiCircle />
					<ParaRequi>1 Letra minúscula</ParaRequi>
				</div>
				<div style={{ display: "flex" }}>
					<FiCircle />
					<ParaRequi>1 Caractere especial: !@#$%^&</ParaRequi>
				</div>
				<div style={{ display: "flex" }}>
					<FiCheckCircle />
					<ParaRequi>1 Número</ParaRequi>
				</div>
			</div>
		</DivReq>
	);
};

export default Requirement;
