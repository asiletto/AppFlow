define(function(){
 
	var test = function(module, testName, callback) {
        var msg;
        try {
            callback();

			console.log('+++ PASSED: '+ module+'/'+testName);
		} catch (e) {
			console.log('--- FAILED: '+ module+'/'+testName +  ', expected "' + e.expected + '" but got "' + e.actual + '" instead.',e);
        }

	};
	
	return test;
});