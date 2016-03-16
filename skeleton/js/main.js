var HanoiView = require('./hanoi-view');
var HanoiGame = require('./hanoi-game');
console.log("Looks like we made ittttt");

$(function () {
  var rootEl = $('.hanoi');
  var game = new HanoiGame();
  new HanoiView(game,rootEl);
});
