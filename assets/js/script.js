// ***Used to animate while scrolling***
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

// Controls where on screen animation activates
const appearOptions = {
    rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);
 
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});


// ***Used to change text on hover***
var originalText;

$('.activity').first().hover(
    function() {
        originalText = $(this).find('h3').text();
        $(this).find('h3').text('Coming Soon');
    },
    function() {
        $(this).find('h3').text(originalText);
    }
);

$('.activity').last().hover(
    function() {
        originalText = $(this).find('h3').text();
        $(this).find('h3').text('Coming Soon');
    },
    function() {
        $(this).find('h3').text(originalText);
    }
);

// ***Used to change text on mobile***
$('.activity').first().on("touchstart",
    function() {
        originalText = $(this).find('h3').text();
        $(this).find('h3').text('Coming Soon');
    }).on("touchend", 
    function() {
        $(this).find('h3').text(originalText);
    });

$('.activity').last().on("touchstart",
    function() {
        originalText = $(this).find('h3').text();
        $(this).find('h3').text('Coming Soon');
    }).on("touchend", 
    function() {
        $(this).find('h3').text(originalText);
    });