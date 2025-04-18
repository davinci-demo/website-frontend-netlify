import React, { useState } from 'react';
import styles from './registrationform.module.scss';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
        setError(false);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
        setError(false);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
        setError(false); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setError(true);
            setSubmitted(false); 
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    const successMessage = () => {
        return (
            <div className="success" style={{ display: submitted ? '' : 'none' }}>
                <h1>User {name} successfully registered!!</h1>
            </div>
        );
    };

    const errorMessage = () => {
        return (
            <div className={styles.error} style={{ display: error ? '' : 'none' }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    return (
        <div className={styles.form}>
            <div>
                <h1 className='text-2xl'>User Registration</h1>
            </div>

            <div className={styles.messages}>
                {errorMessage()}
                {successMessage()}
            </div>

            <form onSubmit={handleSubmit}>
                <label className={styles.label}>Name</label>
                <input
                    onChange={handleName}
                    className={styles.input}
                    value={name}
                    type="text"
                    name={name}
                />

                <label className={styles.label}>Email</label>
                <input
                    onChange={handleEmail}
                    className={styles.input}
                    value={email}
                    type="email"
                    name={email}
                />

                <label className={styles.label}>Password</label>
                <input
                    onChange={handlePassword}
                    className={styles.input}
                    value={password}
                    type="password"
                    name={password}
                />

                <button className={styles.btn} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}
