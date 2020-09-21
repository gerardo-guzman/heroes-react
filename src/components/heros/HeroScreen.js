import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import getHero from '../../selectors/getHerosById';

export const HeroScreen = ({history}) => {


    const { idhero } = useParams();
    const hero = getHero(idhero);
    if (!hero) {
        return <Redirect to="/" />;            
    }
    const handleReturn = () => {
        if (history.length <=2) {
            history.push('/');
        } else history.goBack();
    }
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={`../../assets/heroes/${idhero}.jpg`}
                    alt={superhero}
                    className="img-thumbnail"
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>identidad secreta:</b>{alter_ego}</li>
                    <li className="list-group-item"><b>publisher:</b>{publisher}</li>
                    <li className="list-group-item"><b>Primera aparición:</b>{first_appearance}</li>
                </ul>
                <h5>Personajes</h5>
                <p> {characters}</p>
                <button className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Regresar
                </button>
            </div>
        </div>
    )
}
