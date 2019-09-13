import React, { useState } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux'

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



  let persons = null;

  if (showPersonState) {

    persons = <Persons
      persons={personsState.persons}
      clicked={deletePersonHandler}
      changed={nameChangeHandler} />
  };

  return (
    <Aux>
      <div>
        <Cockpit
          title={props.appTitle}
          show={showPersonState}
          persons={personsState.persons}
          toggle={togglePersonHandler} />
        {persons}
      </div>
    </Aux>

  );

}

export default withClass(App,styles.App);
