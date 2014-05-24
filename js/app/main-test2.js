require(['require-config'], function() {

	require(['jquery','af-loader','af-state','GenericController'], 
	
	function($, loader, ViewState, GenericController){
						
			loader.load('./js/app/modules/TestAcutezzaVisiva/flow.js', function(flow){
			
				console.log("loaded flow: ",flow);
						
				var controller = new GenericController(flow, "#container");
				
				var firstState = controller.getCurrentState();

				console.log("first state: " + firstState.getId());
			
			
			
			});
						
	});

});