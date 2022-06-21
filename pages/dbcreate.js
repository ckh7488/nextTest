import { useState } from "react";

export default function dbc(){
    const [counter, setCounter] = useState(0);
    return (
        <button onClick={()=>{
            setCounter(counter+1);
            fetch(`http://localhost:3000/api/createDbCollections/${counter}`).then(r=>r.json()).then(console.log)
        }}>{counter}</button>
    )
}