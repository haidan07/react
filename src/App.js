/* eslint-disable no-unused-vars */

import './App.css';

const Person = (props) => {
  return (
    <>
    <h1>name : {props.user_name}</h1>
    <h2>lastname : {props.user_last}</h2>
    </>
  )
}



const App = () => {
  return (
    <div className="App">
      <h1>heloo</h1>
      <Person user_name="johhny sins" user_last="mia khalifa"/>
    </div>
  );
}

export default App;
