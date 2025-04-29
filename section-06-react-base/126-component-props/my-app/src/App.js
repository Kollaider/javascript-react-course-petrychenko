import './App.css';


function WhoAmI (props) {
  return (
    <div>
      <h1>My name is {props.name}, surname - {props.surname}</h1>
      <a href={props.link}>My profile</a>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <WhoAmI name="John" surname="Smith" link="facebook.com"/>
      <WhoAmI name="Alex" surname="Gurov" link="vk.com"/>
      {/* <WhoAmI name={{firstName: 'Alex'}} surname="Gurov" link="vk.com"/> */}
      {/* <WhoAmI name={() => 'John'} surname="Gurov" link="vk.com"/> */}


    </div>
  );
}

export default App;
