import { heroes } from '../data/heroes';

export default function getHeroesByPublisher(publisher) {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if(!validPublishers.includes(publisher)) {
        throw new Error('Publisher incorrecto');
    }

    return heroes.filter(heroe => heroe.publisher === publisher); 

}