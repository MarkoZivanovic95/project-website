import primaryWeapons from './primaryWeapons.json';
import secondaryWeapons from './secondaryWeapons.json';
import meleeWeapons from './meleeWeapons.json'

export default class WeaponServices{
    static getPrimaryWeapons(){
        return primaryWeapons ? primaryWeapons:[]
    }
    static getSecondaryWeapons(){
        return secondaryWeapons ? secondaryWeapons:[]
    }
    static getMeleeWeapons(){
        return meleeWeapons ? meleeWeapons:[]
    }
}