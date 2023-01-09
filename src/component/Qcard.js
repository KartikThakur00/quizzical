function Qcard(props){
    return(
        <div>
         <h3 className="question">{props.question}</h3>
            <div className="answer-container">
                <p className="answer">{props.answers[0]}</p>
                <p className="answer">{props.answers[1]}</p>
                <p className="answer">{props.answers[2]}</p>
                <p className="answer">{props.answers[3]}</p>

            </div>
            <hr className="line"/>
        </div>
    )
}
export default Qcard