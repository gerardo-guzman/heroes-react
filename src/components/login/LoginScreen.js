import React from 'react';

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        console.log('object');
        history.replace('/');
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                login
            </button>
        </div>
    )
}
