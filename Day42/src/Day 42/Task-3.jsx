import { useState } from "react";

function Toggole (){
    const[onn, seton] = useState(false)
    return(
        <div>
            <button onClick={()=>seton(!onn)}>
                {
                    onn ? "ON":"OFF"
                }

            </button>
        </div>
    )
}
export default Toggole;