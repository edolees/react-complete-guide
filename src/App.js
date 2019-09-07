import React,{useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {
  // Creating Persons State
 const [personsState, setPersonsState]= useState({
    persons:[
      {name: 'Eduardo' , age: 23 },
      {name: 'Ed' , age :24 },
    ],
  });

 // Handling Event for Click / Updating Persons State 
  const onClickHandler = () => {
    setPersonsState({
      persons:[
        {name:'Eduardsado', age:23},
        {name:'Edasdasd', age :24},
      ]
    })
  }
  const nameChangeHandler = event => {
    setPersonsState({
      persons:[
        {name: 'Eduardo' , age: 23 },
        {name: event.target.value , age :25 },
      ]
    })
  }

  const style ={
    backgroundColor: 'white',
    font:'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }
   return (
      <div className='App'>
        <h1>Hey</h1>
        <button
         style={style}
         onClick={onClickHandler
         }>Switch Name</button>
        <Person
         name={personsState.persons[0].name} 
         age = {personsState.persons[0].age} 
         >Suerte</Person>
        <Person 
          name={personsState.persons[1].name} 
          age = {personsState.persons[1].age}
          changed={nameChangeHandler}/>
      </div>
    )
}
export default App;

