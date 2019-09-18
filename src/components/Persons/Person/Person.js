import React, { useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import AuthContext from '../../../context/auth-context';

const Person = props => {

    const focusLastInput = useRef(null);
    const authContext = useContext(AuthContext);


    useEffect(() => {
        focusLastInput.current.focus()
    })

    return (
        <Aux>
            {authContext.authenticated ? <p>Authenticated</p> : <p>Please Log in</p>}
            <p onClick={props.click}>Im {props.name} and im {props.age} years old</p>
            <p key='i2'>{props.children}</p>
            <input
                ref={focusLastInput}
                key='i3'
                type='text'
                onChange={props.change}
                value={props.name} />
        </Aux>
    )

};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func,
}

export default withClass(Person, styles.Person);