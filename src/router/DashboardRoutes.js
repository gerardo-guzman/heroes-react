import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MarvelScreen } from '../components/Marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heros/HeroScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen }  />
                     <Route exact path="/hero/:idhero" component={ HeroScreen } />
                     <Route exact path="/dc" component={ DcScreen } />

                     <Redirect to="/marvel" />
                </Switch>                   
            </div>

        </>
    )
}
