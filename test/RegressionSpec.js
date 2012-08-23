describe("Regression testing", function () {
    var getCanvasForPageUrl, getImageForUrl,
        htmlCanvas, referenceImage;

    beforeEach(function () {
        htmlCanvas = jasmine.createSpy('htmlCanvas');
        referenceImage = {
            width: 42,
            height: 7
        };

        getCanvasForPageUrl = spyOn(cssregressiontester.util, 'getCanvasForPageUrl').andCallFake(function (pageUrl, width, height, callback) {
            callback(htmlCanvas);
        });
        getImageForUrl = spyOn(cssregressiontester.util, 'getImageForUrl').andCallFake(function (referenceImageUrl, callback) {
            callback(referenceImage);
        });
    });

    afterEach(function () {
        cssregressiontester.clearReporters();
    });

    describe("Reference comparison", function () {
        it("should compare a page with a reference image and return true on success", function () {
            var success, imagediffEqual;

            imagediffEqual = spyOn(imagediff, 'equal').andReturn(true);

            cssregressiontester.compare("samplepage.html", "samplepage_reference.png", function (result) {
                success = result;
            });

            expect(getCanvasForPageUrl).toHaveBeenCalledWith("samplepage.html", 42, 7, jasmine.any(Function));
            expect(getImageForUrl).toHaveBeenCalledWith("samplepage_reference.png", jasmine.any(Function));
            expect(imagediffEqual).toHaveBeenCalledWith(htmlCanvas, referenceImage);

            expect(success).toBeTruthy();
        });

        it("should compare a page with a reference image and return false on failure", function () {
            var success, imagediffEqual;

            imagediffEqual = spyOn(imagediff, 'equal').andReturn(false);

            success = cssregressiontester.compare("differentpage.html", "samplepage_reference.png", function (result) {
                success = result;
            });

            expect(getCanvasForPageUrl).toHaveBeenCalledWith("differentpage.html", 42, 7, jasmine.any(Function));
            expect(getImageForUrl).toHaveBeenCalledWith("samplepage_reference.png", jasmine.any(Function));
            expect(imagediffEqual).toHaveBeenCalledWith(htmlCanvas, referenceImage);

            expect(success).toBeFalsy();
        });
    });

    describe("Reporting", function () {
        var reporter, diffCanvas;

        beforeEach(function () {
            reporter = jasmine.createSpyObj("Reporter", ["reportComparison"]);
            cssregressiontester.addReporter(reporter);

            diffCanvas = jasmine.createSpy('diffCanvas');
        });

        it("should report a successful comparison", function () {
            spyOn(imagediff, 'equal').andReturn(true);

            cssregressiontester.compare("differentpage.html", "samplepage_reference.png");

            expect(reporter.reportComparison).toHaveBeenCalledWith({
                passed: true,
                pageUrl: "differentpage.html",
                pageCanvas: htmlCanvas,
                referenceUrl: "samplepage_reference.png",
                referenceImage: referenceImage
            });
        });

        it("should report a canvas showing the difference on a failing comparison", function () {
            spyOn(imagediff, 'equal').andReturn(false);
            imagediffDiffSpy = spyOn(imagediff, 'diff').andReturn(diffCanvas);

            cssregressiontester.compare("differentpage.html", "samplepage_reference.png");

            expect(reporter.reportComparison).toHaveBeenCalledWith({
                passed: false,
                pageUrl: "differentpage.html",
                pageCanvas: htmlCanvas,
                referenceUrl: "samplepage_reference.png",
                referenceImage: referenceImage,
                differenceImageData: diffCanvas
            });
            expect(imagediffDiffSpy).toHaveBeenCalledWith(htmlCanvas, referenceImage);
        });
    });
});
