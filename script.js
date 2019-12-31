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


// add event listeners for each button to save values from the input into local storage
button9am.addEventListener('click', function() {
    var input9amValue = document.querySelector('#input9am').value;
    localStorage.setItem('appt9am', input9amValue);
})

button10am.addEventListener('click', function() {
    var input10amValue = document.querySelector('#input10am').value;
    localStorage.setItem('appt10am', input10amValue);
})


window.onload = function(){
    // Set the values in local storage back to the inputs
    document.querySelector('#input9am').value = localStorage.getItem('appt9am');
    document.querySelector('#input10am').value = localStorage.getItem('appt10am');
}