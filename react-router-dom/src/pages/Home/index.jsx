import { useState } from "react";

function HomePage() {
    const [cont, setCont] = useState(0)
    return (
        <>
            <h1>Pagina Home</h1>
            <button style={{padding:10, borderRadius: 10, border: 'none', backgroundColor: 'green', color: 'white', cursor: 'pointer', boxShadow: '1px 1px 10px 0 black'}} onClick={() => {setCont(cont + 1)}}>Count is {cont}</button>
        </>
    )
}

export default HomePage;

