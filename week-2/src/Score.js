import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const Score = (props) => {
  return (
    <ScoreContainer>
      <h1>
        <span>{props.name}</span> 퀴즈에 <br />
        대한 내점수는?
      </h1>

      <ScoreScore>
        <span>100</span>점
      </ScoreScore>

      <ScoreContents>
        <p>{props.contents}</p>
      </ScoreContents>
      <FirstButton>점수 보기</FirstButton>
      <SecondButton>량캉 보기</SecondButton>
    </ScoreContainer>
  );
};

const ScoreContainer = styled.div`
  & > h1 {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 25px;
    width: 300px;
 
    padding: 20px;
  }
  & > h1 > span {
    background-color: #fef5d4;
    border-radius: 25px;
  }
`;
const ScoreScore = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 200px;
  padding: 20px;
  font-size: 40px;

  & > span {
    font-weight: 700;
    background-color: #fef5d4;
    border-radius: 25px;
  }
`;

const ScoreContents = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 300px;
  padding: 20px;
  font-weight: 500;
`;

const FirstButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;
  border:none;
  background-color:#DBDAFB;
  width:300px;
  height:30px;
  border-radius:25px
`;

const SecondButton = styled.button`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;
  border:1px solid black;
  width:300px;
  height:30px;
  border-radius:25px
`;
export default Score;
