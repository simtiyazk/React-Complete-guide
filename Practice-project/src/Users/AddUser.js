import React, { useState, useRef } from 'react';
import Card from '../components/UI/Card';
import styles from './AddUser.module.css';
import Button from '../components/UI/Button';
import ErrorModal from '../components/UI/ErrorModal';
import Wrapper from './Wrapper';

const AddUser = (props) => {
    // Using ref feature
    const nameInputref = useRef();
    const ageInputref = useRef();

    // const [enterUsername, setEnterUsername] = useState('');
    // const [enterAge, setEnterAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        //Using ref feature
        const enteredNameref = nameInputref.current.value;
        const enteredAgeref = ageInputref.current.value;

        if(enteredNameref.trim().length === 0 || enteredAgeref.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }
        if(+enteredAgeref < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)'
            });
            return;
        }
        props.onAddUser(enteredNameref, enteredAgeref);
        nameInputref.current.value = '';
        ageInputref.current.value = '';
    }

    //     if(enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
    //         setError({
    //             title: 'Invalid input',
    //             message: 'Please enter a valid name and age (non-empty values)'
    //         });
    //         return;
    //     }
    //     if(+enterAge < 1) {
    //         setError({
    //             title: 'Invalid age',
    //             message: 'Please enter a valid age (> 0)'
    //         });
    //         return;
    //     }
    //     setEnterUsername('');
    //     setEnterAge('')
    //     props.onAddUser(enterUsername, enterAge);
    // }

    // const usernameHandler = (event) => {
    //     setEnterUsername(event.target.value);
    // }

    // const ageHandler = (event) => {
    //     setEnterAge(event.target.value);
    // }

    const errorHandlerCloseModal = () => {
        setError(null);
    }
    return (
    <Wrapper>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandlerCloseModal} />}
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label>Username</label>
                <input 
                    type='text' 
                    id='username' 
                    // value={enterUsername} 
                    ref={nameInputref}
                    // onChange={usernameHandler}
                />
                <label>Age (in Years)</label>
                <input 
                    type='number' 
                    id='age' 
                    // value={enterAge} 
                    ref={ageInputref}
                    // onChange={ageHandler} 
                />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    </Wrapper>
    )
}

export default AddUser;