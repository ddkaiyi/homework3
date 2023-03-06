import React ,{useState}from "react"
import Data from "./Data";
export default function  Form({flashcards,id}){

    return(
<div className="Form">
  {/* <p>yes</p> */}
 {flashcards.map(flashcard=>{
  if(flashcard.id==id){return (<Data flashcard={flashcard}  />

  )}
  
  
 })}


</div>
    )
}
