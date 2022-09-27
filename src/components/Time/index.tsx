import { useEffect, useState } from "react";

export function Time(any: any) {
    const [dateState, setDateState] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);
    return (
        <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}className="App">
        <p style={{fontSize:"144px", fontWeight:"700", color: "#222222", lineHeight: "144px"}}>
            {dateState.toLocaleString("pt-BR", {
            hour: "numeric",
            minute: "numeric",
          })}
        </p>
        <span style={{fontSize:"14px", fontWeight:"400", color: "#222222", marginTop: "-5%"}}>
          {" "}
          {dateState.toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>
    );
  }
