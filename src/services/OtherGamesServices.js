import otherGames from './otherGames.json';

export default class OtherGamesServices{
    static getGames(){
        return otherGames? otherGames:[]
    }
}