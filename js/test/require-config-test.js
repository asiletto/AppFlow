require.config({
  paths: {
    
	//external libraries
	jquery: '../lib/jquery-1.11.1/jquery',
	
	//simplest test suite ever
	'helloworld': '../app/modules/helloworld/hello',
	'smalltest': '../app/modules/smalltest/smalltest',
	
	//simple event emitter
	'EventEmitter': '../app/modules/EventEmitter/eventemitter',
	
	//appflow module
	'af-transition': '../app/modules/AppFlow/transition',
	'af-state': '../app/modules/AppFlow/state',
	'af-flow': '../app/modules/AppFlow/flow',
	'af-loader': '../app/modules/AppFlow/loader',
	
	}

});