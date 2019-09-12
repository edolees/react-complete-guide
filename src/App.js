import React, { useState } from 'react';
//import logo from './logo.svg';
//import './App.css'; 
import styles from './App.module.css';
import Person from './Person/Person';

const App = props => {

  const [personsState, setPersonsState] = useState({ // Creating Persons State
    persons: [
      { id: '1iuashd', name: 'Eduardo', age: 23 },
      { id: '12lnmk1n', name: 'Ed', age: 24 },
    ],
  });

  const [showPersonState, showPersonSetState] = useState(false); // Creating Show Person State

  const nameChangeHandler = (event, id) => { // Event handler to update the name for the input

    const personIndex = personsState.persons.findIndex(p => { // fetching the targeted person with the ID
      return p.id === id
    });

    const person = { ...personsState.persons[personIndex] } //Using the spread operator to spread the object that was fetched into an object

    person.name = event.target.value; //Setting the fetched object's name to the input value

    const persons = [...personsState.persons]; //Using the spread operator  to spread the personsState Array
    persons[personIndex] = person;

    setPersonsState({ persons: persons });
  }

  const deletePersonHandler = (personIndex) => { //Removing selected person from Array
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({ persons: persons });
  }

  const togglePersonHandler = () => { //Toggling Person Component
    showPersonSetState(!showPersonState);
  }

  let assignedClasses = [];
  if (personsState.persons.length <= 2) {
    assignedClasses.push(styles.red);
  }
  if (personsState.persons.length <= 1) {
    assignedClasses.push(styles.bold);
  }

  let persons = null;
  let btnClass = '';
  if (showPersonState) {

    persons = (

      personsState.persons.map((profile, index) => {
        return <Person
          click={() => deletePersonHandler(index)}
          name={profile.name}
          age={profile.age}
          key={profile.id}
          change={(event) => nameChangeHandler(event, profile.id)}
        />
      }));
    btnClass = styles.Red;
  };

  return (
    <div className={styles.App}>
      <button
        className={btnClass}
        onClick={togglePersonHandler}>
        Toggle Person
      </button>
      <p className={assignedClasses.join(' ')}>Hey , This is working!</p>
      <div>
        {persons}
      </div>
    </div>
  );

}

export default App;
