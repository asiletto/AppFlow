define(['jquery','mustache'], function($, Mustache){

	return {

		render: function(model, template, destination, append, callback){
			
			$.get(template, function(templateData) {
				
				var rendered = Mustache.render(templateData, model);

				if(append)
					$(destination).append(rendered);
				else
					$(destination).html(rendered);

				if(callback)
					callback();
					
			});
			
		}
		
	};
	

});