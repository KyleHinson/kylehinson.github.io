/** @type {import Phaser from ("phaser")} */

// For Github Page Build, Raw git file to import
// If it works dont touch it

import {LoadScene} from "./scenes/LoadScene.js";
import {MainMenu} from "./scenes/MainMenu.js";

var w = window.innerHeight/16*9;
var h = window.innerHeight; 

let game = new Phaser.Game({
    width: w,
    height: h,
    scale:{
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTRE_BOTH,
    },
    scene:[
         LoadScene,MainMenu
    ]
});