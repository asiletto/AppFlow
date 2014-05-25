require(['require-config'], function() {

	require(['jquery','af-controller'], 
	
	function($, GenericController){
						
			var controller = new GenericController(
				'./js/app/modules/TestAcutezzaVisiva/flow.js',
				"#container",
				function(){
				
					console.log("controller loaded");
				
				});

			
	});

});