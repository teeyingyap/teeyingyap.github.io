var elements = document.getElementsByClassName('about-animate');
var triggered = false;
var TitleAnimate = function(el) {
  this.el = el;
  this.txt = '';
  this.tick();
};

TitleAnimate.prototype.tick = function() {
  var fullTxt = 'Hi, I\'m Tee Ying.';
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  
  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;
  
  setTimeout(function() {
    that.tick();
  }, delta);
};

var waypoint = new Waypoint({
  element: elements[0],
  handler: function(direction) {
    if (!triggered) {
      // do animation
      new TitleAnimate(elements[0]);
      // add cursor
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".about-animate > .wrap { border-right: 0.08em solid #666 }";
      document.body.appendChild(css);
    }
    triggered = true;
    
  },
  offset: 'bottom-in-view'
})

window.onload = function() {
	var a = document.getElementById("home-name");
	var b = document.getElementById("home-label");
	var c = document.getElementById("links");
  var animateEl = [a, b, c];

  for (var i = 0; i < animateEl.length; i++) {
    animateEl[i].className += " loaded";
  }  	
}