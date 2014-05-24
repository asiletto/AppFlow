define(function(){
 
	function Transition(on, to){
		this._on = on;
		this._to = to;
		return this;
	}
 
	Transition.prototype.getEvent = function(){
		return this._on;
	};
	
	Transition.prototype.getDestination = function(){
		return this._to;
	};
	
	return Transition;
});