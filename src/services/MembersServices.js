import members from './members.json';

export default class MembersServices{
    static getMembers(){
        return members? members:[]
    }
}