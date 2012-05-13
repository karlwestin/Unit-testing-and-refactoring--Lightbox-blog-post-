describe("Lightbox tests", function() {

    beforeEach(function() {
        var content = "<div style='width: 100px; height: 110px; position: relative; display: inline-block; background-color: #fff;'>My test-content</div>"

        // for unit-testing purposes, we turn jQuery.fx off
        $.fx.off = true;

        setFixtures(sandbox());
        this.$sandbox = $("#sandbox");
        this.lightBox = new Lightbox(content, this.$sandbox);
    });

    afterEach(function() {
        $.fx.off = false;
    });

    it("should create the necessary elements", function() {
        expect(this.$sandbox).toContain(".js-overlay");
        expect(this.$sandbox).toContain(".js-close");
        expect(this.$sandbox).toContain(".js-dialog");
    });
    
    it("should contain the content", function() {
        expect(this.$sandbox).toHaveText(/test-content/i);
    });

    it('should auto-resize the box', function() {
        expect($(".js-dialog").width()).toEqual(100);
        expect($(".js-dialog").height()).toEqual(110);
    });

    it("should remove the box when clicking 'close'", function() {
       $(".js-close").click();
       expect(this.$sandbox).not.toContain(".js-overlay");
    });
    
    it("should remove the box when clicking the overlay", function() {
       $(".js-overlay").click();
       expect(this.$sandbox).not.toContain(".js-overlay");
    });

    it("should remove the lightbox completely", function() {
       $(".js-close").click();
       expect(this.$sandbox).not.toContain(".js-overlay");
       expect(this.$sandbox).not.toContain(".js-dialog");
    });

});

