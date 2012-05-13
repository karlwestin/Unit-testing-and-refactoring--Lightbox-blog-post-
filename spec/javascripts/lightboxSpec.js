describe("Lightbox tests", function() {

    beforeEach(function() {
        var content = "<div style='width: 100px; height: 110px; position: relative; display: inline-block; background-color: #fff;'>My test-content</div>"

        // for unit-testing purposes, we turn jQuery.fx off
        $.fx.off = true;

        setFixtures(sandbox());
        this.$sandbox = $("#sandbox");
        this.lb = new Lightbox(content, this.$sandbox);
    });

    afterEach(function() {
        $.fx.off = false;
    });

    it("should create the necessary elements", function() {
        expect(this.$sandbox).toContain(this.lb.$overlay);
        expect(this.$sandbox).toContain(this.lb.$closeBtn);
        expect(this.$sandbox).toContain(this.lb.$dialog);
    });
    
    it("should contain the content", function() {
        expect(this.$sandbox).toHaveText(/test-content/i);
    });

    it('should auto-resize the box', function() {
        expect(this.lb.$dialog.width()).toEqual(100);
        expect(this.lb.$dialog.height()).toEqual(110);
    });

    it("should remove the box when clicking 'close'", function() {
       this.lb.$closeBtn.click();
       expect(this.$sandbox).not.toContain(this.lb.$overlay);
    });
    
    it("should remove the box when clicking the overlay", function() {
       this.lb.$overlay.click();
       expect(this.$sandbox).not.toContain(this.lb.$overlay);
    });

    it("should remove the lightbox completely", function() {
       this.lb.close();
       expect(this.$sandbox).not.toContain(this.lb.$overlay);
       expect(this.$sandbox).not.toContain(this.lb.$dialog);
    });

});

