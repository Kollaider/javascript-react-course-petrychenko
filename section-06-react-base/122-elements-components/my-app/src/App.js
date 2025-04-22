import React from 'react';
import './App.css';


const Header = () => {
  return <h2>Hello world!</h2>
}

const Field = () => {
  const holder = 'Enter here'
  const styledfield = {
    width: '300px'
  }
  return <input placeholder={holder} type="text"  style={styledfield}/>
}

// устаревший способ с использованием синтаксиса классов
class Field2 extends React.Component {
  render() {
    const holder = 'Enter here';
    const styledfield = {
      width: '300px'
    }
    return <input placeholder={holder} type="text"  style={styledfield}/>
  }
}

function Btn() {
  const text = 'Log in'
  const logged = true;
  const res = () => {
    return 'Log out'
  }
  const p = <p>Paragraph</p>
  return (
    <>
      {p}
      <button>{logged ? 'Enter' : text}</button>
      <button>{text}</button>
      <button>{res()}</button> 
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Field2/>
      <Btn/>
    </div>
  );
}

export {Header};
export default App;

