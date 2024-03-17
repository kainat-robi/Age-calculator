document.getElementById('calculate').addEventListener('click', function() {
  let inputDate = document.getElementById('date').value;

  if (inputDate) {
    let input = new Date(inputDate);
    let currentDate = new Date();
    let age = currentDate.getFullYear() - input.getFullYear();
    if (input > currentDate) {
      document.getElementById('result').innerHTML = 'Invalid date.';
      return;
    }
    let ageCategory = '';
    if (age < 18) {
      ageCategory = 'junior';
    } else if (age < 60) {
      ageCategory = 'adult';
    } else {
      ageCategory = 'senior';
    }

    document.getElementById('result').innerHTML = 'Your age is ' + age + ' years.<br> Age stage '+ ageCategory ;
    
  } 
});