$(document).ready(function() {

    // STEP 1 : Populate the pantry 

    var pantry = {
        strong: ['glug of rum', 'slug of whisky', 'splash of gin'],
        salty: ['olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
        bitter: ['shake of bitters', 'splash of tonic', 'twist of lemon peel'],
        sweet: ['sugar cube', 'spoonful of honey', 'splash of cola'],
        fruity: ['slice of orange', 'dash of cassis', 'cherry on top'],
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

    $('form').submit(function(e) {
        e.preventDefault();
        var userPref = new prefCreator(
            parseInt($('#drink-strong input:checked').val()),
            parseInt($('#drink-salty input:checked').val()),
            parseInt($('#drink-bitter input:checked').val()),
            parseInt($('#drink-sweet input:checked').val()),
            parseInt($('#drink-fruity input:checked').val()));
        var ingredients = ingredientSelector(userPref);
        $('#finished-drink').text(ingredients);
    });

    //Step 4: Make drink based on selected preferences, return a drink string to DOM

    function ingredientSelector(userPref) {
      var finishedDrink = [];
        var drinkOutput;
        for (var i in userPref) {
            if (userPref[i] == 1) {
                var ranNum = parseInt(Math.floor(Math.random() * 3));
                finishedDrink.push(pantry[i][ranNum]);
                }
        }
        // Appropriate responses for number of preferences chosen
        if (finishedDrink.length < 1) {
            return 'Ye don\'t like nothin\'!? Git some water!'
        } 
        else if (finishedDrink.length == 1) {
            drinkOutput = finishedDrink.toString();
            return drinkOutput;
        }
        else {
            var lastItem = finishedDrink.pop();
            drinkOutput = finishedDrink.join(', ') + ' and ' + lastItem;
            return drinkOutput;
        }
    }
});