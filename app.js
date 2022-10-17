const billInput = document.querySelector('.amount')
const tipPerPersonEl = document.querySelector(".tip-per-person");
const btns = document.querySelectorAll('.btn');
const numPeopleEl = document.querySelector(".number-people");
const totalPerPersonEl = document.querySelector('.total')
const error = document.querySelector('.error');
const custom = document.querySelector('.custom')

let percentage = Number();

function calc(bill, pers, num){
  //Total Tip per on bill
  let tip = bill * pers;
  //tip Per person tip divided by numPeople
  let tipPerPerson = tip / num
  tipPerPersonEl.textContent = `$${tipPerPerson.toFixed(2)}`;

  //Total per Person add (tip and bill) divided by numpeople;
  let totalPerPerson = (tip + bill) / num
  totalPerPersonEl.textContent = `$${totalPerPerson.toFixed(2)}`
  // return totalPerPerson
}

function render(){

}

btns.forEach(function(btn){
  // btn.classList.remove('clicked')
  btn.addEventListener('click', function(){
    error.classList.remove("error-text");
    numPeopleEl.style.border = "";
    let billValue = Number(billInput.value);
    let numpeopleValue = Number( numPeopleEl.value );
    if(!numpeopleValue && numpeopleValue < 1) {
     error.classList.add('error-text')
     numPeopleEl.style.border = "2px solid red";
    }else{
     btns.forEach(btn=> btn.classList.remove("clicked"))
     if(btn.classList.contains('btn-5')){
       percentage = 0.05
       btn.classList.add('clicked')
     } else if(btn.classList.contains("btn-10")){
       percentage = 0.10
       btn.classList.add("clicked");
     } else if(btn.classList.contains('btn-15')){
       percentage = 0.15
       btn.classList.add("clicked");
     } else if(btn.classList.contains('btn-25')){
       percentage = 0.25
       btn.classList.add("clicked");
     } else if(btn.classList.contains('btn-50')){
       percentage = 0.5
       btn.classList.add("clicked");
     }
     calc(
             billValue,
             percentage,
             numpeopleValue
         );
    }
  })
  
});

document.querySelector('.reset-btn').addEventListener('click', function(){
  tipPerPersonEl.textContent = '$0.00';
  totalPerPersonEl.textContent = '$0.00';
  billInput.value = ''
  numPeopleEl.value = ''
})

custom.addEventListener('keyup', function(){
  btns.forEach((btn) =>
      btn.classList.remove("clicked")
  );
  let numpeopleValue = Number(numPeopleEl.value);
  let customValue = Number(custom.value);
  percentage = customValue / 100 
  calc(Number(billInput.value), percentage, numpeopleValue)
})


 
















