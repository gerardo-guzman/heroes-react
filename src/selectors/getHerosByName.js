import { heroes } from "../data/heroes";

export default function getHeroByName(name = '') {

    if (name === '') {
        return [];
    }

    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase()));

}


