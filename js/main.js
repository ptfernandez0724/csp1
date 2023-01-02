// Scroll to Top
jQuery.noConflict();
(function($) {
    $('body').scroll(function() {
        if ($(this).scrollTop() >= 50) {
            $('#return-to-top').fadeIn(200); 
        } else {
            $('#return-to-top').fadeOut(200); 
        }
    });
    $('#return-to-top').click(function() {
        $('body,html').animate(
            {
                scrollTop: 0
            },
            500
        );
    });
})(jQuery);

// Scroller
jQuery.noConflict();
(function($) {
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body')
                .stop()
                .animate(
                    {
                        scrollTop: $($anchor.attr('href')).offset().top
                    },
                    1500,
                    'easeInOutExpo'
                );
            event.preventDefault();
        });
    });
})(jQuery);

// Hello Typer
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 1) || 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 200;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

// Counter
jQuery.noConflict();
(function($) {
    $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({
            countNum: $this.text()
        }).animate(
            {
                countNum: countTo
            },

            {
                duration: 7000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            }
        );
    });
})(jQuery);

// Copier
const emailElm = document.querySelector('.js-email');
const emailText = document.querySelector('.js-email span');
const original = emailElm.innerHTML;

emailElm.addEventListener('click', function() {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(emailText);
    selection.removeAllRanges();
    selection.addRange(range);
    try {
        document.execCommand('copy');
        selection.removeAllRanges();
        emailElm.textContent = 'Copied!';
        emailElm.classList.add('success');

        setTimeout(() => {
            emailElm.innerHTML = original;
            emailElm.classList.remove('success');
        }, 1200);
    } catch (e) {
        emailElm.classList.add('error');
        emailElm.textContent = 'Failed to copy. Please try again.';
        setTimeout(() => {
            emailElm.classList.remove('error');
            emailElm.innerHTML = original;
        }, 1000);
    }
});

// Map
function initMap() {
  
  var location = {lat: 43.490850, lng: -80.518380};
  
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: location,

  });
  
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}