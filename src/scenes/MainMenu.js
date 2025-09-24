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

        this.add.image(0,0, "title_bg").setOrigin(0).setDepth(0).setScale((607/this.game.renderer.width + 1 + 1080/this.game.renderer.height + 1) /2 + 0.2);
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height *0.20, "logo").setDepth(1).setScale(this.game.renderer.width*0.00025);
        let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height /2, "play_button").setDepth(1).setScale(this.game.renderer.width*0.00125);
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height /2 + this.game.renderer.height/5, "options_button").setDepth(1).setScale(this.game.renderer.width*0.00125);

        playButton.setInteractive();

        playButton.on("pointerover", ()=>{
            console.log("hovering")
        })

        playButton.on("pointerout", ()=>{
            console.log("not hovering")
        })

        playButton.on("pointerup", ()=>{
            console.log("Blue Archive ON")
        })
    }   
}