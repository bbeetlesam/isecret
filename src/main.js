import Phaser from "phaser";

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

function preload(){
    this.load.image("sky", "https://labs.phaser.io/assets/skies/space3.png");
}

function create(){
    this.add.image(400, 400, "sky");
    
    const text = this.add.text(400, 400, "Tes 123", {
        fontSize: "32px",
        color: "#00ff00",
    });
    text.setOrigin(0.5);
}

function update(){

}
