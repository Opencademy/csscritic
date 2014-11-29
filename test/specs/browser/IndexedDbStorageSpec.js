describe("IndexedDB storage", function () {
    "use strict";

    var util = csscriticLib.util();

    var db;

    var constructStorage = function (util) {
        return csscriticLib.indexeddbstorage(util);
    };

    beforeEach(function (done) {
        var request = indexedDB.open('csscritic', 1);
        request.onsuccess = function (event) {
            db = event.target.result;
            done();
        };
        request.onupgradeneeded = function(event) {
            var db = event.target.result;

            db.createObjectStore('references', { keyPath: "key" });
        };
    });

    afterEach(function (done) {
        db.close();

        var request = indexedDB.deleteDatabase('csscritic');
        request.onsuccess = done;
    });

    var readStoredReferenceImage = function (key) {
    };

    var storeReferenceImage = function (key, stringData) {
        var data = JSON.parse(stringData);
        db.transaction(['references'], 'readwrite')
            .objectStore('references')
            .add({key: key, data: data});
    };

    loadStoragePluginSpecs(constructStorage, readStoredReferenceImage, storeReferenceImage);
});