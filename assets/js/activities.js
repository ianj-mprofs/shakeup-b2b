var originalText;

$('.activity').hover(
    function() {
        originalText = $(this).find('h3').text();
        $(this).find('h3').text('Coming Soon');
    },
    function() {
        $(this).find('h3').text(originalText);
    }
);