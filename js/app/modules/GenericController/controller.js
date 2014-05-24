define(["af-state","renderer"],function(ViewState,renderer){
 
	function GenericController(flow, container){
		this._flow = flow;
		this._container = container;
		var self = this;

		//when the user click on an .action trigger it on the appflow
		//the action is the attribute name of the button
		var self = this;
		$(document).on("click", ".action", function(evt){
			console.log("user executed action: " + evt.target.name + " on state "+self.getCurrentState().getId());
			self.getCurrentState().emit(ViewState.FIRE_ACTION, evt.target.name);
		});
		
		this._flow.on(ViewState.BEFORE_LOAD, function(stateId){
			console.log("BEFORE_LOAD:"+stateId);

			//get current view
			var viewState = self._flow.getState(stateId);
			
			//load template
			renderer.render(viewState.getTemplate(), container, false, function(){});
			
		});
				
		this._flow.on(ViewState.AFTER_LOAD, function(stateId){
			console.log("AFTER_LOAD:"+stateId);
		});

		this._flow.start();
		
		return this;
	}
	
	GenericController.prototype.getCurrentState = function(){
		return this._flow.getCurrentState();
	}
	
	return GenericController;
});