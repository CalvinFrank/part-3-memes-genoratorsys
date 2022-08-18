import React from "react"


export default function Box(props) {
 
    // const [on, setOn] = React.useState(props.on)
    // console.log(props.id)
    return (
        <div>
            <button onClick={() => {
                return props.onclick(props.id)}} style={{backgroundColor:(props.on ? "#8c8c8c" : "white")}}></button>
            <input type="text" placeholder="Put Todo Here"/>
        </div>
    )
}

