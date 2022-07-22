import React from "react";
import memeFace from "../imgs/memeFace.jpeg"

function Header() {
    return (
        <header>
            <img src={memeFace}/>
            <h3>Meme Generator</h3>
            <h4>React Course - Project 3</h4>
        </header>
    )
}

export default Header