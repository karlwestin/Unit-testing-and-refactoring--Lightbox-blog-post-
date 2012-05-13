/* 
 * Karl Westin
 * Part of the "refactoring javascript for unit testing" blog post
 */

function Lightbox(boxcontent) {
    var content = "<div class='js-overlay'></div>" +
                  "<div class='js-dialog'>" + 
                      "<a href='#' class='js-close'>Close</a>" + 
                      "<div class='js-content'>" + 
                      boxcontent +
                      "</div>" +
                  "</div>",
        width, 
        height;

    $("body").append(content);

    $(".js-overlay").bind("click", this.closeBox);
    $(".js-close").bind("click", this.closeBox);

    width = $(".js-content").width();
    height = $(".js-content").height();
    $(".js-dialog").width(width)
                   .height(height)
                   .css("margin-left", -width/2)
                   .css("margin-top", -height/2);

    $(".js-overlay").hide().fadeIn();
}

Lightbox.prototype = {

    closeBox: function(e) {
        e.preventDefault();
        $(".js-close").unbind("click");
        $(".js-overlay").unbind("click").fadeOut($(".js-overlay").remove.bind($(".js-overlay")));
        $(".js-dialog").remove();
    }

};

$(document).ready(function() {
    $("#boxlink").bind("click", function(e) {
        var content = "<img height='331' width='500' src='img/spaceshuttle.jpg' title='Space shuttle on a Plane!'>" +
                      "<br>Gorgeous photo of the space shuttle by <a href='http://www.flickr.com/photos/deg_io/5702042693/'>flickr user deg_io</a>";

        e.preventDefault();
        new Lightbox(content);
    });
});
