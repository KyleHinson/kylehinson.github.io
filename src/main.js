/** @type {import Phaser from ("phaser")} */
// For Github Page Build, Raw git file to import
// If it works dont touch it
import './style.css'

import {LoadScene} from "./scenes/LoadScene";
import {MainMenu} from "./scenes/MainMenu";

var w = window.screen.width +100;
var h = window.screen.height; 

let game = new Phaser.Game({
    width: w,
    height: h,
    scene:[
         LoadScene,MainMenu
    ]
});