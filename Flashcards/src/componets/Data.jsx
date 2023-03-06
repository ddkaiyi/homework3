import React ,{useState}from "react"
export default function  Data({flashcard}){
    const [flip,setFlip]=useState(false)
    return(

<div className="data" onClick={()=>setFlip(!flip)}>
<div className='card' >
   {<h2>{flip? flashcard.Answer:flashcard.question}</h2>}
   
 
   </div>
   {/* <button>next</button> */}
</div>

    )
}
