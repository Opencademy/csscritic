describe("Reporter", function () {
    describe("Basic HTML reporter", function () {
        var reporter, htmlCanvas, referenceImage, differenceImageCanvas, differenceImageData;

        beforeEach(function () {
            reporter = cssregressiontester.BasicHTMLReporter();

            htmlCanvas = window.document.createElement("canvas");
            referenceImage = new window.Image();
            differenceImageCanvas = window.document.createElement("canvas");
            differenceImageData = differenceImageCanvas.getContext("2d").createImageData(1, 1);
            
            spyOn(cssregressiontester.util, 'getCanvasForImageData').andCallFake(function (differenceImageData) {
                return differenceImageCanvas;
            });
        });

        afterEach(function () {
            $("#cssregressiontester_basichtmlreporter").remove();
        });

        it("should show an entry for the reported test", function () {
            reporter.reportComparison({
                passed: true,
                pageUrl: "page_url",
                pageCanvas: htmlCanvas,
                referenceUrl: "reference_img_url",
                referenceImage: referenceImage
            });

            expect($("#cssregressiontester_basichtmlreporter")).toExist();
            expect($("#cssregressiontester_basichtmlreporter .comparison")).toExist();
        });

        it("should show an entry as passed", function () {
            reporter.reportComparison({
                passed: true,
                pageUrl: "page_url",
                pageCanvas: htmlCanvas,
                referenceUrl: "reference_img_url",
                referenceImage: referenceImage
            });

            expect($("#cssregressiontester_basichtmlreporter .passed.comparison")).toExist();
        });

        it("should show an entry as failed", function () {
            reporter.reportComparison({
                passed: false,
                pageUrl: "page_url",
                pageCanvas: htmlCanvas,
                referenceUrl: "reference_img_url",
                referenceImage: referenceImage,
                differenceImageData: differenceImageData
            });

            expect($("#cssregressiontester_basichtmlreporter .failed.comparison")).toExist();
        });

        it("should show the status as passed", function () {
            reporter.reportComparison({
                passed: true,
                pageUrl: "page_url",
                pageCanvas: htmlCanvas,
                referenceUrl: "reference_img_url",
                referenceImage: referenceImage
            });

            expect($("#cssregressiontester_basichtmlreporter .comparison .status").text()).toEqual("passed");
        });

        it("should show the status as failed", function () {
            reporter.reportComparison({
                passed: false,
                pageUrl: "page_url",
                pageCanvas: htmlCanvas,
                referenceUrl: "reference_img_url",
                referenceImage: referenceImage,
                differenceImageData: differenceImageData
            });

            expect($("#cssregressiontester_basichtmlreporter .comparison .status").text()).toEqual("failed");
        });

        it("should show the page url", function () {
            reporter.reportComparison({
                passed: true,
                pageUrl: "page_url<img>",
                pageCanvas: htmlCanvas,
                referenceUrl: "reference_img_url",
                referenceImage: referenceImage
            });

            expect($("#cssregressiontester_basichtmlreporter .comparison .pageUrl").text()).toEqual("page_url<img>");
        });

        it("should show the diff on a failing comparison", function () {
            reporter.reportComparison({
                passed: false,
                pageUrl: "page_url<img>",
                pageCanvas: htmlCanvas,
                referenceUrl: "reference_img_url",
                referenceImage: referenceImage,
                differenceImageData: differenceImageData
            });

            expect($("#cssregressiontester_basichtmlreporter .comparison .differenceCanvas canvas").get(0)).toBe(differenceImageCanvas);
        });
    });
});
