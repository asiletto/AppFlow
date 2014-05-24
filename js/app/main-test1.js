require(['require-config'], function() {

	require(['jquery','af-loader','af-state'], 
	
	function($, loader, ViewState){
						
			loader.load('./js/test/test-flow-metadata.js', function(flow){
			
				console.log("loaded flow: ",flow);
				
				var timeout = 0;
				
				setTimeout(function(){
					console.log("emitting startTest->next");
					flow.getState("startTest").emit(ViewState.FIRE_ACTION, "next");
				},timeout+=500);
				
				setTimeout(function(){
					console.log("-> emitting displayLetter->next");
					flow.getState("displayLetter").emit(ViewState.FIRE_ACTION, "next");
				},timeout+=500);

				setTimeout(function(){
					console.log("-> emitting identifyLetter->continue");
					flow.getState("identifyLetter").emit(ViewState.FIRE_ACTION, "continue");
				},timeout+=500);

				setTimeout(function(){
					console.log("-> emitting displayLetter->next");
					flow.getState("displayLetter").emit(ViewState.FIRE_ACTION, "next");
				},timeout+=500);

				setTimeout(function(){
					console.log("-> emitting identifyLetter->continue");
					flow.getState("identifyLetter").emit(ViewState.FIRE_ACTION, "continue");
				},timeout+=500);

				setTimeout(function(){
					console.log("-> emitting displayLetter->next");
					flow.getState("displayLetter").emit(ViewState.FIRE_ACTION, "next");
				},timeout+=500);

				setTimeout(function(){
					console.log("-> emitting identifyLetter->finish");
					flow.getState("identifyLetter").emit(ViewState.FIRE_ACTION, "finish");
				},timeout+=500);

			
			
			});
						
	});

});