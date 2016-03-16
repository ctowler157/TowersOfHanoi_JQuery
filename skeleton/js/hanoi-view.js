function HanoiView (game, rootEl) {
  this.$el = rootEl;
  this.game = game;
  this.setupTowers();
  this.render();
}

HanoiView.prototype.setupTowers = function () {
  var html = "";
  for (var i = 0; i < 3; i ++) {
    html += "<ul class=\"tower group\" id=\"" + i +"\"></ul>";
  }
  this.$el.append(html);
};

HanoiView.prototype.render = function () {
  for (var i = 0; i < 3; i++ ) {
    var tower = this.game.towers[i];
    var html = "";
      for (var j = tower.length - 1; j >= 0; j--) {
        html += "<li class=\"disk-" + tower[j] + "\"></li>";
      }
    var $tower = $("#" + i);
    $tower.append(html);

  }
};

HanoiView.prototype.clickTower = function () {

};

module.exports = HanoiView;
