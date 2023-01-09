import React from "react";
// import Question from "./component/Question"
import Blob from "./component/Blob";
import Start from "./component/Start";
import { nanoid } from "nanoid";
import { shuffle, decodeHtml } from "./utils";
import "./app.css";
function App() {
  const [questions, setQuestions] = React.useState([]);

  // getting questions from api
  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuestions(generateQuiz(data.results)));
      // .then(data=>console.log(data))
  }, []);

  function generateQuiz(apiData) {
    const quizQuestion = apiData.map((quiz) => {
      return {
        id: nanoid(),
        question: decodeHtml(quiz.question),
        answers: shuffle(generateAnswer(quiz)),
      };
    });
    return quizQuestion;
  }
  function generateAnswer(dataFromApi) {
    const incorrectAnswers = dataFromApi.incorrect_answers;
    const correctAnswer = dataFromApi.correct_answer;
    const answers = incorrectAnswers.map((incorrectAnswer) => {
      return {
        id: nanoid(),
        value: incorrectAnswer,
        isCorrect: false,
        isChecked: false,
      };
    });
    answers.push({
      id: nanoid(),
      value: correctAnswer,
      isCorrect: true,
      isChecked: false,
    });
    return answers;
  }

  console.log(questions);
  return (
    <>
      <Blob />
      {/* <Question/> */}
      <Start />
    </>
  );
}

export default App;
