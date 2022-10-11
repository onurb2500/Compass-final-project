import React from "react";
import styled from "styled-components";

export function Button({ children }: { children: string }) {
	const ButtonSubmit = styled.button`
		width: 354px;
		height: 64px;
		margin: 3rem 0;
		border: none;
		background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
		box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
		border-radius: 50px;
		filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));
		font-size: 18px;
		@media only screen and (max-width: 1024px) {
			width: 327px;
		}
		@media only screen and (max-width: 375px) {
			width: 100%;
			filter: drop-shadow(0px 8px 4px #00000045);
		}
	`;

	return <ButtonSubmit>{children}</ButtonSubmit>;
}
