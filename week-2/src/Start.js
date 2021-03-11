import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import image1 from './123.png'
import App from './App'



const Start =(props)=>{
    return (
        <StartOuter>
            <img src={image1} alt="gimochi"/>
            <StartFont>
                <p>나는 <span>{props.name}</span>에 대해서 얼마나 알고 있을까?</p>
            </StartFont>
            <StartInput placeholder="내 이름"/>
            <StartButton>시작하기</StartButton>
        </StartOuter>
    )
}

const StartOuter = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

width:700px;
height:700px
`
const StartFont = styled.div`

& > p > span {
    background-color:#fef5d4;
    border-radius:25px
}
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

width:250px;
font-size:20px;
text-align:center;
font-weight: 600;
`

const StartInput = styled.input`
position: absolute;
top: 60%;
left: 50%;
transform: translate(-50%, -50%);
width:300px;
height:25px;
border-radius:25px;
border:1px solid black;
text-align:center
`

const StartButton = styled.button`
position: absolute;
top: 70%;
left: 50%;
transform: translate(-50%, -50%);
border:none;
background-color:#C8DEFD;
border-radius:25px;
width:100px;
height:25px
`

export default Start;