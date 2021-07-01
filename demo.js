'use strict'; 
(function() {

  let person = {
    fitstName: "Mahmoud",
    lastName: "Barry",
    age: 20,
    isAdult: function(){ return person.age >=18}
  };
  display(person.isAdult());

})();