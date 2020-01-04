// get the button objects to set event listeners on them
var button9am = document.querySelector('#button9am');
var button10am = document.querySelector('#button10am');
var button11am = document.querySelector('#button11am');
var button12pm = document.querySelector('#button12pm');
var button1pm = document.querySelector('#button1pm');
var button2pm = document.querySelector('#button2pm');
var button3pm = document.querySelector('#button3pm');
var button4pm = document.querySelector('#button4pm');
var button5pm = document.querySelector('#button5pm');
var input9amElement = document.querySelector('#input9am');
var currentTime = moment().format('HH'); 
if (9 < currentTime){
    input9amElement.style.backgroundColor = 'grey';
}
(function()
{
//Put in a moment object
var momentObject = moment();

// display value of moment object referenced in html in the displayMoment div
var displayMoment = document.getElementById('displayMoment');
displayMoment.innerHTML = momentObject.format('YYYY-M-D');
})();


// add event listeners for each button to save values from the input into local storage
button9am.addEventListener('click', function() {
    
    localStorage.setItem('appt9am', input9amElement.value);
})

button10am.addEventListener('click', function() {
    var input10amValue = document.querySelector('#input10am').value;
    localStorage.setItem('appt10am', input10amValue);
})

button11am.addEventListener('click', function() {
    var input11amValue = document.querySelector('#input11am').value;
    localStorage.setItem('appt11am', input11amValue);
})

button12pm.addEventListener('click', function() {
    var input12pmValue = document.querySelector('#input12pm').value;
    localStorage.setItem('appt12pm', input12pmValue);
})

button1pm.addEventListener('click', function() {
    var input1pmValue = document.querySelector('#input1pm').value;
    localStorage.setItem('appt1pm', input1pmValue);
})

button2pm.addEventListener('click', function() {
    var input2pmValue = document.querySelector('#input2pm').value;
    localStorage.setItem('appt2pm', input2pmValue);
})

button3pm.addEventListener('click', function() {
    var input3pmValue = document.querySelector('#input3pm').value;
    localStorage.setItem('appt3pm', input3pmValue);
})

button4pm.addEventListener('click', function() {
    var input4pmValue = document.querySelector('#input4pm').value;
    localStorage.setItem('appt4pm', input4pmValue);
})

button5pm.addEventListener('click', function() {
    var input5pmValue = document.querySelector('#input5pm').value;
    localStorage.setItem('appt5pm', input5pmValue);
})

window.onload = function(){
    // get the values in local storage back in the input boxes where the users type stuff when the page is refreshed
    document.querySelector('#input9am').value = localStorage.getItem('appt9am');
    document.querySelector('#input10am').value = localStorage.getItem('appt10am');
    document.querySelector('#input11am').value = localStorage.getItem('appt11am');
    document.querySelector('#input12pm').value = localStorage.getItem('appt12pm');
    document.querySelector('#input1pm').value = localStorage.getItem('appt1pm');
    document.querySelector('#input2pm').value = localStorage.getItem('appt2pm');
    document.querySelector('#input3pm').value = localStorage.getItem('appt3pm');
    document.querySelector('#input4pm').value = localStorage.getItem('appt4pm');
    document.querySelector('#input5pm').value = localStorage.getItem('appt5pm');
}
