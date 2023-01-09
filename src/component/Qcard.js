function Qcard(props){
    const answer=[props.correctAnswer,...props.answers]

    const isChecked=true
    const styles={
        borderColor :isChecked?"#D6DBF5":"",
        background : isChecked?"#D6DBF5":""
    }
    console.log(props.question)
    console.log(answer)
    return(
        <div className="card">
         <h3 className="question">{props.question}</h3>
            <div className="answer-container">
                <p className="answer" style={styles}>{answer[0]}</p>
                <p className="answer" style={styles}>{answer[2]}</p>
                <p className="answer" style={styles}>{answer[1]}</p>
                <p className="answer" style={styles}>{answer[3]}</p>
            </div>
            <hr className="line"/>
        </div>
    )
}
export default Qcard