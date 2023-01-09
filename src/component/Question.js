import React from "react";
import Start from "./Start";
import Qcard from "./Qcard";
function Question() {
    const [apiQuestions, setApiQuestions] = React.useState([]);
    const [questions, setQuestions] = React.useState([]);

    // getting data from api
    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then((res) => res.json())
            .then((data) => setApiQuestions(data.results));
    }, []);

    console.log(questions.length);
    console.log(apiQuestions);
    // console.log(apiQuestions[0].incorrect_answers)
    // setting data
    function requestQ() {
        setQuestions(
            apiQuestions.map((Question) => {
                const Answers = Question.incorrect_answers.concat(
                    Question.correct_answer
                )
                const ans = Answers.sort();

                return {
                    question: Question.question,
                    answers: ans,
                    correctAnswer: Question.correct_answer,
                };
            })
        );
    }

    const questionCards= questions.map(data=>
        <Qcard question={data.question}
            answers={data.answers}
            correctAnswer={data.correctAnswer}
        />
    )

    console.log(questionCards)
    return (
        <>
            {questions.length > 0 ? (
             <div  className="card-container">{questionCards}</div>
            ) : (

                <Start handler={requestQ} />
            )}
        </>
    );
}
export default Question;
