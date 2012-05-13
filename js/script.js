/* 
 * Karl Westin
 * Part of the "refactoring javascript for unit testing" blog post
 */

$(document).ready(function() {

    $("#boxlink").bind("click", function(e) {
        var content = "<div class='js-overlay'></div>" +
                      "<div class='js-dialog'>" + 
                          "<a href='#' class='js-close'>Close</a>" + 
                          "<div class='js-content'>" + 

                          // content:
                          "<img height='331' width='500' src='img/spaceshuttle.jpg' title='Space shuttle on a Plane!'>" +
                          "<br>Gorgeous photo of the space shuttle by <a href='http://www.flickr.com/photos/deg_io/5702042693/'>flickr user deg_io</a>" + 

                          "</div>" +
                      "</div>",
            width, 
            height;

        e.preventDefault();
                      
        $("body").append(content);

        $(".js-overlay").bind("click", closeBox);
        $(".js-close").bind("click", closeBox);

        width = $(".js-content").width();
        height = $(".js-content").height();
        $(".js-dialog").width(width)
                       .height(height)
                       .css("margin-left", -width/2)
                       .css("margin-top", -height/2);

        $(".js-overlay").hide().fadeIn();
    });

    function closeBox(e) {
        e.preventDefault();
        $(".js-close").unbind("click");
        $(".js-overlay").unbind("click").fadeOut($(".js-overlay").remove.bind($(".js-overlay")));
        $(".js-dialog").remove();
    }

});
