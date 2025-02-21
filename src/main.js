import Phaser from "phaser";

const config = {
    type: Phaser.AUTO,
    mode: Phaser.Scale.RESIZE,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
};

const game = new Phaser.Game(config);

window.addEventListener("resize", () => {
    game.scale.resize(window.innerWidth, window.innerHeight);
});

function preload(){
    // this.load.image("sky", "https://labs.phaser.io/assets/skies/space3.png");
    this.load.image("sky", "assets/Screenshot 2024-10-05 235618.png");
}

function create(){
    this.add.image(window.innerWidth/2, window.innerHeight/2, "sky");
    
    const text = this.add.text(window.innerWidth/2, window.innerHeight/2, "Tes 123", {
        fontSize: "64px",
        color: "#fcba03",
        fontFamily: "Times New Roman",
    });
    text.setOrigin(0.5);
}

function update(){

}
