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
  
  const [showPersonState,showPersonSetState] = useState(false)
 // Handling Event for Click / Updating Persons State 
  const onClickHandler = () => {
    setPersonsState({
      persons:[
        {name:'Eduardsado', age:23},
        {name:'Edasdasd', age :24},
      ]
    })
  }
  // Creating Event Handler
  const nameChangeHandler = event => {
    setPersonsState({
      persons:[
        {name: 'Eduardo' , age: 23 },
        {name: event.target.value , age :25 },
      ]
    })
  }

 const togglePersonHandler = () =>{
    showPersonSetState(!showPersonState)
 }

  const style ={
    backgroundColor: 'white',
    font:'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }
  console.log(showPersonState);
   return (
    <div className='App'>
      <button
        style={style}
        onClick={togglePersonHandler}>
          Toggle Person
          </button>      
      { showPersonState?
      <div>
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        />

        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
          changed={nameChangeHandler} />
      </div> :null
      }
    </div>
  );
        
}

export default App;
