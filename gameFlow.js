(function(){
	
	game.flow = {
		start: function(){
			game.startScene.hide();
			game.InGame.hide();
			game.startScene.show();
			game.startScene.handleInput();
		},
		inGame: function(){
			game.startScene.hide();
			game.InGame.show();
			game.InGame.handleInput();
		},
	}
})();