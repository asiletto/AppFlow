define(["af-state","af-transition","EventEmitter"], function(ViewState, Transition, EventEmitter){
 
	function Flow(id, startState){
		EventEmitter.call(this);
		this._id = id;
		this._states = [];
		if(startState){
			this.addState(startState);
			this._currentState = startState.getId();
		}
		
		this.on(ViewState.FOLLOW_TRANSITION, function(destination){
			console.log("moving to state: "+ destination);

			this.emit(ViewState.BEFORE_LOAD, destination);
			this._currentState = destination;
			this.emit(ViewState.AFTER_LOAD, destination);

		});
		
		return this;
	}
 
	Flow.prototype = Object.create( EventEmitter.prototype );
 
	Flow.prototype.start = function(){
		this.emit(ViewState.FOLLOW_TRANSITION, this._currentState);
	}
 
	Flow.prototype.setFirstState = function(startState){
		this._currentState = startState.getId();
	};
 
	Flow.prototype.addState = function(state){
		state.setFlow(this);
		this._states.push(state);
	};
	
	Flow.prototype.getStates = function(){
		return this._states;
	};
	
	Flow.prototype.getState = function(stateId){
		for(var idx in this._states){
			if(this._states[idx].getId() === stateId)
				return this._states[idx];
		}
		return null;
	}
	
	Flow.prototype.getCurrentState = function(){
		return this.getState(this._currentState);
	}
	
	return Flow;
});