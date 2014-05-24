define(["af-transition","EventEmitter"], function(Transition, EventEmitter){
 
        function ViewState( id, template, transitions ){
            EventEmitter.call(this);
			this._id = id;
            this._template = template;
            this._transitions = transitions || [];
			this._flow = null;
			
			this.on(ViewState.FIRE_ACTION, function(eventName){
				
				for (var x in this._transitions) {
					if(this._transitions[x].getEvent() === eventName){
						console.log("firing event " + this._transitions[x].getEvent() + " on state "+this._id+" that lead to state " + this._transitions[x].getDestination());
					
						if(this._flow != null){
							//propagate the event to the flow
							this._flow.emit(ViewState.FOLLOW_TRANSITION, this._transitions[x].getDestination());
						}
					}
					
					
				}
			
			});
			
			return this;
        }
 
		ViewState.FIRE_ACTION = "fireAction";
		ViewState.FOLLOW_TRANSITION = "moveTo";
		ViewState.BEFORE_LOAD = "beforeLoad";
		ViewState.AFTER_LOAD = "afterLoad";
 
        ViewState.prototype = Object.create( EventEmitter.prototype );

		ViewState.prototype.getId = function(){
			return this._id;
		};
	
		ViewState.prototype.getTemplate = function(){
            return this._template;
        };

		ViewState.prototype.setFlow = function(flow){
            this._flow = flow;
        };
		
		ViewState.prototype.getTransitions = function(){
			return this._transitions;
		};
 		
        return ViewState;
 
    }
);