//DOM elements
 const hourEl = document.querySelector('.hour');
 const minuteEl = document.querySelector('.minute');
 const valueEl = document.querySelector('.value');


 const acEl = document.querySelector('.ac');
 const pmEl = document.querySelector('.pm');
 const percentEl = document.querySelector('.percent');

 const additionEl = document.querySelector('.addition');
 const subtractionEl = document.querySelector('.subtraction');
 const multiplicationEl = document.querySelector('.multiplication');
 const divisionEl = document.querySelector('.division');
 const equalEl = document.querySelector('.equal');

 const decimalEl = document.querySelector('.decimal');
 const number0El = document.querySelector('.number-0');
 const number1El = document.querySelector('.number-1');
 const number2El = document.querySelector('.number-2');
 const number3El = document.querySelector('.number-3');
 const number4El = document.querySelector('.number-4');
 const number5El = document.querySelector('.number-5');
 const number6El = document.querySelector('.number-6');
 const number7El = document.querySelector('.number-7');
 const number8El = document.querySelector('.number-8');
 const number9El = document.querySelector('.number-9');
 const numberElArray = [
     number0El,number1El,number2El,number3El,number4El,number5El,
     number6El,number7El,number8El,number9El
 ];

 //variables
 let valueStrInMemory = null;
 let operatorInMemory = null;


 //functions
     const getValueAsStr = () => valueEl.textContent.split(',').join('');
     
 

 const getValueAsNum = () =>{
     return parseFloat(getValueAsStr());
 }

 const setStrAsValue = (valueStr) => { 
     if(valueStr[valueStr.length-1] === '.'){
         valueEl.textContent += '.';
         return;
     }

     const [wholeNumStr,decimalStr] = valueStr.split('.');
     if(decimalStr){
         valueEl.textContent = parseFloat(wholeNumStr).toLocaleString()+ '.' + decimalStr;
     } else {
     valueEl.textContent = parseFloat(wholeNumStr).toLocaleString();

     }


 }




const handleNumberClick  = (numStr) => {
    // console.log(numStr);
    const currentValueStr = getValueAsStr();
    // console.log(currentValueStr);
    if(currentValueStr === '0'){
        setStrAsValue(numStr);
    }else{
        setStrAsValue(currentValueStr + numStr);
       
    }


};

const handleOperatorClick = (operation) =>{
    const currentValueStr = getValueAsStr();
    const currentValueNum = getValueAsNum();

    if(!valueStrInMemory){
        valueStrInMemory = currentValueStr;
        operatorInMemory = operation;
        setStrAsValue('0');
        return;


    }
    const valueNumInMemory = parseFloat(valueStrInMemory);
    let newValueNum;
    if(operatorInMemory === 'addition'){
        newValueNum = valueNumInMemory + currentValueNum;
    }else if (operatorInMemory === 'subtraction'){
        newValueNum = valueNumInMemory - currentValueNum;

    }else if (operatorInMemory === 'multiplication'){
        newValueNum = valueNumInMemory * currentValueNum;


    }else if (operatorInMemory === 'division'){
        newValueNum = valueNumInMemory / currentValueNum;


    }

    valueStrInMemory = newValueNum.toString();
    operatorInMemory = operation;
    setStrAsValue('0');







};



//addEventListener to functions

acEl.addEventListener('click',() => {
    setStrAsValue('0');
    valueStrInMemory = null;
    operatorInMemory = null;


});
pmEl.addEventListener('click', () => {
    const currentValueNum = getValueAsNum();
    const currentValueStr = getValueAsStr();
    if(currentValueStr === '-0'){
        setStrAsValue('0');
        return;
    }



    if (currentValueNum >= 0 ){
        setStrAsValue('-' + currentValueStr);
    }else{
        setStrAsValue(currentValueStr.substring(1));
    }
});

percentEl.addEventListener('click',() => {
    const currentValueNum = getValueAsNum();
    const newValueNum = currentValueNum / 100;
    setStrAsValue(newValueNum.toString());
    valueStrInMemory = null;
    operatorInMemory = null;

});

//add addEventListener to operator

additionEl.addEventListener('click',() =>{
    handleOperatorClick('addition');

});

subtractionEl.addEventListener('click',() =>{
    handleOperatorClick('subtraction');

});
multiplicationEl.addEventListener('click',() =>{
    handleOperatorClick('multiplication');

});
divisionEl.addEventListener('click',() =>{
    handleOperatorClick('division');

});
equalEl.addEventListener('click',() =>{
    if(!valueStrInMemory) {
        

    }


});










 //add event listener to numbers and decimal
 for(let i = 0; i < numberElArray.length;i++){
     const numberEl = numberElArray[i];
     numberEl.addEventListener('click',()=>{
         handleNumberClick(i.toString())

     });

 }

 decimalEl.addEventListener('click',() =>{
     const currentValueStr = getValueAsStr();
     if(!currentValueStr.includes('.')){
         setStrAsValue(currentValueStr + '.')
     }


 });








 

 







//  hourEl.textContent = '10'  //we can change the hours from here.. that means our js connected to html
















//set up the time  :)
const updateTime = () =>{
    const currentTime = new Date();


    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    // if(currentHour>12){
    //     currentHour -=12; //sub from 24
    // }

    hourEl.textContent = currentHour.toString();
    minuteEl.textContent = currentMinute.toString().padStart(2, '0'); //when it needs to be '02' it will aadd 0

}

setInterval(updateTime,1000);
updateTime();

    







