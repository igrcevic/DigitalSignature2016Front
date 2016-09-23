/**
 * Created by ivangrcevic on 20/9/16.
 */
var CertLoader = (function(){

    var doLoadCert = function(pathToFile) {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            // Great success! All the File APIs are supported.
        } else {
            alert('The File APIs are not fully supported in this browser.');
        }
    };

    return {
        loadCert: doLoadCert(pathToFile)
    }

})();
