import React from 'react';
import Person from './Person/Person';

const Persons = props => props.persons.map((profile, index) => {

    return <Person
        click={() => props.clicked(index)}
        name={profile.name}
        age={profile.age}
        key={profile.id}
        change={(event) => props.changed(event, profile.id)}
    />
});

export default Persons
