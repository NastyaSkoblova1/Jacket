setTimeout(function() {
  window.onresize = function() {
  var jacket = document.querySelector('.jacket');
  var jacketBlue = document.querySelector('.jacket-blue');
  var jacketYellow = document.querySelector('.jacket-yellow');
  var width = jacket.clientWidth * 0.5;
  TweenLite.to(jacketBlue, 0, {x: width});
  TweenLite.to(jacketYellow, 0, {x: -width});
}}, 5000);

window.onload = function() {
var jackets = document.querySelector('.jackets');
var jacket = document.querySelector('.jacket');
var jacketBlue = document.querySelector('.jacket-blue');
var jacketYellow = document.querySelector('.jacket-yellow');
var jacketYellowOutline = document.querySelector('.jacket-yellow .outline');
var highlightBlue = document.querySelector('.highlight-blue');
var highlightYellow = document.querySelector('.highlight-yellow');
var vsText = document.querySelector('.vs-text');
var width = jacket.clientWidth * 0.5;
// var offsetWidth = ($('.container').width() - $('.jacket').width() * 2) * 0.5;
var labelYellow = document.querySelectorAll('.jacket-yellow .labels g');
var labelBlueWidth = document.querySelectorAll('.jacket-blue .labels g rect');
var arrowLineYellow = document.querySelectorAll('.jacket-yellow .arrows g path:first-child');
var arrowLeftYellow = document.querySelectorAll('.jacket-yellow .arrows g path:nth-child(2)');
var arrowRightYellow = document.querySelectorAll('.jacket-yellow .arrows g path:last-child');
var jacketBlueLabels = document.querySelectorAll('.jacket-blue .labels g');
var jacketYellowLabels = document.querySelectorAll('.jacket-yellow .labels g rect');
var jacketBlueLine = document.querySelectorAll('.jacket-blue .arrows g path:first-child');
var jacketBlueArrowLeft = document.querySelectorAll('.jacket-blue .arrows g path:nth-child(2)');
var jacketBlueArrowRight = document.querySelectorAll('.jacket-blue .arrows g path:last-child');
var labels = [];
var labelsWidth = [];
var labelsXCoordinate = [];
var arrowLine = [];
var arrowLeft = [];
var arrowRight = [];
var canvasHeight = jacket.clientHeight;
jackets.style.height = canvasHeight + 'px';

for (var i = 0; i < jacketBlueLine.length; i++) {
  arrowLine.push(jacketBlueLine[i].getAttribute('d'))
  arrowLeft.push(jacketBlueArrowLeft[i].getAttribute('transform'));
  arrowRight.push(jacketBlueArrowRight[i].getAttribute('transform'));
  labelsWidth.push(jacketYellowLabels[i].getAttribute('width'));
  labelsXCoordinate.push(jacketYellowLabels[i].getAttribute('x'));
  labels.push(jacketBlueLabels[i].getAttribute('transform'));
}

TweenLite.to(highlightBlue, 1, {color: '#0098e6', delay: 1});
TweenLite.to(jacketBlue, 1, {alpha: 1, delay: 1});
TweenLite.to(vsText, 1, {alpha: 1, delay: 2});
TweenLite.to(highlightYellow, 1, {color: '#fceb1a', delay: 3});
TweenLite.to(jacketYellow, 1, {alpha: 1, delay: 3});
TweenLite.to(jacketBlue, 1, {x: width, delay: 5});
TweenLite.to(jacketYellow, 1, {x: -width, delay: 5});
TweenLite.to(vsText, 0.5, {alpha: 0, delay: 5});
TweenLite.to(jacketYellowOutline, 0.5, {fill: 'rgba(255, 251, 242, .3)', delay: 5.3});

for (var i = 0; i < labelYellow.length; i++) {
  TweenLite.to(labelYellow[i], 0.5, {attr: {transform: labels[i]}, delay: 6});
  TweenLite.to(labelBlueWidth[i], 0.5, {attr: {width: labelsWidth[i]}, delay: 6});
  TweenLite.to(labelBlueWidth[i], 0.5, {attr: {x: labelsXCoordinate[i]}, delay: 6});
  TweenLite.to(arrowLineYellow[i], 0.5, {attr: {d: arrowLine[i]}, delay: 6});
  TweenLite.to(arrowLeftYellow[i], 0.5, {attr: {transform: arrowLeft[i]}, delay: 6});
  TweenLite.to(arrowRightYellow[i], 0.5, {attr: {transform: arrowRight[i]}, delay: 6});
}
};