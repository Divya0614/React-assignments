import { useState } from 'react';
import './App.css';
import HelloStudent from './Day42/hellostudent';
import Studentinfo from './Day42/studentinfo';
import Message from './Day42/Message';
import Button from './Day42/Button';
import Card from './Day42/card';



function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <HelloStudent/>
    <Studentinfo name="Divya" age={22}/>

    <Message text = "Welcome to react"/>
    <Button text = "Click Me"/>
    <Card>
      <p>This is a message</p>
      </Card>
    </div>
  );
}

export default App;
