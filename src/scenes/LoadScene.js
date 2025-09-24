import { CST } from "../CST.js";

export class LoadScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.LOAD
        })
    } 
    init(){

    }
    preload(){
        //Change resolution
        
        //load image -> spritesheet -> sound

        this.load.image("title_bg","./assets/test-background.png");
        this.load.image("options_button","./assets/testsetting.png");
        this.load.image("play_button","./assets/teststart.png");
        this.load.image("logo","./assets/testlogo.png");
        // this.load.spritesheet("name","location",{
        //     frameHeight: Number,
        //     frameWidth: Number
        // });

        this.load.audio("title_music", ".assets/testaudio.mp3")

        this.load.on("progress",(percent)=>{
            console.log(percent)
        })

        this.load.on("complete",()=>{
            console.log("Yipee")
        })
    }
    create(){
        // this.scene.add(CST.SCENES.MENU, MainMenu, false)
        // the above code make the scene dynamic
        this.scene.start(CST.SCENES.MENU, "Load to Main")
        // this.scene.launch()
    }
}
