// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

function App() {

  let name = "정수연";
  
  const style = {
    App: { backgroundColor:"#282c34", },
    whiteTxt: { color:"#fff", },
    boldTxt: { color:"#61dafb", },
  };

  const number = 5;

  return (
    <div style={style.App}>
      <MyHeader />
      <header className="App-header">
        <h2 style={style.whiteTxt}>안녕 리액트 {name}</h2>
        <p style={style.whiteTxt}>{number}는 : {number % 2 === 0 ? "짝수" : "홀수"}</p>
        <strong class="boldTxt" style={style.boldTxt}>React.js</strong>
      </header>
      <MyFooter />
    </div>
    // <React.Fragment>
    //   <MyHeader />
    //   <MyFooter />
    // </React.Fragment>
  );
}

export default App;
