define(["af-transition","af-state","af-flow"],function(Transition,ViewState,AppFlow){
 
	var load = function(filename, callback){
		
		require([filename], function(flowMetadata){
			console.log("flow id:" + flowMetadata.id);			
			var flowTest = new AppFlow(flowMetadata.id);
			
			var first = true;
			
			for(var idxState in flowMetadata.states){
				var stateMeta = flowMetadata.states[idxState];
				console.log("  state id: "+stateMeta.id);
			
				var transitions = [];
				
				for(var idxTr in stateMeta.transitions){
					var trMeta = stateMeta.transitions[idxTr];
					console.log("    transition on: "+trMeta.on +" to: "+trMeta.to);
					
					transitions.push(new Transition(trMeta.on, trMeta.to));
				}
				
				var state = new ViewState(stateMeta.id, stateMeta.template, transitions);
				
				if(first){
					first = false;
					flowTest.setFirstState(state);
				}
				
				flowTest.addState(state);
			}
			
			callback(flowTest);
		});
		
	};
 
	return {
		load : load
	};
	
 });