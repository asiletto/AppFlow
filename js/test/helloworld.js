require(['require-config-test'], function() {

	require(['smalltest', 'assert', 'helloworld'], function(test, assert, helloworld){
		
		// This will pass
		test("helloworld","test hello 1", function() {
			assert.equal(helloworld.hello, 'World');
		});

		// This will fail
//		test("helloworld","test hello 2", function() {
//			assert.equal(helloworld.hello, 'Foo');
//		});		
		
	});

});