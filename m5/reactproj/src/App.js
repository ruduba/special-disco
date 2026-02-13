import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [age, setAge] = useState(20);
  const[phone, setPhone] = useState(3758393484)

  return (
    <>
      <div>
        <h1>This is a simle program on jsx</h1>
        <h1>We have a variable called age with its value {age} and phone number is {phone}</h1>
      </div>

    </>
  );
}

export default App;
