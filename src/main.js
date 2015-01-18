csscriticLib.main = function (regression, reporting, util, storage) {
    "use strict";

    var module = {};

    var reporters = [],
        testCases = [];


    module.addReporter = function (reporter) {
        reporters.push(reporter);
    };

    var supportUrlAsOnlyTestCaseInput = function (testCase) {
        if (typeof testCase === 'string') {
            return {
                url: testCase
            };
        }
        return testCase;
    };

    module.add = function (testCase) {
        testCases.push(supportUrlAsOnlyTestCaseInput(testCase));
    };

    var fetchStartingComparisons = function (testCases) {
        return util.all(testCases.map(function (testCase) {
            return storage.readReferenceImage(testCase)
                .then(function (referenceImageRecord) {
                    return {
                        testCase: testCase,
                        referenceImage: referenceImageRecord.image,
                        viewport: referenceImageRecord.viewport
                    };
                }, function () {
                    // no referenceImage found
                    return {
                        testCase: testCase
                    };
                });
        }));
    };

    var reportConfiguredComparisons = function (startingComparisons) {
        return util.all(startingComparisons.map(function (startingComparison) {
            return reporting.doReportConfiguredComparison(reporters, startingComparison);
        }));
    };

    var executeTestCase = function (startingComparison) {
        return regression.compare(startingComparison).then(function (comparison) {
            return reporting.doReportComparison(reporters, comparison).then(function () {
                return comparison;
            });
        });
    };

    module.execute = function () {
        var startingComparisons, allPassed;

        return fetchStartingComparisons(testCases)
            .then(function (startingComp) {
                startingComparisons = startingComp;

                return reportConfiguredComparisons(startingComp);
            })
            .then(function () {
                return util.all(startingComparisons.map(
                    executeTestCase
                ));
            })
            .then(function (comparisons) {
                allPassed = util.hasTestSuitePassed(comparisons);
            })
            .then(function () {
                return reporting.doReportTestSuite(reporters, allPassed);
            })
            .then(function () {
                return allPassed;
            });
    };

    return module;
};
