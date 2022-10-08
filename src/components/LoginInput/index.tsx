import { InputHTMLAttributes, useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { Container, Icon, Input } from "./styled";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string;
	type?: string;
	invalid?: boolean;
	name: string;
	value: string;
	onChange: (value: any) => void;
}

const LoginInput = ({
	placeholder,
	type,
	invalid,
	name,
	value,
	onChange,
}: IInput) => {
	
	const [clicked, setClicked] = useState(false);

	return (
		<Container>
			<Input
				placeholder={placeholder}
				type={type}
				name={name}
				defaultValue={value}
				onChange={onChange}
				// onFocus={() => setClicked(true)}
				// onBlur={(event) => event.target.value.length > 0 ? setClicked(true) : setClicked(false)}
			/>
			<Icon clicked={clicked}>
				{type === "name" ? (
					<AiOutlineUser size={25} />
				) : (
					<MdLockOutline size={25} />
				)}
			</Icon>
		</Container>
	);
};

export default LoginInput;
