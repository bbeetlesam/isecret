import Phaser from 'phaser';
import { preload, create, update } from './sec.js';

const config = {
    type: Phaser.AUTO,
    mode: Phaser.Scale.RESIZE,
    width: 800,
    height: 800,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
};

const game = new Phaser.Game(config);