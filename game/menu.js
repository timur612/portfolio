var Menu={
	preload:function(){
			game.load.image('back', 'img/back2.png');
			game.load.image('btn', 'img/realbtn.png');
	},
    back:null,
    btn:null,
	create:function(){
		this.back=game.add.sprite(0,0, 'back');
		this.btn=game.add.sprite(game.world.centerX-190, game.world.centerY-150,'btn');
         this.btn.inputEnabled = true;
        this.btn.events.onInputDown.add(this.click);
        
	},
	
	update:function(){
		
	},
    click:function(){
         game.state.start("lvl1");
    }
	
}