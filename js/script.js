/* 
 * Karl Westin
 * Part of the "refactoring javascript for unit testing" blog post
 */

function Lightbox(boxcontent, $parent) {
    this._addElements(boxcontent, $parent);
    this._autoSize();
    this._bindEvents();
}

Lightbox.prototype = {

    _addElements: function(boxcontent, $parent) {
        var content = "<div class='js-overlay'></div>" +
                      "<div class='js-dialog'>" + 
                          "<a href='#' class='js-close'>Close</a>" + 
                          "<div class='js-content'>" + 
                          boxcontent +
                          "</div>" +
                      "</div>",
            width, 
            height;

        $parent = $parent || $("body");
        $parent.append(content);

        this.$closeBtn = $parent.find('.js-close');
        this.$overlay  = $parent.find('.js-overlay');
        this.$dialog   = $parent.find('.js-dialog');

        this.$overlay.hide().fadeIn();
    },

    _autoSize: function() {
        var $content = this.$dialog.find(".js-content"),
            width =  $content.width(),
            height = $content.height();

        this.$dialog.width(width)
                    .height(height)
                    .css("margin-left", -width/2)
                    .css("margin-top", -height/2);
    },

    _bindEvents: function() {
        this.$overlay.bind("click", this.close);
        this.$closeBtn.bind("click", this.close);
    },

    close: function(e) {
        if(e) {
            e.preventDefault();
        }
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
