define(['jquery'], function($){

	return {

		render: function(model, template, destination, append, callback){
			
			$.get(template, function(templateData) {

				if(append)
					$(destination).append(templateData);
				else
					$(destination).html(templateData);

				if(callback)
					callback();
					
			});
			
		}
		
	};
	

});