import Phaser from 'phaser';
import { preload, create, update } from './sec.js';

const config = {
    type: Phaser.AUTO,
    audio: {
        noAudio: true,
    },
    render: {
        pixelArt: false,
        antialias: true,
    },
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'game',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 600,
        height: 1000,
        min: {
            width: 320,
            height: 320
        },
        max: {
            width: 1600,
            height: 1600
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    backgroundColor: "#00377a"
};

const game = new Phaser.Game(config);