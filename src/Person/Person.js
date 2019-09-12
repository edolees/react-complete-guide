import React from 'react';
import styles from './Person.module.css'
//import './Person.css';

const person = props => {

    return (
        <div className={styles.Person} >
            <p onClick={props.click}>Im {props.name} and im {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.change} value={props.name} />
        </div>
    )

};

export default person;
