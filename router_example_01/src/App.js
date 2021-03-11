import logo from "./logo.svg";
import "./App.css";
import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
componentDidMount(){
  console.log(this.props)
}
  
  render() {
    return (
      <div className="App">
        <button></button>
      </div>
    );
  }
}

export default withRouter(App);
