import dojo from './dojo.json';

export default class MembersServices{
    static getDojoPictures(){
        return dojo? dojo:[]
    }
}