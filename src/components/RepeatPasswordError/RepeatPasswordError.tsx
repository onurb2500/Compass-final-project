import { useState } from "react";
import styled from "styled-components";

const DivMessageError = styled.div`
    color: white;
    margin-top: -0.5rem;
    margin-left: .4rem;
`
interface ITest {
    repeatedPassword: boolean
}

const RepeatPasswordError = ({repeatedPassword}: ITest) => {
    const [repeatedPasswordST, setRepeatedPasswordST] = useState(true)
    return (
        <div>
            {(repeatedPassword) ? <DivMessageError>As senhas devem ser iguais</DivMessageError> : <></>}
        </div>
    )
}

export default RepeatPasswordError;