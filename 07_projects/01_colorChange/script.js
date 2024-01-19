const buttons = document.querySelectorAll('.button');
// console.log(buttons);  //we will get an nodeList
const body = document.querySelector('body');
const h2 = document.querySelectorAll('h2');
console.log(h2);
buttons.forEach(function (button){
    // console.log(button);
    button.addEventListener('click', function(e){   //'e' is just name of event and can be of any name
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
            h2.style.color = "white"
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
          }
          if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
          }
          if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;

          }
    })
})