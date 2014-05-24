require.config({
  paths: {
    
	//external libraries
	'jquery': '../lib/jquery-1.11.1/jquery',
	'mustache': '../lib/mustache-0.8.1/mustache',
	
	//simple event emitter
	'EventEmitter': '../app/modules/EventEmitter/eventemitter',
	
	//template loader
//	'renderer': '../app/modules/RendererMustache/renderer',
	'renderer': '../app/modules/RendererJquery/renderer',
	
	//flow module
	'af-transition': '../app/modules/AppFlow/transition',
	'af-state': '../app/modules/AppFlow/state',
	'af-flow': '../app/modules/AppFlow/flow',
	'af-loader': '../app/modules/AppFlow/loader',
	
	//app modules
	'GenericController': '../app/modules/GenericController/controller',
	
	}

});