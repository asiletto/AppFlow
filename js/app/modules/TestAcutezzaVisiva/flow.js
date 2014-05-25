define(function(){

	return {
	"id": "Test flow",
	"states": [
		{
			"id":"startTest",
			"template":"js/app/modules/TestAcutezzaVisiva/templates/startTest.tpl",
			"transitions": [
				{
					"on":"next",
					"to":"displayLetter"
				}
			]
		},
		{
			"id":"displayLetter",
			"template":"js/app/modules/TestAcutezzaVisiva/templates/displayLetter.tpl",
			"transitions": [
				{
					"on":"next",
					"to":"identifyLetter"
				}
			]
		},
		{
			"id":"identifyLetter",
			"template":"js/app/modules/TestAcutezzaVisiva/templates/identifyLetter.tpl",
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
			"template":"js/app/modules/TestAcutezzaVisiva/templates/results.tpl",
			"transitions": [
				{
					"on":"next",
					"to":"startTest"
				}
			]
		}
	]
};
});