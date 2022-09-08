"use strict";

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

var element = document.querySelector("#canvas");
var w = document.body.clientWidth;
var h = document.body.clientHeight;
element.width = w;
element.height = h;
var ctx = element.getContext("2d");
var position = Array(300).join(0).split("");

var initMatrix = function initMatrix() {
  var _this2 = this;

  _newArrowCheck(this, _this);

  ctx.fillStyle = "rgba(0, 15, 2, .15)";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "rgba(0, 150, 0, .9)";
  ctx.font = "11pt";
  position.map(function (y, index) {
    _newArrowCheck(this, _this2);

    var text = String.fromCharCode(1e3 + Math.random() * 30);
    var x = index * 15;
    canvas.getContext("2d").fillText(text, x, y);
    y > 100 + Math.random() * 1e5 ? position[index] = 0 : position[index] = y + 15;
  }.bind(this));
}.bind(void 0);

setInterval(initMatrix, 50);