define(function(){

	return {
	"id": "Test flow",
	"states": [
		{
			"id":"startTest",
			"template":null,
			"transitions": [
				{
					"on":"next",
					"to":"displayLetter"
				}
			]
		},
		{
			"id":"displayLetter",
			"template":null,
			"transitions": [
				{
					"on":"next",
					"to":"identifyLetter"
				}
			]
		},
		{
			"id":"identifyLetter",
			"template":null,
			"transitions": [
				{
					"on":"continue",
					"to":"displayLetter"
				},
				{
					"on":"finish",
					"to":"results"
				}
				
			]
		},
		{
			"id":"results",
			"template":null,
			"transitions": []
		}
	]
};
});