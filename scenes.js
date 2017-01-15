(function(){
	//Scenes
	var scene = {
		node: document.querySelector('.scene'),
		show: function(){
			this.node.classList.remove('out');
			this.node.classList.add('in');
		},
		hide: function(){
			this.node.classList.remove('in');
			this.node.classList.add('out');
		},
	};
	
	var startScene = game.startScene = Object.create(scene);
		startScene.node = document.getElementById('Start');
		startScene.handleInput = function(){
			console.log("start");
		}
		
	var InGame = game.InGame = Object.create(scene);
		InGame.node = document.getElementById('InGame');
		InGame.handleInput = function(){
			console.log("gameRunning");
		}
})();