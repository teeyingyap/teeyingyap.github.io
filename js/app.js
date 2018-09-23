particlesJS('home',{
    "particles":{
    	// shape 
      "number":{
        "value":100,
        "density":{
          "enable":true,
          "value_area":200
        }
      },
      "shape":{
        "type":"star"
      },
      "opacity":{
        "value":0
      },
      "size":{
        "value":1
      },

//line setting
      "line_linked":{
        "enable":true,
        "distance":100,
        "color":"#2f6690",
        "opacity":0.1,
        "width":100
      },


// movement
      "move":{
        "speed":3,
        "direction":"bottom-right"
      }
    },
    "interactivity":{
      "detect_on":"canvas",
      "events":{
// mousehover
        "onhover":{
          "enable":true,
          "mode":"grab"
        },

// mouseclick
        "onclick":{
          "enable":false
        }
      },
      "modes":{
// escape from cursor
        "repulse":{
          "distance":250
        }
      }
    },
    "retina_detect":true,
    "resize":true
  }
);