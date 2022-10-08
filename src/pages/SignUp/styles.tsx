import styled from "styled-components";

import img_pc from "../../assets/image_pc.png";
import icon_compass from "../../assets/Logo-Compasso-Branco-hor.svg";


export const Box = styled.div`
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
		justify-content: space-between;
		align-items: center;
	}
`;

export const DivForm = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	@media only screen and (max-width: 1440px) and (max-height: 900px) {

	}
	@media only screen and (max-width: 1100px) {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 5%;
	}
`;

export const Infos = styled.form`

	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media only screen and (max-width: 1440px) and (max-height: 900px) {
		padding-bottom: 0px;
	}
	@media only screen and (max-width: 1500px) {
		/* padding-left: 20%; */
	}
	@media only screen and (max-width: 1100px) {
		height: 94%;
		padding-left: 0px;
		align-content: center;
		padding: 0;

	}
`;

export const Paragraph = styled.p`
	display: flex;
	width: 283px;
	font-weight: 700;
	font-size: 16px;
	color: #e9b425;
	justify-content: space-around;
`;
export const Imagem = styled.div`
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

export const Logo = styled.div`
	margin-top: 35px;
	background-image: url(${icon_compass});
	background-repeat: no-repeat;
	background-size: cover;
	width: 306px;
	height: 69px;
`;

export const H1 = styled.p`
	font-size: 60px;
	text-align: left;
	@media only screen and (max-width: 1100px) {
		font-size: 45px;
	}
`;

export const P = styled.p`
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

export const Label = styled.p`
	width: 100%;
	// margin-top: 5px;

	margin-bottom: 5px;
	@media only screen and (max-width: 1100px) {
		// margin-top: 4px;
	}
	@media only screen and (max-width: 280px) {
		width: 100%;
	}
`;

export const ImagemHeader = styled.img`
	display: none;
	@media only screen and (max-width: 1100px) {
		display: inline;
		width: 200px;
		margin-top: 35px;
		margin-left: -10px;
	}
`;

export const DivInput = styled.div`
	@media only screen and (max-width: 1100px) {
		width: 93%;
		display: flex;
		flex-direction: column;
		align-items: left;
	}
`;