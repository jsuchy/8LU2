var vows = require ('vows'),
	assert = require ('assert');
var bowling = require ('../bowling')
var Game = bowling.Game;

function rollMany(game, number, score) {
	for (var i=0; i < number; i++) {
		game.roll(score);
	}
}

vows.describe ('Bowling').addBatch({
	'game': {
		topic: function () {
			game = new(Game);
			game.newGame();
			return game;
		},
		'when we roll all gutters': {
			'the score is 0': function (game) {
				rollMany(game, 20, 0);
				assert.equal (game.score, 0);
			}
		},
	}
}).export(module);
