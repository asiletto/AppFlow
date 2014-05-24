require(['require-config-test'], function() {

	require(['af-transition', 'af-state', 'af-flow'], 
	
	function(Transition, ViewState, AppFlow){
				
			var startTest = new ViewState("startTest",null, [
				new Transition("next", "displayLetter")
			]);
			
			var displayLetter = new ViewState("displayLetter",null,[
				new Transition("next","identifyLetter")
			]);
	
			var identifyLetter = new ViewState("identifyLetter",null,[
				new Transition("continue", "displayLetter"),
				new Transition("finish", "results")
			]);
	
			var results = new ViewState("results",null,null);
					
			var flowTest = new AppFlow("Test flow", startTest);
			flowTest.addState(displayLetter);
			flowTest.addState(identifyLetter);
			flowTest.addState(results);
		
			var timeout = 0;
			
			setTimeout(function(){
				console.log("emitting startTest->next");
				startTest.emit("fireAction","next");
			},timeout+=500);
			
			setTimeout(function(){
				console.log("emitting displayLetter->next");
				displayLetter.emit("fireAction","next");
			},timeout+=500);

			setTimeout(function(){
				console.log("emitting identifyLetter->continue");
				identifyLetter.emit("fireAction","continue");
			},timeout+=500);

			setTimeout(function(){
				console.log("emitting displayLetter->next");
				displayLetter.emit("fireAction","next");
			},timeout+=500);

			setTimeout(function(){
				console.log("emitting identifyLetter->continue");
				identifyLetter.emit("fireAction","continue");
			},timeout+=500);

			setTimeout(function(){
				console.log("emitting displayLetter->next");
				displayLetter.emit("fireAction","next");
			},timeout+=500);

			setTimeout(function(){
				console.log("emitting identifyLetter->finish");
				identifyLetter.emit("fireAction","finish");
			},timeout+=500);
			
	});

});