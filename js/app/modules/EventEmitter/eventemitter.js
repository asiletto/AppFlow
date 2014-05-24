define(function(){
 
        function EventEmitter(){		
			return this;
        }
 
		EventEmitter.prototype.on = function(event, fct){
			this._events = this._events || {};
			this._events[event] = this._events[event] || [];
			this._events[event].push(fct);
		};

		EventEmitter.prototype.emit = function(event /* , args... */){
			this._events = this._events || {};
			if( event in this._events === false  )    return;
			for(var i = 0; i < this._events[event].length; i++){
				this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
			}
		};
		
        return EventEmitter;
 
    }
);