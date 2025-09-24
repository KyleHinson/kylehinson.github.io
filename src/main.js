/** @type {import Phaser from ("phaser")} */
import Phaser from 'phaser';
// For Github Page Build, Raw git file to import
// If it works dont touch it
import './style.css'

import {LoadScene} from "./scenes/LoadScene.js";
import {MainMenu} from "./scenes/MainMenu.js";

var w = window.screen.width +100;
var h = window.screen.height; 

let game = new Phaser.Game({
    width: w,
    height: h,
    scene:[
         LoadScene,MainMenu
    ]
});