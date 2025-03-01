// import { game } from "./main.js";

export class MainScene extends Phaser.Scene {
    constructor()
    {
        super("MainScene");
    }
    
    preload()
    {
        this.load.image("sky", "https://labs.phaser.io/assets/skies/space3.png");
        this.load.image("sky", "./img/Screenshot-2024-10-05-235618.png");
        // this.load.svg({key: "tes", url: "./img/milk-tea-svgrepo-com.svg", svgConfig: {width: 800, height: 800}});
    }
    
    create()
    {
        const img = this.add.image(this.scale.width/2, this.scale.height/2, 'sky');
        img.setScale(0.5);

        // const svgImage = this.add.image(this.scale.width/2, this.scale.height/2, 'tes');
        // svgImage.setScale(0.8);
        
        const text = this.add.text(this.scale.width/2, this.scale.height/2, 'Tes Kontol', {
            fontSize: '100px',
            color: '#fcba03',
            fontFamily: 'jetbrains',
            resolution: 2,
            padding: { x: 1, y: 1}
        });
        text.setOrigin(0.5);
        
        this.input.keyboard.on('keydown-SPACE', () => {
            text.setStyle({fontSize: '125px', color: '#00ff00'});
            // document.getElementById('p').innerHTML = "Paragraph changed.";
        });
        
        this.input.keyboard.on('keyup-SPACE', () => {
            text.setStyle({fontSize: '100px', color: '#fcba03'});
            // document.getElementById('p').innerHTML = "halo ges";
        });

        this.input.on('pointerdown', (pointer) => {
            text.setStyle({fontSize: '125px', color: '#00ff00'});
            console.log('Clicked/Touched at:', pointer.x, pointer.y);
        });

        this.input.on('pointerup', (pointer) => {
            text.setStyle({fontSize: '100px', color: '#fcba03'});
            console.log('Clicked/Touched at:', pointer.x, pointer.y);
        });
    }

    update(time, delta)
    {

    }
}