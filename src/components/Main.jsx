import React from "react";
import Box from "./Box";
// import memes from "../memes";
import boxes from "../boxes"

function Main() {
    const [boxies, setBox] = React.useState(boxes)
    // Challenge: use a ternary to determine the backgroundColor.
    // If darkMode is true, set it to #222222
    // If darkMode is false, set it to #cccccc
    // console.log(boxies)
    function onclick(id) {
        // console.log(boxies)
        setBox(prevs => {
            const newSquares = []
            for(let i = 0; i < prevs.length; i++) {
                const currentSquare = prevs[i]
                if(currentSquare.id === id) {
                    const updatedSquare = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    newSquares.push(updatedSquare)
                } else {
                    newSquares.push(currentSquare)
                }
            }
            return newSquares
        })
    }
    const divBoxes = boxies.map( boxie => {
        // console.log(boxie)
        return <Box key={boxie.id} id={boxie.id} on={boxie.on} onclick={onclick}/>
    })
    // let [textMeme, SetRandMeme] = React.useState({
    //     randMeme:memes.data.memes[Math.round(Math.random() * 100)],
    //     topText:"",
    //     bottomText:""
    // })
    // const [allMemeImages, setAllMemeImages] = React.useState(memes)
    
    // function onclick() {
    //     SetRandMeme({
    //         ...textMeme,
    //         randMeme:allMemeImages.data.memes[Math.round(Math.random() * 100)]
    //     })
        // console.log(randMeme.url);
        // return <img src={randMeme.url}/>
    // }
    return (
        <main>
            {/* <h1>Boxes will go here</h1> */}
            {divBoxes}
        </main>
        // <main>
        //     <div className="form">
        //         <input 

        
        //             type="text"
        //             placeholder="Top text"
        //             className="form--input"
        //         />
        //         <input 
        //             type="text"
        //             placeholder="Bottom text"
        //             className="form--input"
        //         />
        //         <button className="form--button" onClick={onclick}>
        //             Get a new meme image 🖼
        //         </button>
        //     </div>
        //     <img src={textMeme.randMeme.url} className="randMeme" width={textMeme.width} height={textMeme.height}/>
        // </main>
    )
}

export default Main







