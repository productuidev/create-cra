// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

function App() {

  let name = "정수연";
  
  const style = {
    App: { backgroundColor:"#282c34", },
    h2: { color:"#fff", },
    boldTxt: { color:"#61dafb", },
  };

  return (
    <div style={style.App}>
      <MyHeader />
      <header className="App-header">
        <h2 style={style.h2}>안녕 리액트 {name}</h2>
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
