import React ,{useEffect} from 'react'
import styles from './Cockpit.module.css'

const Cockpit = props => {
    useEffect(()=>{
         setTimeout(()=>{
            alert('Saved data')
        },);
        return () =>{console.log('Cockpit.js Cleanup work in useEffect');
        }
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
                className={btnClass}
                onClick={props.toggle}>
                Toggle Person
              </button>
            <p className={assignedClasses.join(' ')}>Hey , This is working!</p>
        </div>
    );
};

export default Cockpit;
