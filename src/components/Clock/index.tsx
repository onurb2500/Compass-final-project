import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Span = styled.span` 
    width: 109px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF;
`

const Seconds = styled.span`
    font-weight: 700;
    font-size: 48px;
`

export function Clock (any: any) {
    const [seconds, setSeconds] = useState(60)

    const navigate = useNavigate()

    function goLogin () {
        navigate("/login")
    }

    useEffect(() => {
        setTimeout(() => {
            setSeconds(seconds - 1) 
            if (seconds===0) {
                goLogin();
            }
        }, 1000);
    }, [seconds])

    return (
        <>  
            <div style={{display:"flex", alignItems:"center"}}>
                <Span>Application Refreash in</Span>
                <div style={{display:"flex", flexDirection:"column", textAlign:"center"}}>
                    <Seconds>{seconds}</Seconds>
                    <Span>seconds</Span>
                </div>
            </div>
        </>
    )
}