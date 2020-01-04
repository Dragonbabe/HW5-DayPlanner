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
var input10amElement = document.querySelector('#input10am');
var input11amElement = document.querySelector('#input11am');
var input12pmElement = document.querySelector('#input12pm');
var input1pmElement = document.querySelector('#input1pm');
var input2pmElement = document.querySelector('#input2pm');
var input3pmElement = document.querySelector('#input3pm');
var input4pmElement = document.querySelector('#input4pm');
var input5pmElement = document.querySelector('#input5pm');
var inputArray = document.getElementsByTagName('input');

var currentTime = parseInt(moment().format('HH'));
for (var i = 0; i < inputArray.length; i++) {

    var currentDataTime = parseInt(inputArray[i].getAttribute('data-time'));
    console.log(currentDataTime, currentTime, inputArray[i]);
    if (currentDataTime < currentTime) {
        inputArray[i].style.backgroundColor = 'grey';
    }

    if (currentDataTime === currentTime) {
        inputArray[i].style.backgroundColor = 'green';
    }
    if (currentDataTime > currentTime) {
        inputArray[i].style.backgroundColor = 'red';  
    }

}


(function () {
    //Put in a moment object
    var momentObject = moment();

    // display value of moment object referenced in html in the displayMoment div
    var displayMoment = document.getElementById('displayMoment');
    displayMoment.innerHTML = momentObject.format('YYYY-M-D');
})();


// add event listeners for each button to save values from the input into local storage
button9am.addEventListener('click', function () {
    localStorage.setItem('appt9am', input9amElement.value);
})

button10am.addEventListener('click', function () {
    localStorage.setItem('appt10am', input10amElement.value);
})

button11am.addEventListener('click', function () {
    localStorage.setItem('appt11am', input11amElement.value);
})

button12pm.addEventListener('click', function () {
    localStorage.setItem('appt12pm', input12pmElement.value);
})

button1pm.addEventListener('click', function () {
    localStorage.setItem('appt1pm', input1pmElement.value);
})

button2pm.addEventListener('click', function () {
    localStorage.setItem('appt2pm', input2pmElement.value);
})

button3pm.addEventListener('click', function () {
    localStorage.setItem('appt3pm', input3pmElement.value);
})

button4pm.addEventListener('click', function () {
    localStorage.setItem('appt4pm', input4pmElement.value);
})

button5pm.addEventListener('click', function () {
    localStorage.setItem('appt5pm', input5pmElement.value);
})

window.onload = function () {
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
