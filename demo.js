'use strict'; 
(function() {

      let person = {
          firstName:"Mahmoud",
          lastName: "Barry",
          age:20,
          isAdult: function(){return person.age >= 18 }
      }

  //*******inspecting object porperties with Object;key() and for ... in*********
  /*display(Object.keys(person)); 
  for (let propertyName in person){
      display(propertyName);
  }*/

})();