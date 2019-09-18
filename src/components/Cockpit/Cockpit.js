import React, { useEffect, useRef, useContext } from 'react';
import styles from './Cockpit.module.css'
import AuthContext from '../../context/auth-context';

const Cockpit = props => {

    const autoClick = useRef();
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    useEffect(() => {
        /* setTimeout(()=>{
            alert('Saved data')
        },);
        return () =>{console.log('Cockpit.js Cleanup work in useEffect');
        }*/
        autoClick.current.click();

    }, []);

    let assignedClasses = [];
    let btnClass = '';

    if (props.show) {
        btnClass = styles.Red
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(styles.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(styles.bold);
    }

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <button
                ref={autoClick}
                className={btnClass}
                onClick={props.toggle}>
                Toggle Person
            </button>

            <button
                onClick={authContext.login}>
                Login
            </button>

            <p className={assignedClasses.join(' ')}>Hey , This is working!</p>
        </div>
    );
};

export default Cockpit;
