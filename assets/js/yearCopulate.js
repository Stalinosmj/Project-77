let dateDropdown = document.getElementById('year'); 
       
  let currentYear = new Date().getFullYear();    
  while (currentYear >= 1970) {      
    let dateOption = document.createElement('option');          
    dateOption.text = currentYear;      
    dateOption.value = currentYear;        
    dateDropdown.add(dateOption);      
    currentYear -= 1;    
  }