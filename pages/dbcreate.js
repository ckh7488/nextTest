import { useState } from "react";

export default function dbc(){
    const [counter, setCounter] = useState(0);
    return (
        <button onClick={()=>{
            setCounter(counter+1);
            fetch(`/api/createDbCollections/${counter}`).then(r=>r.json()).then(console.log)
        }}>{counter}</button>
    )
}