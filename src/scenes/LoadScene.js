import { CST } from "../CST.js";import { MainMenu } from "./MainMenu.js";
;
export class LoadScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.LOAD
        })
    } 
    create(){
        // this.scene.add(CST.SCENES.MENU, MainMenu, false)
        // the above code make the scene dynamic
        this.scene.start(CST.SCENES.MENU, "Load to Main")
        // this.scene.launch()
    }
}