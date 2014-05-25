define(["jquery","af-state",'af-loader',"renderer"],function($, ViewState, loader, renderer){
 
	function GenericController(flowDefinition, container, callback){
		var self = this;
		self._container = container;
		self._model = {};
		
		loader.load(flowDefinition, function(flow){
			self._flow = flow;
		
			console.log("loaded flow: ",flow);
						
			var firstState = self.getCurrentState();

			console.log("first state: " + firstState.getId());
			
			//when the user click on an .action trigger it on the appflow
			//the action is the attribute name of the button
			$(document).on("click", ".action", function(evt){
				console.log("user executed action: " + evt.target.name + " on state "+self.getCurrentState().getId());
				self.persistFields();
				self.getCurrentState().emit(ViewState.FIRE_ACTION, evt.target.name);
			});
			

			self._flow.on(ViewState.BEFORE_LOAD, function(stateId){
				console.log("BEFORE_LOAD:"+stateId);

				//get current view
				var viewState = self._flow.getState(stateId);
				
				//load template
				renderer.render(self._model, viewState.getTemplate(), container, false, function(){
				
					self.populateFields();

					self._flow.emit(ViewState.AFTER_LOAD, stateId);
					
				});
								
			});
					
			self._flow.on(ViewState.AFTER_LOAD, function(stateId){
				console.log("AFTER_LOAD:"+stateId);
			});
			
			self._flow.start();
			
			if(callback)
				callback();
		});

		return this;
		
	}
	
	GenericController.prototype.populateFields = function(){
		var self = this;
		$('.persistent').each(
			function(index){
				var input = $(this);
				console.log("populating field: "+input.attr("id") + ", model: "+self._model[input.attr("id")]);
				if(self._model[input.attr("id")]!=undefined)
					input.val(self._model[input.attr("id")]);
			}
		);
	
	}
	
	GenericController.prototype.persistFields = function(){
		//FIXME does not work with radio buttons, which should have an unique name but different ids.
		var self = this;
		$('.persistent').each(
			function(index){  
				var input = $(this);
//				console.log('[persistent field]'+input.attr('type')+' id: ' + input.attr('id') + ', value: ' + input.val());
				self._model[input.attr('id')] = input.val();
			}
		);
		
		console.log("updated model:",self._model);
	}
	
	GenericController.prototype.getCurrentState = function(){
		return this._flow.getCurrentState();
	}
	
	return GenericController;
});