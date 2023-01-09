function Qcard(props){
    const answers=[props.correctAnswer,...props.answers]
    console.log(props.question)
    return(
        <div className="card">
         <h3 className="question">{props.question}</h3>
            <div className="answer-container">
                <p className="answer">{answers[0]}</p>
                <p className="answer">{answers[1]}</p>
                <p className="answer">{answers[2]}</p>
                <p className="answer">{answers[3]}</p>

            </div>
            <hr className="line"/>
        </div>
    )
}
export default Qcard