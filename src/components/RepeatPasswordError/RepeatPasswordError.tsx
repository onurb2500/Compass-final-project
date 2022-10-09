import { useState } from "react";
import styled from "styled-components";

const DivMessageError = styled.div`
    color: yellow;
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