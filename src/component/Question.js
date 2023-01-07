import React from "react"
import Start from "./Start"
function Question(){
    const [questions,setQuestions]= React.useState([])
    React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    // setQuestions()
    console.log(questions.length)
    return(
        <>
        {questions.length?<div></div>:<Start/>} 
        </>
    )
}
export default Question;