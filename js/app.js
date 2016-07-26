$(document).ready(function() {

    // STEP 1 : Populate the pantry 

    var Pantry = function(name){
        this.name = name;
        this.section = {};
      };

    var PantrySection = function(category, items){
            this.category = category;
            this.items = items;
        }

    Pantry.prototype = {
        constructor : Pantry,

        //Adds ingredients to the pantry
        addSection : function(currIng){
          this.section[currIng.category] = currIng.items;
        },


        //Grabs all possible ingredients and chooses three random ones.
        ingredientSelector : function(userPref){
            var finishedDrink = [];
            var drinkOutput;
            for (var i in userPref) {
                if (userPref[i] == 1) {
                    var ranNum = parseInt(Math.floor(Math.random() * 3));
                    finishedDrink.push(barPantry.section[i][ranNum]);
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
                if( /[aeiouAEIOU]/.test(finishedDrink[0][0])){
                    drinkOutput = 'An ' + finishedDrink.join(', a ') + ' and a ' + lastItem;
                    return drinkOutput;
                } else {
                    drinkOutput = 'A ' + finishedDrink.join(', a ') + ' and a ' + lastItem;
                    // console.log(finishedDrink);
                    return drinkOutput;
                }
                
        }
    }
  };

      var barPantry = new Pantry('barPantry');

      var newIng = new PantrySection('strong', ['glug of rum', 'slug of whisky', 'splash of gin']);
      barPantry.addSection(newIng);
      var newIng = new PantrySection('salty', ['olive on a stick', 'salt-dusted rim', 'rasher of bacon']);
      barPantry.addSection(newIng);
      var newIng = new PantrySection('bitter', ['shake of bitters', 'splash of tonic', 'twist of lemon peel']);
      barPantry.addSection(newIng);
      var newIng = new PantrySection('sweet', ['sugar cube', 'spoonful of honey', 'splash of cola']);
      barPantry.addSection(newIng);
      var newIng = new PantrySection('fruity', ['slice of orange', 'dash of cassis', 'cherry on top']);
      barPantry.addSection(newIng);

    var attributes = {
        STRONG: 'strong',
        SALTY: 'salty',
        BITTER: 'bitter',
        SWEET: 'sweet',
        FRUITY: 'fruity'
    };
    //step 2 : make constructor to fetch yes/no values

    function prefCreator(strong, salty, bitter, sweet, fruity) {
        this.strong = strong;
        this.salty = salty;
        this.bitter = bitter;
        this.sweet = sweet;
        this.fruity = fruity;
    }

    // Refactoring Questions  

    function Question(attribute, text) {
        this.attribute = attribute;
        this.text = text;
    }

    Question.prototype.asHTML = function() {
    return '<fieldset id="drink-'+ this.attribute +'"><h3>' + this.text 
      + '</h3><input value="1" type="radio" name="'+ this.attribute + 
      '"><label>Yes!</label><input value="0" name="'
      + this.attribute +'" type="radio"><label>Nope!</label></fieldset>';
};
    //STEP 2.b append quetions to the DOM (to Form) available on Document load

    var strongQuestion = new Question(attributes.STRONG, 'Do ye like yer drinks strong?');
    var saltyQuestion = new Question(attributes.SALTY, 'Do ye like it with a salty tang?');
    var bitterQuestion = new Question(attributes.BITTER, 'Are ye a lubber who likes it bitter?');
    var sweetQuestion = new Question(attributes.SWEET, 'Would ye like a bit of sweetness with yer poison?');
    var fruityQuestion = new Question(attributes.FRUITY, 'Are ye one for a fruity finish?');


    $('form').prepend(fruityQuestion.asHTML());
    $('form').prepend(sweetQuestion.asHTML());
    $('form').prepend(bitterQuestion.asHTML());
    $('form').prepend(saltyQuestion.asHTML());
    $('form').prepend(strongQuestion.asHTML());

    //Step 3: fetch or collect the inputs of the user / instantiate prefCreator

    $('form').on('submit', function(e) {
        e.preventDefault();
        var userPref = new prefCreator(
            parseInt($('#drink-strong input:checked').val()),
            parseInt($('#drink-salty input:checked').val()),
            parseInt($('#drink-bitter input:checked').val()),
            parseInt($('#drink-sweet input:checked').val()),
            parseInt($('#drink-fruity input:checked').val())
            );
        var ingredients = barPantry.ingredientSelector(userPref);
        $('#finished-drink').text(ingredients);
    });

    //Step 4: Make drink based on selected preferences, return a drink string to DOM

    function ingredientSelector(userPref){};

});
