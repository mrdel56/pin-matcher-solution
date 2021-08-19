function getPin (){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else {
        // console.log('get 3 digit pin', pin);
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('display-input').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function (event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');      
    if (isNaN(number)) {
        if(number == 'C') {
            calcInput.value = '';        }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});
function verifyPin(){
    const pin = document.getElementById('display-input').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMassage = document.getElementById('notify-success');
    const faillMassage = document.getElementById('notify-fail');
    if (pin == typedNumbers){
       successMassage.style.display = 'block';
       faillMassage.style.display = 'none';
    }
    else {        
        faillMassage.style.display = 'block';
        successMassage.style.display = 'none';
    }
}