export function preload(){
    // this.load.image("sky", "https://labs.phaser.io/assets/skies/space3.png");
    this.load.image("sky", "assets/Screenshot 2024-10-05 235618.png");
}

export function create(){
    const img = this.add.image(this.scale.width/2, this.scale.height/2, 'sky');
    img.setScale(0.5);
    
    const text = this.add.text(250, 250, 'Tes 123', {
        fontSize: '64px',
        color: '#fcba03',
        fontFamily: 'JetBrains Mono ExtraBold',
    });
    text.setOrigin(0.5);
    
    this.input.keyboard.on('keydown-SPACE', () => {
        text.setStyle({fontSize: '34px', color: '#ffffff'});
    });
    
    this.input.keyboard.on('keyup-SPACE', () => {
        text.setStyle({fontSize: '64px', color: '#fcba03'})
    });
}

export function update(){

}