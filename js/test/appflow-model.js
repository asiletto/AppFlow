require(['require-config-test'], function() {

	require(['smalltest', 'assert', 'af-state', 
			 'af-transition', 'af-view-state'], 
	
	function(test, assert, State, Transition, ViewState){
		

		test("appflow","test state model", function() {
			var s = new State("index");
			
			assert.equal(s.getId(), 'index');
		});

		test("appflow","test transition model", function() {
			var t = new Transition("next","page2");
			
			assert.equal(t.getEvent(), 'next');
			assert.equal(t.getDestination(), 'page2');
		});

		test("appflow","test view-state", function() {
		
			var v = new ViewState("index", "template.tpl");
			
			assert.equal(v.getId(), 'index');
			assert.equal(v.getTemplate(), 'template.tpl');
		});


		test("appflow","test view-state transitions", function() {
			var trs = [
				new Transition("back", "index"),
				new Transition("next", "page2")
			];
		
			var v = new ViewState("index", "template.tpl", trs);
						
			assert.equal(v.getTransitions()[0].getEvent(), 'back');
			assert.equal(v.getTransitions().length, 2);
		});


		
	});

});