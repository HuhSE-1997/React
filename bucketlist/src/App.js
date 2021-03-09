import logo from './logo.svg';
import './App.css';
import React from 'react'
import BucketList from './BucketList';
import styled from 'styled-components'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list:["영화관가기", "강아지 산착하기", "책보기"]
    }
    this.text = React.createRef()
  }

  componentDidMount(){
    console.log(this.text)
    console.log(this.text.current)
  }

  CollectList =()=>{
    let list = this.state.list;
    const my_list = this.text.current.value

    this.setState({list:[...list, my_list]})
  }


render(){
  return (
    <div className="App">
    <Container>
      <Title>버킷 리스트</Title>
      <Line/>
      <BucketList list={this.state.list}/>
    </Container>
    <Input>
      <button onClick={this.CollectList}>추가하기</button>
      <input type="text" ref={this.text}></input>
    </Input>
    </div>
  );

  }
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;


const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
