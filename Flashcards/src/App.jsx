



import './App.css';
import Form from './componets/Form';
import React,{ useState } from 'react';


function App () {
  const [flashcards,setFlashcards]=useState(SAMPLE_FLASKCARS)
  const[answer,setAnswer]=useState()
  const[answer2,setAnswer2]=useState()
  const[id,setId]=useState(1)
  const nextpass=()=>{
    
    {setId((id+1)%10)
      setAnswer('');
    }
    

    
  }
  const frontpass=()=>{
    
    {if(id-1<0){setId(9)}
      else{setId((id-1)%10)}
      setAnswer('');
    }
    

    
  }
  const[score,setScore]=useState(0);
  const change=(e)=>{
setAnswer(e.target.value)
  }
  const submit=(e)=>{
setAnswer2(answer)

for(var i=0;i<SAMPLE_FLASKCARS.length;i++){

  if(answer2==SAMPLE_FLASKCARS[id].Answer)
 { e.target.className="cor"
setScore(score+1)

nextpass()}
else{
  e.target.className="wro"
nextpass()
}

}


  }
  const click=()=>{
    alert(click);
  }
 
  return (
    <div className="App">
    
     <h1>NEW YORK DMV PRACTICE TEST</h1>
     <h2>This is a practice test for NEW YROK DMV </h2>
    <p>Number of cards: 10</p>
    <p>Current Streak:{score}, Longest Streak: 0</p>
 
    <Form flashcards={flashcards} id={id} />
    <textarea name="answer" id="" cols="20" rows="1" onChange={change} value={answer}></textarea>
    <button onClick={submit}> submit</button>
    <button onClick={frontpass}>before</button>
   <button onClick={nextpass}>next</button>
 </div>

    
  )
}
  const SAMPLE_FLASKCARS=[{
    id:0,
    question:'One broken line indicates:',
    Answer:'You can pass other vehicles or change lanes if you can do so safely without interfering with traffic.'

  },
  {
    id:1,
    question:'What does this sign mean?',
    Answer:'high way starts ahead'
  
  },
 {
  id:2,
  question:'Drivers may need more space in front of their vehicle:',
  Answer:'when carrying a heavy load or pulling a trailer.'

 },
{
  id:3,
  question:'If your car goes into water, you should:',
  Answer:'call the fire department immediately.'

},
{
  id:4,
  question:'The NYS law requires drivers to use their headlights:',
  Answer:'from one-half hour after the sun sets to one-half hour before the sun rises.'

},
{
  id:5,
  question:'What does this ‘Soft Shoulder’ sign indicate?',
  Answer:'Drive on the shoulder if you have soft tyres.'

},
{
  id:6,
  question:'What does a NO STANDING sign mean?',
  Answer:'Vehicles can stop only to obey a traffic sign, signal or officer.'

},
{
  id:7,
  question:'U-turns are illegal:',
  Answer:'on limited access expressways.'

},
{
  id:8,
  question:'For protection, motorcyclists are required to:',
  Answer:'keep their headlights and taillights on at all times.'

},
{
  id:9,
  question:'for an emergency vehicle using flashing lights, a siren, or an air horn that is approaching you from either direction you should:',
  Answer:'Pull over to right and stop'

}


]




export default App