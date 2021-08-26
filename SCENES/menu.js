export class Menu extends Phaser.Scene{
	constructor(){
		super({key : "menu"});
	}


	preload(){
		this.load.image("logo", "ASSETS/PIX_LOGO.png");
		this.load.image("background", "ASSETS/sky.png");
	}

	create(){
		this.background = this.add.image(0, 0, "background").setOrigin(0,0).setInteractive();
		this.count = 300;

		this.background.on("pointerdown",()=>{
			this.scene.start("game");
		});


	}


}