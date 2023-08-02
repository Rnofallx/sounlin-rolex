$(document).ready(function() {
    $('.fill').each(function() {
        let value = $(this).attr('fill');
        $(this).css({ "width": "0%" }); 
        $(this).animate({ "width": value + "%" }, {
            duration: 2000, 
            step: function(now) {
                let progress = Math.round(now);
                $(this).children('p').text(progress + "%");
            },
            complete: function() {
                $(this).children('p').text(value + "%");
            }
        });
    });
});
