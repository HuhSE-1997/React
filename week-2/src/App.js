import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Quiz from "./Quiz";
import Start from "./Start";
import Score from "./Score";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "르탄이",
      page: "quiz",
      list: [
        { question: "르탄이는 1살이다", answer: "o" },
        { question: "르탄이는 2살이다", answer: "o" },
        { question: "르탄이는 3살이다", answer: "o" },
        { question: "르탄이는 4살이다", answer: "o" },
        { question: "르탄이는 5살이다", answer: "o" },
        { question: "르탄이는 6살이다", answer: "o" },
      ],
      contents:"이 정도면 아주 친한 친구 사이 ! 앞으로 더 친하게 지내요 :)"
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.page === "quiz" && <Quiz list={this.state.list}/>}
        {this.state.page === "start" && <Start name={this.state.name} />}
        {this.state.page === "score" && <Score contents={this.state.contents} name={this.state.name}/>}
      </div>
    );
  }
}
export default App;
