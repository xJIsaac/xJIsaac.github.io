/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Textillate Effect for the main header
$(function () {
    $('.tlt').textillate({
      // the default selector to use when detecting multiple texts to animate
      selector: '.texts',

      // enable looping
      loop: false,

      // sets the minimum display time for each text before it is replaced
      minDisplayTime: 2000,

      // sets the initial delay before starting the animation
      // (note that depending on the in effect you may need to manually apply 
      // visibility: hidden to the element before running this plugin)
      initialDelay: 0,

      // set whether or not to automatically start animating
      autoStart: true,

      // custom set of 'in' effects. This effects whether or not the 
      // character is shown/hidden before or after an animation  
      inEffects: [],

      // custom set of 'out' effects
      outEffects: [ 'hinge' ],

      // in animation settings
      in: {
        // set the effect name
        effect: 'fadeInUp',

        // set the delay factor applied to each consecutive character
        delayScale: 1.5,

        // set the delay between each character
        delay: 300,

        // set to true to animate all the characters at the same time
        sync: false,

        // randomize the character sequence 
        // (note that shuffle doesn't make sense with sync = true)
        shuffle: false,

        // reverse the character sequence 
        // (note that reverse doesn't make sense with sync = true)
        reverse: false,

        // callback that executes once the animation has finished
        callback: function () {}
      },

      // out animation settings.
      out: {
        effect: 'hinge',
        delayScale: 1.5,
        delay: 50,
        sync: false,
        shuffle: false,
        reverse: false,
        callback: function () {}
      },

      // callback that executes once textillate has finished 
      callback: function () {},

      // set the type of token to animate (available types: 'char' and 'word')
      type: 'char'
    });
})
