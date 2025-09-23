import { CST } from "../CST.js";
export class MainMenu extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.MENU
        })
    }

    init(data){
        console.log(data);
        console.log("Scene from Load to Main Menu")
    }

    create(){

    }
}