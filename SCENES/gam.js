export class Game extends Phaser.Scene {
	constructor(){
		super({key : "game"});
	}

	preload(){
		this.load.image("prueba", "ASSETS/flecha.png");
	}

	create(){
		this.physics.add.image(100, 100, "prueba");
	}
}