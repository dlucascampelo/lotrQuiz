import styled from "styled-components";
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizLogo from "../src/components/QuizLogo";
import PrimaryButton from "../src/components/PrimaryButton";
import Input from "../src/components/Input";

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState("");
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>LOTR Quiz</title>
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
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <Input
                name="userName"
                onChange={(e) => setName(e.target.value)}
                placeholder="Digita teu nome pra jogar! Boa sorte =)"
                value={name}
              />
              <PrimaryButton type="submit" disabled={!name}>
                Play
              </PrimaryButton>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Outros Quizzes</h1>
          </Widget.Header>
          <Widget.Content>
            <p>lorem ipsum dolor sit amet, consectetur</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/dlucascampelo" />
    </QuizBackground>
  );
}
