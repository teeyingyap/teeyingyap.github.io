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


document.body.setAttribute("class", "noscroll");
document.getElementById("overlay").style.display = "block";
document.getElementById("spinner").style.display = "block";

window.onload = function() {
	var a = document.getElementById("home-name");
	var b = document.getElementById("home-label");
	var c = document.getElementById("links");
  var animateEl = [a, b, c];

  document.getElementById("spinner").style.display = "none";
  document.getElementById("overlay").style.display = "none";

  document.body.className = document.body.className.replace(/\bnoscroll\b/,'');

  for (var i = 0; i < animateEl.length; i++) {
    animateEl[i].className += " loaded";
  }  	
}

var currentDate = new Date();
var footer = document.getElementById("copyright");
footer.textContent = currentDate.getFullYear() + footer.textContent;


function switchTheme() {
  var element = document.body;
  element.classList.add('color-theme-in-transition');
  element.setAttribute('theme', element.getAttribute('theme') === "dark" ? "light" : "dark");
  window.setTimeout(function() {
    element.classList.remove('color-theme-in-transition')
  }, 1000); 
}


