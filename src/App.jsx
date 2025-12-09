import { useState } from 'react';
import './App.css';
import HelloStudent from './Day42/hellostudent';
import Studentinfo from './Day42/studentinfo';
import Message from './Day42/Message';
import Button from './Day42/Button';
import Card from './Day42/card';
import Profilecard from './Day42/Profilecard';
import Button1 from './Day42/Button1';
import Productitem from './Day42/Productitem';
import Layout from './Day42/Layout';
import Header from './Day42/Header';
import Content from './Day42/Content';
import Footer from './Day42/Footer';


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

      <Profilecard name="Divya M"job="Developer" avatar="https://via.placeholder.com/100"/>
      <Button1 text="Click me" color="green" size="large"/ >
      <Button1 text="Submit" color="red" size="small"/>
      <Button1 text = "Login" />



      <Productitem title="Laptop" price={33333}/>
      <Productitem title="Headphones"price={7897}/>
      <Productitem title="Mobile" price={32333}/>
      <Layout>
        <h2>Welcome!!</h2>
        <p>This content is inside the layout</p>
      </Layout>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
