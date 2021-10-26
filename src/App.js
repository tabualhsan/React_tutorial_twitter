import React, { useState } from 'react';
import Tweet from './components/Tweet';
import CreateTweet from './components/CreateTweet';
// let name = "Tamara";
function App() {
const [name, setName] = useState('Tamara');
const sayHello = (e) => {
  // const name = "Bob";
  setName('Bob');
  console.log(name);
};

  return (
    <div className="App">
      <h4>Hello Twitter </h4>
      <CreateTweet/>
     <Tweet name={name}/>
     <button onClick={sayHello}>Click</button>
    </div>
  );
}

export default App;
