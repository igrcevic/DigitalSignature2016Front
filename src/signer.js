/**
 * Created by ivangrcevic on 20/9/16.
 */
var Signer = (function(){

    var doSign = function(rsaPrivateKey, string) {
        var sig = new KJUR.crypto.Signature({"alg": "SHA1withRSA"});
        sig.init(rsaPrivateKey);
        return sig.signString(string);
    };

    return {
        sign: doSign(rsaPrivateKey, string)
    }

})();
