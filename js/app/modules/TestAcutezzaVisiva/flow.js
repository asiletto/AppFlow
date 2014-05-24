define(function(){

	return {
	"id": "Test flow",
	"states": [
		{
			"id":"startTest",
			"template":"templates/TestAcutezzaVisiva/startTest.tpl",
			"transitions": [
				{
					"on":"next",
					"to":"displayLetter"
				}
			]
		},
		{
			"id":"displayLetter",
			"template":"templates/TestAcutezzaVisiva/displayLetter.tpl",
			"transitions": [
				{
					"on":"next",
					"to":"identifyLetter"
				}
			]
		},
		{
			"id":"identifyLetter",
			"template":"templates/TestAcutezzaVisiva/identifyLetter.tpl",
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
			"template":"templates/TestAcutezzaVisiva/results.tpl",
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