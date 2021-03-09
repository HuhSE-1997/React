import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import image from "./123.png";

const Quiz = () => {
  return (
    <QuizContainer>
      <p>
        <span>5번 문제</span>
      </p>
      <Contents>문제입니다</Contents>
      <AnswerZone>
        <Answer>o</Answer>
        <Answer>x</Answer>
      </AnswerZone>
      <DragItem>
          <div>
        <img src={image} alt="sparta" />
        </div>
      </DragItem>
    </QuizContainer>
  );
};

const QuizContainer = styled.div`
  & > p > span {
    padding: 8px 16px;
    background-color: #fef5d4;
    // border-bottom: 3px solid #ffd6aa;
    border-radius: 30px;
  }
`;

const Contents = styled.h1`
  font-size: 1.5em;
`;

const AnswerZone = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 70vh;
`;

const Answer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  font-weight: 600;
  color: #dadafc77;
`;
const DragItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  & > div {
    border-radius: 500px;
    background-color: #ffd6aa;
  }
  & img {
    max-width: 150px;
  }
`;
export default Quiz;
