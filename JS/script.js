import { Menu } from "../SCENES/menu.js";
import { Game } from '../SCENES/game.js';


const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 600,
  scene: [Menu, Game],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  }
}

var game = new Phaser.Game(config);









/*

function preload(){
	this.load.image("start","ASSETS/PIX_LOGO.png");
    this.load.image("sky", "ASSETS/background.png");
    this.load.spritesheet("dude", "ASSETS/dude.png", {frameWidth:32, frameHeight:48});
    this.load.spritesheet("enemy", "ASSETS/dude.png", {frameWidth:32, frameHeight:48});
    this.load.image("live" , "ASSETS/heart.png");
    this.load.image("limitsEnemy" , "ASSETS/flecha.png");
    this.load.image("coin", "ASSETS/coinOff.png");
    this.load.image("platform", "ASSETS/platformFinalk.png");
    this.load.image("object", "ASSETS/variasPuas.png");
    this.load.image("object2", "ASSETS/cajaPuas.gif");
    this.load.image("desliz", "ASSETS/derrumbe.png");
    this.load.image("fire", "ASSETS/fire.png");
    this.load.image("gameover", "ASSETS/gameoverImg.png");
    this.load.image("star", "ASSETS/thestar.png");
    this.load.image("pua", "ASSETS/filo.png");
    this.load.image("flecha", "ASSETS/flecha.gif");
    this.load.audio("jump","ASSETS/coin.ogg");
    this.load.audio("theme", "ASSETS/electroman.mp3");


}


function create(){

//    this.cancion = this.sound.add("theme");
    this.sonidoSalto = this.sound.add("jump");
    
    this.skyA = this.add.image(0,0,"sky").setOrigin(0,0);
    this.skyB = this.add.image(1000,0,"sky").setOrigin(0,0);

    this.inicioImg = this.add.image(500, 230, "start").setScale(0.7);

    this.flecha = this.add.image(900, 470, "flecha");

    this.dude = this.physics.add.sprite(750,300, "dude").setBounce(0.2).setCollideWorldBounds(true);


    this.liveRecolected1 = this.physics.add.sprite(5000,0,"live");
    this.liveRecolected2 = this.physics.add.sprite(7000,0,"live");
    this.liveRecolected3 = this.physics.add.sprite(9000,0,"live");    

	this.star = this.physics.add.group({
        key: 'star',
        repeat: 160,
        setXY: { 
            x: 900, 
            y: 0,
            stepX: 50
        }

    });


    this.platforms = new Array();
    this.puaUnica = new Array();
    this.otrasPuas = new Array();
    this.puas = new Array();
    this.deslizador = new Array();
    this.fire = new Array();
    this.enemys = new Array();
    this.limitsEnemys = new Array();

    this.findeljuego = this.add.image(500, 200, "gameover").setScale(1.5);
    this.findeljuego.visible = false;

    this.lives = 3;    
    this.score = -210;
    this.starCount = -8;


    this.livesText = null;
    this.starText = null;
    this.scoreText = null;






    //this.cancion.play();

    this.animDude = () => {

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1, 
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

    };

    this.animDude();
    this.physics.world.setBoundsCollision(true, true, true, false);






    this.star.children.iterate(function(child){
         child.setBounce(0.4);
    });









    function collectStar(dude, star) {
        this.sonidoSalto.play();
        star.disableBody(true, true);
        this.starCount++;
        this.score += 30;
        if (this.starCount > 0){
        this.starText.setText(this.starCount + " / 100");
//        this.scoreText.setText("SCORE: " + this.score);

        }
    }







    this.loadPlatforms = () => {

        this.platforms.push(this.physics.add.sprite(-200, 600, 'platform').setImmovable());
        this.platforms.push(this.physics.add.sprite(-100, 600, 'platform').setImmovable());


        this.platforms.push(this.physics.add.sprite(100, 600, 'platform').setImmovable());
        this.platforms.push(this.physics.add.sprite(300, 600, 'platform').setImmovable());
        this.platforms.push(this.physics.add.sprite(600, 450, 'platform').setImmovable());
        this.platforms.push(this.physics.add.sprite(200, 350, 'platform').setImmovable());
        this.platforms.push(this.physics.add.sprite(650, 250, 'platform').setImmovable());
        this.platforms.push(this.physics.add.sprite(1000, 200, 'platform').setImmovable());


        this.platforms.push(this.physics.add.sprite(1150, 450, 'platform').setImmovable());
        this.platforms.push(this.physics.add.sprite(1450, 450, 'platform').setImmovable());
        this.platforms.push(this.physics.add.sprite(1750, 450, 'platform').setImmovable());
        this.platforms.push(this.physics.add.sprite(1900, 300, 'platform').setImmovable());


        this.platforms.push(this.physics.add.sprite(2200, 400, 'platform').setImmovable());
        this.platforms.push(this.physics.add.sprite(2400, 500, 'platform').setImmovable());
        this.platforms.push(this.physics.add.sprite(2600, 500, 'platform').setImmovable());
        this.platforms.push(this.physics.add.sprite(2800, 400, 'platform').setImmovable());
        this.platforms.push(this.physics.add.sprite(3000, 230, 'platform').setImmovable());


        this.platforms.push(this.physics.add.sprite(3500, 500, 'platform').setImmovable());
        this.platforms.push(this.physics.add.sprite(3750, 450, 'platform').setImmovable());
        this.platforms.push(this.physics.add.sprite(4000, 400, 'platform').setImmovable());

        this.platforms.push(this.physics.add.sprite(4400, 400, 'platform').setImmovable());
        this.platforms.push(this.physics.add.sprite(4800, 400, 'platform').setImmovable());
        this.platforms.push(this.physics.add.sprite(5000, 450, 'platform').setImmovable());


        this.platforms.push(this.physics.add.sprite(7250, 500, 'platform').setImmovable());
        this.platforms.push(this.physics.add.sprite(7450, 350, 'platform').setImmovable());

 
        

        for(var i = 0 , l = this.platforms.length; i < l; i += 1){
            this.platforms[i].body.allowGravity = false;
            this.platforms[i].x += 1000;
            this.physics.add.collider(this.dude, this.platforms[i]);
            this.physics.add.collider(this.star, this.platforms[i]);
            this.physics.add.collider(this.liveRecolected1, this.platforms[i]);
            this.physics.add.collider(this.liveRecolected2, this.platforms[i]);
            this.physics.add.collider(this.liveRecolected3, this.platforms[i]);


        }
    }





this.loadMortalElement = () => {
    this.puaUnica.push(this.physics.add.sprite(2275, 325, "pua").setImmovable());
    this.puaUnica.push(this.physics.add.sprite(2875, 325, "pua").setImmovable());
    this.puaUnica.push(this.physics.add.sprite(3575, 425, "pua").setImmovable());
    this.puaUnica.push(this.physics.add.sprite(3825, 375, "pua").setImmovable());
    this.puaUnica.push(this.physics.add.sprite(3525, 475, "pua").setImmovable());

    
    for(var i = 0, l = this.puaUnica.length; i < l; i += 1){
        this.puaUnica[i].body.allowGravity = false;
        this.puaUnica[i].x += 1000;
        this.physics.add.collider(this.dude, this.puaUnica[i], impacto, null, this);
        this.physics.add.collider(this.star, this.puaUnica[i], collectStar, null, this);

    }

}




    this.loadElementsDie = () => {
        this.puas.push(this.physics.add.sprite(700, 578, 'object').setImmovable());
        this.puas.push(this.physics.add.sprite(2300, 578, 'object').setImmovable());
        this.puas.push(this.physics.add.sprite(2800, 578, 'object').setImmovable());


        for(var i = 0, l = this.puas.length; i < l; i += 1){
            this.puas[i].body.allowGravity = false;
            this.physics.add.collider(this.dude, this.puas[i], impacto, null, this);
            this.puas[i].x += 1000;
        }
    }





    this.loadMortalBox = () => {
        this.otrasPuas.push(this.physics.add.sprite(1425, 80, 'object2').setImmovable());
        this.otrasPuas.push(this.physics.add.sprite(2500, 150, 'object2').setImmovable());
        //this.otrasPuas.push(this.physics.add.sprite(3200, 600, 'object2').setImmovable());
        this.otrasPuas.push(this.physics.add.sprite(3450, 60, 'object2').setImmovable());
        this.otrasPuas.push(this.physics.add.sprite(5225, -20, 'object2').setImmovable());
        this.otrasPuas.push(this.physics.add.sprite(5225, 550, 'object2').setImmovable());



        for(var i = 0 , l = this.otrasPuas.length; i < l; i += 1){
            this.otrasPuas[i].body.allowGravity = false;
            this.otrasPuas[i].x += 1000;
            this.physics.add.collider(this.dude, this.otrasPuas[i], impacto, null, this);
        }

    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DIBUJAR LOS DESLIZADORES

this.deslizador.push(this.physics.add.sprite(3200, 240, 'desliz'));
this.deslizador.push(this.physics.add.sprite(5500, 500, 'desliz'));
this.deslizador.push(this.physics.add.sprite(5800, 400, 'desliz'));
this.deslizador.push(this.physics.add.sprite(6100, 300, 'desliz'));
this.deslizador.push(this.physics.add.sprite(6600, 500, 'desliz'));
this.deslizador.push(this.physics.add.sprite(6950, 500, 'desliz'));


for(var i = 0, l = this.deslizador.length; i < l; i += 1){
    this.deslizador[i].body.allowGravity = false;
    this.deslizador[i].x += 1000;
    this.physics.add.collider(this.dude, this.deslizador[i]);
    //this.physics.add.collider(this.star, this.deslizador[i]);

}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DIBUJANDO EL FUEGO

    this.fire.push(this.physics.add.sprite(4200, 60, 'fire').setImmovable());
    this.fire.push(this.physics.add.sprite(4600, 300, 'fire').setImmovable());

    for(var i = 0, l = this.fire.length; i < l; i += 1){
        this.fire[i].body.allowGravity = false;
        this.fire[i].x += 1000;
        this.physics.add.collider(this.dude, this.fire[i], impacto, null, this);
    }






    this.loadEnemys = () => {

        this.velocidad = -100;


        this.enemys.push(this.physics.add.sprite(900, 0, "enemy"));


        this.limitsEnemys.push(this.physics.add.sprite(600, 460, "limitsEnemy").setScale(0.5).setImmovable());
        this.limitsEnemys.push(this.physics.add.sprite(1050, 460, "limitsEnemy").setScale(0.5).setImmovable());




        for(var i = 0, l = this.limitsEnemys.length; i < l; i += 1){
            this.limitsEnemys[i].body.allowGravity = false;
            this.limitsEnemys[i].visible = false;
            this.physics.add.collider(this.platforms, this.limitsEnemys[i]);
        }


        for(var i = 0, l = this.enemys.length; i < l; i += 1){
            this.enemys[i].setVelocityX(this.velocidad);
            this.physics.add.collider(this.platforms, this.enemys[i]);
            this.physics.add.collider(this.limitsEnemys, this.enemys[i], ()=>{this.velocidad *= -1;}, null, this);
            this.physics.add.collider(this.dude, this.enemys[i], impacto, null, this);

        }




    }

    this.loadEnemys();





this.showVisual = () => {
this.add.image(30,30,"live").setScale(0.8);
this.add.image(90,30,"star").setScale(0.8);


this.livesText = this.add.text(47, 15, "3", {
    fontSize: "20px",
    fill: "#333",
    fontFamily: "DokChampa",
});


this.starText = this.add.text(115, 15, "0 / 100", {
    fontSize: "20px",
    fill: "#333",
    fontFamily: "DokChampa",
});



this.scoreText = this.add.text(10, 570, "SCORE: 0", {
    fontSize: "20px",
    fill: "#333",
    fontFamily: "DokChampa",
});

}





function impacto() {
    this.lives--;
    this.livesText.setText(this.lives);
    if(this.lives >= 1){
    //this.cancion.play();
    this.dude.y = 0;
    this.dude.x = 25;
    }

    else {
    //this.cancion.pause();
    this.dude.y = -100;
    this.scene.pause();
    this.findeljuego = this.add.image(500, 200, "gameover").setScale(1.5);
    restablecer();
    }
}



this.allCollider = () => {


    //LIVES

    this.physics.add.collider(this.liveRecolected1, this.platforms);

    this.physics.add.collider(this.dude, this.liveRecolected1, ()=>{
        this.liveRecolected1.disableBody(true, true);
        this.lives++;
        this.score += 60;
    }, null, this);

    this.physics.add.collider(this.dude, this.liveRecolected2, ()=>{
        this.liveRecolected2.disableBody(true, true);
        this.lives++;
        this.score += 60;
    }, null, this);

    this.physics.add.collider(this.dude, this.liveRecolected3, ()=>{
        this.liveRecolected3.disableBody(true, true);
        this.lives++;
        this.score += 60;
    }, null, this);


    //STAR
    
    this.physics.add.overlap(this.dude, this.star, collectStar, null, this);


};











////////////////////////////////////////////////////////////////////////////////////////////////////////////
//REESTABLECER

function restablecer() {

    this.botonReinicio = document.querySelector("#reload");
    this.botonReinicio.style.width = "200px";
    this.botonReinicio.style.height = "100px";
    this.botonReinicio.style.position = "absolute";
    this.botonReinicio.style.marginTop = "50px";
    this.botonReinicio.innerHTML = "TRY AGAIN";
    this.botonReinicio.onclick = function(){document.location.reload();}
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CREAR CONTROLES


this.cursors = this.input.keyboard.createCursorKeys();



this.loadPlatforms();
this.loadMortalElement();
this.loadElementsDie();
this.loadMortalBox();
this.showVisual();
this.allCollider();


}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////








function update(){


            for(var i = 0, l = this.enemys.length; i < l; i += 1){
                this.enemys[i].setVelocityX(this.velocidad);
             }

///////////////////////////////////////////////////////////////////////////////////////////////CONTANDO EL SCORE


this.livesText.setText(this.lives);
if (this.score > 0){this.scoreText.setText("SCORE: " + this.score);}
else{this.scoreText.setText("SCORE: 0")};




//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ANIMANDO EL CIELO    
    this.skyA.x -= 0.5;
    this.skyB.x -= 0.5;

    if (this.skyA.x + 1000 < 0) {
        this.skyA.x = 999;
    }
    else if (this.skyB.x + 1000 < 0) {
        this.skyB.x = 999;
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DETECTAR EVENTOS DE TECLADO


    if (this.cursors.right.isDown){
        this.dude.setVelocityX(160);
        this.dude.anims.play('right', true);
    }


    else if (this.cursors.left.isDown) {
        this.dude.setVelocityX(-160);
        this.dude.anims.play('left', true);
    }


    else{
        this.dude.setVelocityX(0);
        this.dude.anims.play("turn");
    }


    if (this.cursors.up.isDown && this.dude.body.touching.down){
        this.dude.setVelocityY(-330);
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////
    //NEXT LEVEL
    if (this.dude.x > 980) {

          this.star.children.iterate(function (child) {
                child.x -= 1000;
                child.setBounce(0.8);

            });

    	this.inicioImg.visible = false;
        this.dude.x = 21;
        this.flecha.x -= 1000;
        this.liveRecolected1.x -= 1000;
        this.liveRecolected2.x -= 1000;
        this.liveRecolected3.x -= 1000;

	  	nextLevel(this.platforms);
		nextLevel(this.puas);
       	nextLevel(this.otrasPuas);
		nextLevel(this.deslizador);
        nextLevel(this.fire);
		nextLevel(this.puaUnica);
        nextLevel(this.enemys);
        nextLevel(this.limitsEnemys);


   		function nextLevel(objects) {
   	    	for(var i = 0, l = objects.length; i < l; i += 1){
       		    objects[i].x -= 1000;
   			 }
    	}	


    }




    //PREV LEVEL

    else if (this.dude.x < 20) {


          this.star.children.iterate(function (child) {
                child.x += 1000;
                child.setBounce(0.8);

            });



        this.dude.x = 970;
        this.flecha.x += 1000;
        this.liveRecolected1.x += 1000;
        this.liveRecolected2.x += 1000;
        this.liveRecolected3.x += 1000;

        prevLevel(this.platforms);
		prevLevel(this.puas);
       	prevLevel(this.otrasPuas);
		prevLevel(this.deslizador);
        prevLevel(this.fire);
		prevLevel(this.puaUnica);
        prevLevel(this.enemys);
        prevLevel(this.limitsEnemys);


    
		function prevLevel(objects) {
        	for(var i = 0, l = objects.length; i < l; i += 1){
        	    objects[i].x += 1000;
       		 }
    	}	


}


///////////////////////////////////////////////////////////////////////////////////////////////////////
//MOVER FUEGO

for(var i = 0, l = this.fire.length; i < l; i += 1){
    this.fire[i].setVelocityY(300);
    if (this.fire[i].y > 750) {
        this.fire[i].y = -100;
    }
}





//////////////////////////////////////////////////////////////////////////////////////////////////
    //CAIDA
    if (this.dude.y > 700) {
        this.lives = 0;
        this.livesText.setText("0");
        //this.cancion.pause();
        this.scene.pause();
        this.inicioImg.visible = false;
        this.findeljuego.visible = true; 
        this.botonReinicio = document.querySelector("#reload");
        this.botonReinicio.style.width = "200px";
        this.botonReinicio.style.height = "100px";
        this.botonReinicio.style.position = "absolute";
        this.botonReinicio.style.marginTop = "50px";
        this.botonReinicio.innerHTML = "TRY AGAIN";
        this.botonReinicio.onclick = function(){document.location.reload();}
    }


}
*/