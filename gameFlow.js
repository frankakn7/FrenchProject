var Start = document.getElementById("Start");
var InGame = document.getElementById("InGame");

(function(){
	
	game.flow = {
		start: function(){
			InGame.style.display = 'none';
			Start.style.display = 'inline-block';
		},
		inGame: function(){
			Start.style.display = 'none';
			InGame.style.display = 'inline-block';
		},
	}
})();