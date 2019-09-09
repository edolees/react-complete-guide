import React,{useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {

  // Creating Persons State
 const [personsState, setPersonsState]= useState({
    persons:[
      {id:'1iuashd' , name: 'Eduardo' , age: 23 },
      {id:'12lnmk1n' , name: 'Ed' , age :24 },
    ],
  });
  // Creating Show Person 
  const [showPersonState,showPersonSetState] = useState(false)

  // Event handler to update the name for the input
  const nameChangeHandler = (event , id) => {

    // fetching the targeted person with the ID
    const personIndex = personsState.persons.findIndex(p =>{
      return p.id === id
    });
    //Using the spread operator to spread the object that was fetched into an object
    const person ={...personsState.persons[personIndex]}
    //Setting the fetched object's name to the input value
    person.name = event.target.value;
    //Using the spread operator  to spread the personsState Array
    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({persons: persons })
  }


 const deletePersonHandler = (personIndex) =>{
   console.log(personIndex);
   
   const persons = [...personsState.persons];
   persons.splice(personIndex , 1);
  setPersonsState({persons: persons})

 } 
 const togglePersonHandler = () =>{
    showPersonSetState(!showPersonState)
    console.log(personsState.persons);
    
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
      <button
        style={style}
        onClick={togglePersonHandler}>
          Toggle Person
      </button>
      <div>

      { showPersonState?
      personsState.persons.map((profile , index) =>{
        console.log(profile);
        
        return <Person 
        click = {() => deletePersonHandler(index)}
        name = {profile.name}
        age = {profile.age}
        key = {profile.id}
        change = {(event) => nameChangeHandler(event, profile.id)}
        />
      })
      :null
    }
      </div>
    </div>
  );
        
}

export default App;
