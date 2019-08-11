import frameBuilds from './frameBuilds.json';

export default class FrabeBuilds{
    static getFrameBuilds(){
        return frameBuilds ? frameBuilds:[]
    }
}