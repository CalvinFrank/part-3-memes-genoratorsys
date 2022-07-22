import React from "react";
import memes from "../memes";

function Main() {
    let [randMeme, SetRandMeme] = React.useState(null)
    
    function onclick() {
        SetRandMeme(memes.data.memes[Math.round(Math.random() * 100)])
        console.log(randMeme.url);
        return <img src={randMeme.url}/>
    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button className="form--button" onClick={onclick}>
                    Get a new meme image 🖼
                </button>
                {onclick}
            </div>
        </main>
    )
}

export default Main