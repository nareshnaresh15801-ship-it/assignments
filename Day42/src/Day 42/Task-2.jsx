import { useState } from "react";

function TextDisplay(){
    const [value,setvalue] = useState("");
    return(
        <>
        <input type="text"
        placeholder="type something"
        value={value}
        onChange={(e)=>setvalue(e.target.value)} />

        <h4>type something:{value}</h4>
        </>

    );

}
export default TextDisplay;