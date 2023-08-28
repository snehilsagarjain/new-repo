/*import React from "react";
import './prism.css';
import 'https://tympanus.net/Tutorials/PrismEffectSlider/js/PrismSlider.js';
import 'https://tympanus.net/Tutorials/PrismEffectSlider/js/utils/easing.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js';
import '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js';
import "https://cdnjs.cloudflare.com/ajax/libs/fabric.js/3.6.2/fabric.min.js";
function Prism(){
/** The slideshow controller - Get settings and initialise PrismSlider for each layer, add controls and events, then call slideTo method on click.
    @return {Object} The set of public methods.                                                                                                    */
/*var slideshow = (function(window, undefined) { 'use strict';

/** Enum navigation classes, attributes and provide navigation DOM element container. */
/*var navigation = { selector: '.navigation', element: null, bullet: 'li', attrs: { active: 'active', index: 'data-index' } };

/** Enum main element, sizes and provide main DOM element container. @type {Object} */
/*var container = { selector: '.prism-slider', element: null, sizes: { w: 1200, h: 960 } };

/** Set of images to be used. @type {Array} */
/*var slides = [ 'https://tympanus.net/Tutorials/PrismEffectSlider/img/nature-a.jpg', 'https://tympanus.net/Tutorials/PrismEffectSlider/img/nature-b.jpg',
               'https://tympanus.net/Tutorials/PrismEffectSlider/img/nature-c.jpg', 'https://tympanus.net/Tutorials/PrismEffectSlider/img/nature-d.jpg'  ];

/** Set of masks with related effects. @type {Array} */
/*var masks = [ { source: 'https://tympanus.net/Tutorials/PrismEffectSlider/img/masks/cube-a.svg', effects: { flip: 'Y'  , rotate: 167 /* degrees *//* } },
             /* { source: 'https://tympanus.net/Tutorials/PrismEffectSlider/img/masks/cube-b.svg', effects: { flip: 'X'  , rotate: 90  /* degrees */ /*} },
            /*  { source: 'https://tympanus.net/Tutorials/PrismEffectSlider/img/masks/cube-c.svg', effects: { flip: false, rotate: 13  /* degrees */ /*} }  ];

/** Set global easing. @type {Function(currentTime)}    */ //var easing    = Easing.easeInOutQuint;
/** Set global duration. @type {Number}                 */ //var duration  = 1000;
/** Container for PrismSlider instances. @type {Object} */ //var instances = {};
/** Init */ //function init() { getContainer_(); initSlider_(); initPrism_(); addNavigation_(); addEvents_(); }
/** Get main container element & store in container element */ //function getContainer_() { container.element = document.querySelector(container.selector); }

/** Init Slides. Create and initialise main background slider (first layer). Since we'll use this as main slider no mask is given. */
/*function initSlider_() {
  instances.slider = new PrismSlider({ container: container, slides: slides, mask: false, duration: duration, easing: easing });
  instances.slider.init();     // Initialise instance.
}

/** Init Masks. Loop masks variable and create a new layer for each mask object. */
/*function initPrism_() {
  masks.forEach(function(mask, i) {
    var name = 'mask_' + i; // Generate reference name.
    instances[name] = new PrismSlider({container: container, slides: slides, mask: mask /* Here is the mask object. *//*, duration: duration, easing: easing });
    /*instances[name].init();       // Initialise instance.
  });
}


/** Add Navigation. Create a new bullet for each slide and add it to navigation (ul) with data-index reference. */
/*function addNavigation_() {
  navigation.element = document.querySelector(navigation.selector);     // Store navigation element.
  slides.forEach(function(slide, i) {
    var bullet = document.createElement(navigation.bullet); bullet.setAttribute(navigation.attrs.index, i);
    if (i === 0) bullet.className = navigation.attrs.active;       // When it's first bullet set class as active.
    navigation.element.appendChild(bullet);
  });
}

/** Add Events. Bind click on bullets. */
/*function addEvents_() {
  navigation.element.addEventListener('click', function(e) {                                    // Detect click on navigation elment (ul).
    var bullet = e.target;                                                                      // Get clicked element.
    var isBullet = bullet.nodeName === navigation.bullet.toUpperCase();                         // Detect if clicked element is actually bullet (li).
    if(isBullet && !instances.slider.isAnimated) {                                              // Check bullet & prevent action if animation is in progress.
      for(var i=0;i<navigation.element.childNodes.length;i++){ navigation.element.childNodes[i].className=''; /*Remove active class from all bullets*/ //} 
      /*bullet.className = navigation.attrs.active;                                               // Add active class to clicked bullet.
      var index = Number(bullet.getAttribute(navigation.attrs.index));                          // Get index from data attribute and convert string to no
      slideAllTo_(index);                                                                       // Call slideAllTo method with index.
    }
  });
}


/** Call slideTo method of each instance. In order to sync sliding of all layers, we'll loop through instances object & call slideTo method for each instance.       @param {Number} index The index of the destination slide.                                                                                               */
/*function slideAllTo_(index) {     // Loop PrismSlider instances.
  for (var key in instances) { if (instances.hasOwnProperty(key)) { instances[key].slideTo(index);         /* Call slideTo for current instance. *//* } } }
/*return { init: init };
})(window);

/** Bootstrap slideshow plugin - For demo purposes, images are preloaded inside div hidden with css, plugin initialisation is delayed through window.onload, 
                               in real life scenario would be better to preload images asynchronously with javascript.                                     */
/*window.onload = slideshow.init;
    return(
<div class="container"> <header class="codrops-header"> <h1>Prism Effect Slider</h1> </header>
			<div class="content">
				<div class="cache">
					<img src="https://tympanus.net/Tutorials/PrismEffectSlider/img/masks/cube-a.svg"/>
					<img src="https://tympanus.net/Tutorials/PrismEffectSlider/img/masks/cube-b.svg"/>
					<img src="ihttps://tympanus.net/Tutorials/PrismEffectSlider/img/masks/cube-c.svg"/>
					<img src="https://tympanus.net/Tutorials/PrismEffectSlider/img/nature-a.jpg"/>
					<img src="https://tympanus.net/Tutorials/PrismEffectSlider/img/nature-b.jpg"/>
					<img src="https://tympanus.net/Tutorials/PrismEffectSlider/img/nature-c.jpg"/>
					<img src="https://tympanus.net/Tutorials/PrismEffectSlider/img/nature-d.jpg"/>
				</div>

				<div class="wrapper">
					<div class="prism-slider prism-slider--left"> <ul class="navigation"></ul> </div>
					<div class="copy copy--left">
						<article>
							<h2>Nature Reveals</h2>
							<p> Our physical world, respect and explore, Where water meets land; a beautiful shore. </p>
							<p> Mountains we conquer, look down in awe, If you're an artist, make sure you draw.
								  Nature exciting, adventurously new, Much more to see, than a sky that is blue.
								  It offers so much, open your eyes, Hope of today, with every sunrise.          			</p>
						</article>
					</div>
				</div>
			</div>
		</div>
    );
}
export default Prism;*/