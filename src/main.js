import 'phaser'
import './style.css'

import {LoadScene} from "./scenes/LoadScene";
import {MainMenu} from "./scenes/MainMenu";

var w = window.screen.width;
var h = window.screen.height; 

let game = new Phaser.Game({
    width: w,
    height: h,
    scene:[
         LoadScene,MainMenu
    ]
});