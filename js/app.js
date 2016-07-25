$(document).ready(function() {

    // STEP 1 : Populate the pantry 

    var pantry = {
        strong: ['Glug of rum', 'slug of whisky', 'splash of gin'],
        salty: ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
        bitter: ['Shake of bitters', 'splash of tonic', 'twist of lemon peel'],
        sweet: ['Sugar cube', 'spoonful of honey', 'splash of cola'],
        fruity: ['Slice of orange', 'dash of cassis', 'cherry on top'],
    };

    //step 2 : make constructor to fetch yes/no values

    function prefCreator(strong, salty, bitter, sweet, fruity) {
        this.strong = strong;
        this.salty = salty;
        this.bitter = bitter;
        this.sweet = sweet;
        this.fruity = fruity;
    }

    //Step 3: fetch or collect the inputs of the user / instantiate prefCreator

    // var userPref = [];	

    $('form').submit(function(e) {
        e.preventDefault();
        var userPref = new prefCreator(
            parseInt($('#drink-strong input:checked').val()),
            parseInt($('#drink-salty input:checked').val()),
            parseInt($('#drink-bitter input:checked').val()),
            parseInt($('#drink-sweet input:checked').val()),
            parseInt($('#drink-fruity input:checked').val()));
        var ingredients = ingredientSelector(userPref);
        console.log(userPref['strong'])

    });

    //how to evaluate if it is yes or no ? 
    //1 is for yes 
    //0 if for no
    // userPref = [0, 1, 0, 0, 1]

    // userPref[0].bitter



    function ingredientSelector(userPref) {
    	var selectedIngredients = [];
    	// / for in?
        for (var i in userPref) {
        	// i is the property --> for-in loop
            if (userPref[i] === 1) {
                // random get a [0] ingredient
            }
        }
    }





});