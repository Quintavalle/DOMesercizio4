document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
      
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const age = document.getElementById("age").value;
  
      const person = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
  
      const personJSON = JSON.stringify(person);
  
      form.setAttribute("data-person", personJSON);
  
      console.log("Oggetto person:", person);
      console.log("Oggetto person in formato JSON:", personJSON);
    });
  });
  
  