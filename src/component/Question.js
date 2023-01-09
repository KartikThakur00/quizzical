// import React from "react";
// import Start from "./Start";
// import Qcard from "./Qcard";
// import { nanoid } from "nanoid";

function Question() {
  const [apiQuestions, setApiQuestions] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);

  // getting data from api
  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => setApiQuestions(data.results));
  }, []);

  // console.log(questions.length);
  console.log(apiQuestions);

//   // setting data
//   function requestQ() {
//     setQuestions(
//       apiQuestions.map((Question) => {
//         const answers = Question.incorrect_answers.map((A) => (decodeHtml(A)));

//         return {
//           id: nanoid(),
//           question: decodeHtml(Question.question),
//           incorrectAnswers: answers,
//           correctAnswer: decodeHtml(Question.correct_answer),
//         };
//       })
//     );
//   }

//   const questionCards = questions.map((data) => (
//     <Qcard
//       key={data.id}
//       question={data.question}
//       answers={data.incorrectAnswers}
//       correctAnswer={data.correctAnswer}
//     />
//   ));

//   console.log(questionCards);
  return (
    <>
      {questions.length > 0 ? (
        <div className="card-container">
          {questionCards}
          <button className="check-button">Check Answers</button>
        </div>
      ) : (
        <Start handler={requestQ} />
      )}
    </>
  );
}
export default Question;
