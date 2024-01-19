const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault();
/*
    The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

    For example, this can be useful when:
    Clicking on a "Submit" button, prevent it from submitting a form
    Clicking on a link, prevent the link from following the URL
*/

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
/*
    document.querySelector('#weight').value => will return a string, so praseInt will convert it into number

*/

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height";
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight" ;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

