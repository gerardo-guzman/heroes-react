import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heros/HeroCard';

import getHeros from '../../selectors/getHerosByName';


export const SearchScreen = ({ history }) => {

    
    const location = useLocation();
    const { q:query = '' } = queryString.parse(location.search);
    
    const [formState, handleInputChange] = useForm({
        searchInput: query
    });
    
    const {searchInput} = formState;
    
   
    const heroesFiltered =  useMemo(() => getHeros(query), [query]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchInput}`);

    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Buscar por</h4>
                    <hr />
                    <form
                        onSubmit={handleSubmit}
                    >
                        <input 
                            type="text"
                            name="searchInput"
                            placeholder="Encuentra un heroe"
                            className="form-control"
                            value={searchInput}
                            autoComplete="off"
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Buscar
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}
