import 'phaser'
/** @type {import("..\typings\phaser.json")} */
// For Github Page Build, Raw git file to import
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