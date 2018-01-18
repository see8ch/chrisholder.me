(function($) {
    // Class toggle meant for showing and hiding content
    $('.view').click(function() {
    // Uncomment the following line to limit one show at a time.
    //    $('.view.show').removeClass('show');
        $(this).toggleClass('show');
        return false;
    });
    // Class toggle meant for showing and hiding content
    $('.toggle').click(function() {
    // Uncomment the following line to limit one show at a time.
    //    $('.view.show').removeClass('show');
        $(this).toggleClass('toggled');
        return false;
    });
})(jQuery);

$('ul.tabs').each(function(){
    // For each set of tabs, we want to keep track of
    // which tab is active and it's associated content
    var $active, $content, $links = $(this).find('a');

    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass('active');
    $content = $($active.attr('href'));
    $content.addClass('yup');

    // Hide the remaining content
    $links.not($active).each(function () {
        //$($(this).attr('href')).hide();
        $($(this).attr('href')).addClass('hidden');
    });

    // Bind the click event handler
    $(this).on('click', 'a', function(e){
        // Make the old tab inactive.
        $active.removeClass('active');
        //$content.hide();
        $content.addClass('hidden');
        $content.removeClass('yup');

        // Update the variables with the new link and content
        $active = $(this);
        $content = $($(this).attr('href'));

        // Make the tab active.
        $active.addClass('active');
        //$content.show();
        $content.removeClass('hidden');
        $content.addClass('yup');

        // Prevent the anchor's default click action
        e.preventDefault();
    });
});