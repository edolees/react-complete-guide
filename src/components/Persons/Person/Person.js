import React from 'react';
import styles from './Person.module.css'
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

const Person = props => {

    return (
       <Aux>
            <p onClick={props.click}>Im {props.name} and im {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.change} value={props.name} />
       </Aux>
    )

};

export default withClass(Person,styles.Person);
