import React, { useState, useEffect } from "react";
import Head from "next/head";
import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizLogo from "../src/components/QuizLogo";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import PrimaryButton from "../src/components/PrimaryButton";

const LoadingWidget = () => {
  return (
    <Widget>
      <Widget.Header>Loading...</Widget.Header>
      <Widget.Content>[Loading challenge</Widget.Content>
    </Widget>
  );
};

const QuestionWidget = ({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
}) => {
  const questionId = `question_${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" /> */}
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>
      <img
        alt="Description"
        style={{
          width: "100%",
          height: "100% ",
          objectFit: "cover",
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative_${alternativeIndex}`;
            return (
              <Widget.Topic as="label" htmlFor={alternativeId}>
                <input id={alternativeId} name={questionId} type="radio" />
                {alternative}
              </Widget.Topic>
            );
          })}
          <PrimaryButton type="submit">Confirmar</PrimaryButton>
        </form>
      </Widget.Content>
    </Widget>
  );
};

const screenStates = {
  QUIZ: "QUIZ",
  LOADING: "LOADING",
  RESIZE: "RESULT",
};

export default function QuizPage() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = db.questions[questionIndex];

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  const handleSubmit = () => {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>{db.title}</title>
        <link
          rel="shortcut icon"
          href="https://www.vippng.com/png/full/464-4645671_clipart-eye-vector-eye-of-sauron-clipart.png"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <QuizContainer fontFamily="MedievalSharp">
        <QuizLogo />

        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmit}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULT && (
          <div>Respostas corretas X !</div>
        )}
      </QuizContainer>
    </QuizBackground>
  );
}
