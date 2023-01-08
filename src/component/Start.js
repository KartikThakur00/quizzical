function Start(props){
    return(
        <div className="start-container">
            <h1 className="start-title">Quizzical</h1>
            <p className="start-description">A Short 5 Question  Quiz App</p>
            <button className="start-button" onClick={props.handler}>Start Quiz</button>
        </div>
    )
}
export default Start;