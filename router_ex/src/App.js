import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import Cat from "./Cat"
import Dog from "./Dog";
import { withRouter} from "react-router-dom"




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
      <div>
        <Link to ="/">go to Home</Link>
        <Link to="/cat">go to Cat</Link>
        <Link to="/dog">go to Dog</Link>
      </div>


      <Route path="/" exact component={Home}/>
      <Route path="/cat" component={Cat}/>
      <Route path="/dog" component={Dog}/>


      <button onClick = {()=>
      this.props.history.push('/cat')
      }>Cat 으로 가기</button>

      <button onClick = {()=> this.props.history.goBack()}> back </button>
    </div>
    )
  }
}

export default withRouter(App);
