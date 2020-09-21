import { heroes } from '../data/heroes';

export default function getHeroesById(id) {

   return heroes.find(hero => hero.id === id)
}
