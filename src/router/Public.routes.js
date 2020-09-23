import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import propTypes from 'prop-types';

export const PublicRoute = ({
    isAuth,
    component: Component,
    ...rest
}) => {
    return (
        <Route 
            {...rest}
            component={
                (props) => (!isAuth? 
                    <Component {...props} /> :
                    <Redirect to="/" />
                )
            }
        />
    )
}

PublicRoute.propTypes = {
    isAuth: propTypes.bool.isRequired,
    component: propTypes.func.isRequired
}

