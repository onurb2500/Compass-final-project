import { type } from "@testing-library/user-event/dist/type"
import React, { InputHTMLAttributes } from "react"
import { Container, Input } from "./styled";

interface ISignUpInput extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string,
    type: string,
    value: string,
    onChange?: (value:any) => void;
}

const SignUpInput = ({placeholder, type, name, value, onChange}: ISignUpInput) => {
    return (
        <Container>
			<Input
				placeholder={placeholder}
				type={type}
				name={name}
				defaultValue={value}
				onChange={onChange}
			/>
		</Container>
    )
}

export default SignUpInput;
