import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import memes from "./memes"

function Root() {
  // const meme = memes.data.memes.map( (meme) => {
  //   // console.log(meme)
  //   return (
  //     <Main
  //       memes={meme}
  //       key={memes.id}
  //     />
  //   )
  // })
  return (
    <div>
      <Header/>
      <Main/>
    </div>
  )
}

export default Root
