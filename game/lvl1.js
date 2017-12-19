var Level1 = {
	mage: null,
	bullets: null,
	bullets1: null,
	bullets2: null,
	bullets3: null,
	bullets4: null,
	bulletsP: null,
	bullet130: null,
	bulletTime: 0,
	sprite: null,
	bullet: null,
	player: null,
	hp:100000,
	num:0,
	back:null,
	preload: function () {
		game.load.spritesheet('mage', 'img/mage.png', 85, 100)
		game.load.spritesheet('bullet', 'img/bullet.png', 15, 13)
		game.load.spritesheet('bullet1', 'img/bullet1.png', 30, 13)
		game.load.image('player', 'img/player3.png');
		game.load.image('bulletP', 'img/bulletP.png')
	
	},

	create: function () {
		
		
	
		
		
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.mage = game.add.sprite(game.world.centerX, game.world.centerY - 100, 'mage');
		this.mage.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(this.mage);
		this.mage.scale.setTo(0.9);

		game.time.events.loop(Phaser.Timer.SECOND *2, this.velocMage);
		
		this.mage.body.collideWorldBounds = true;
		this.mage.body.bounce.set(1);
		this.mage.body.immovable=true;

		this.player = game.add.sprite(game.world.centerX, game.world.centerY + 100, 'player');
		this.player.scale.setTo(0.2)
		game.physics.arcade.enable(this.player);
		 this.player.inputEnabled = true;
		this.player.input.enableDrag();
	
		//playerBullet
			this.bulletsP = game.add.group();
			this.bulletsP.enableBody = true;
			this.bulletsP.physicsBodyType = Phaser.Physics.ARCADE;

			for (var i = 0; i < 20; i++) {
				var b = this.bulletsP.create(0, 0, 'bulletP');
				b.name = 'bullet' + i;
				b.exists = false;
				b.visible = false;
				b.checkWorldBounds = true;
				b.events.onOutOfBounds.add(this.resetBullet, this);
				b.scale.set(0.1,0.1)


			}
		game.time.events.loop(Phaser.Timer.SECOND / 5, this.bullShootP);
		//playerBullet
			this.bullets = game.add.group();
			this.bullets.enableBody = true;
			this.bullets.physicsBodyType = Phaser.Physics.ARCADE;

		
		
			for (var i = 0; i < 20; i++) {
				var b = this.bullets.create(0, 0, 'bullet');
				b.name = 'bullet' + i;
				b.exists = false;
				b.visible = false;
				b.checkWorldBounds = true;
				b.events.onOutOfBounds.add(this.resetBullet, this);


			}
			game.time.events.loop(Phaser.Timer.SECOND , this.bullShoot);

			this.bullets1 = game.add.group();
			this.bullets1.enableBody = true;
			this.bullets1.physicsBodyType = Phaser.Physics.ARCADE;

			for (var i = 0; i < 20; i++) {
				var b = this.bullets1.create(0, 0, 'bullet1');
				b.name = 'bullet' + i;
				b.exists = false;
				b.visible = false;
				b.checkWorldBounds = true;
				b.events.onOutOfBounds.add(this.resetBullet, this);

			}
			game.time.events.loop(Phaser.Timer.SECOND / 2, this.bullShoot1);

			this.bullets2 = game.add.group();
			this.bullets2.enableBody = true;
			this.bullets2.physicsBodyType = Phaser.Physics.ARCADE;

			for (var i = 0; i < 20; i++) {
				var b = this.bullets2.create(0, 0, 'bullet1');
				b.name = 'bullet' + i;
				b.exists = false;
				b.visible = false;
				b.checkWorldBounds = true;
				b.events.onOutOfBounds.add(this.resetBullet, this);

			}
			game.time.events.loop(Phaser.Timer.SECOND / 2, this.bullShoot2);

			this.bullets3 = game.add.group();
			this.bullets3.enableBody = true;
			this.bullets3.physicsBodyType = Phaser.Physics.ARCADE;

			for (var i = 0; i < 20; i++) {
				var b = this.bullets3.create(0, 0, 'bullet1');
				b.name = 'bullet' + i;
				b.exists = false;
				b.visible = false;
				b.checkWorldBounds = true;
				b.events.onOutOfBounds.add(this.resetBullet, this);

			}
			game.time.events.loop(Phaser.Timer.SECOND / 2, this.bullShoot3);


		
		
		this.bullets4 = game.add.group();
			this.bullets4.enableBody = true;
			this.bullets4.physicsBodyType = Phaser.Physics.ARCADE;

			for (var i = 0; i < 20; i++) {
				var b = this.bullets4.create(0, 0, 'bullet1');
				b.name = 'bullet' + i;
				b.exists = false;
				b.visible = false;
				b.checkWorldBounds = true;
				b.events.onOutOfBounds.add(this.resetBullet, this);

			}
			game.time.events.loop(Phaser.Timer.SECOND *4, this.bullShoot4);


		
	},

	update:function () {

		game.physics.arcade.collide(this.player, this.bullets,this.killP);
		game.physics.arcade.collide(this.player, this.bullets1,this.killP);
		game.physics.arcade.collide(this.player, this.bullets2,this.killP);
		game.physics.arcade.collide(this.player, this.bullets3,this.killP);
		game.physics.arcade.collide(this.player, this.bullets4,this.killP);
		game.physics.arcade.collide(this.bulletsP, this.mage,this.killBoss);

	},
	killP:function(arg1){
		arg1.kill()
		
		game.state.start("menu");
		Level1.hp=100000;
		console.log(Level1.hp);
	},
	resetBullet: function (arg1) {

		arg1.kill();

	},
	bullShoot: function () {

		Level1.bullet = Level1.bullets.getFirstExists(false);


		if (Level1.bullet) {
			Level1.bullet.reset(Level1.mage.x - 70, Level1.mage.y - 8);
			if(Level1.bullet.x==Level1.mage.x-20){
				Level1.bullet.body.velocity.y = 500;
				Level1.bullet.body.velocity.x = -30;
			}
			else{
				Level1.bullet.body.velocity.y = 300;
				Level1.bullet.body.velocity.x = -20;
			}


		}


	},

	bullShoot1: function () {

		var bullet = Level1.bullets.getFirstExists(false);


		if (bullet) {
			bullet.reset(Level1.mage.x + 70, Level1.mage.y - 8);
			if(bullet.x==Level1.mage.x-20){
				bullet.body.velocity.y = 500;
				bullet.body.velocity.x = -30;
			}
			else{
				bullet.body.velocity.y = 500;
				bullet.body.velocity.x = -20;
			}


		}


	},

	bullShoot2: function () {

		var bullet = Level1.bullets.getFirstExists(false);


		if (bullet) {
			bullet.reset(Level1.mage.x + 130, Level1.mage.y - 130);
			if(bullet.x==Level1.mage.x-20){
				bullet.body.velocity.y = 500;
				bullet.body.velocity.x = -30;
			}
			else{
				bullet.body.velocity.y = 500;
				bullet.body.velocity.x = -20;
			}


		}


	},

	bullShoot3: function () {

		var bullet = Level1.bullets.getFirstExists(false);


		if (bullet) {
			bullet.reset(Level1.mage.x - 130, Level1.mage.y - 130);
			
			if(bullet.x==Level1.mage.x-20){
				bullet.body.velocity.y = 500;
				bullet.body.velocity.x = -30;
			}
			else{
				bullet.body.velocity.y = 500;
				bullet.body.velocity.x = -20;
			}
			


		}


	},
		
		bullShoot4: function () {

		var bullet = Level1.bullets.getFirstExists(false);


		if (bullet) {
			bullet.reset(Level1.mage.x , Level1.mage.y );
			if(bullet.x==Level1.mage.x-20){
				bullet.body.velocity.y = 1;
			}
			else{
				bullet.body.velocity.y = 200;
			}
			


		}


	},
	//playerBullShoot
		bullShootP: function () {

		var bullet = Level1.bulletsP.getFirstExists(false);


		if (bullet) {
			bullet.reset(Level1.player.x , Level1.player.y );
			
				bullet.body.velocity.y = -500;
			
			


		}


	},
	killBoss:function(arg1,arg2){
		arg2.kill();
		if(Level1.hp==0){
			arg1.kill();
			 game.state.start("lvl2");
			
		}
		else{
			Level1.hp=Level1.hp-1;
			
		}
	},
	velocMage:function(){
		if(Level1.num==0 || Level1.num==4){
		  game.add.tween(Level1.mage).from( { x:217 }, 1000, Phaser.Easing.Bounce.Out,true); 
            game.add.tween(Level1.mage).from( { y:-100 }, 1000,Phaser.Easing.Bounce.Out,true);
            Level1.num=Level1.num+1;
            console.log(Level1.num)
		   }
        else if(Level1.num==1){
            Level1.mage.x=183;
              Level1.mage.y=348;
          game.add.tween(Level1.mage).from( { x:-50 }, 1000, Phaser.Easing.Bounce.Out,true); 
            game.add.tween(Level1.mage).from( { y:-100 }, 1000,Phaser.Easing.Bounce.Out,true);
            Level1.num=Level1.num+1;
             console.log(Level1.num)
        }
        else if(Level1.num==2){
            
            Level1.num=Level1.num+1;
             console.log(Level1.num)
        }
          else if(Level1.num==3){
            
            Level1.num=Level1.num+1;
               console.log(Level1.num)
        }
		
	},

}
