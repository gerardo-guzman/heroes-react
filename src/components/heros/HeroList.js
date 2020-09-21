import React, { useMemo } from 'react'
import getHerosByPublisher from '../../selectors/getHerosByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heros = useMemo(() => getHerosByPublisher(publisher), [publisher]);

    return (
        <div className="card-columns">
             {
                 heros.map(hero => (
                     <HeroCard key={hero.id}
                        {...hero}
                     />
                 ))
             }   
        </div>
    )
}
