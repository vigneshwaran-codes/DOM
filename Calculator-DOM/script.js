/****DOM - Calculator ****/

    /**div container**/

var div = document.createElement('div');
div.className = 'container';
console.log(div);

    /** div calculator**/
var div = document.createElement('div');
div.className = 'Calculator';
console.log(div);

    /** input --> toggle **/

var div = document.createElement('div');


// input -> toggle
var input = document.createElement('input');
input.className= 'checkbox';
input.setAttribute('id','checkbox');
input.setAttribute('type', 'checkbox');
div.appendChild(input);


// <---- label ---->
var label = document.createElement('LABEL');
div.appendChild(label);

// <---- icon ---->
var i = document.createElement('i');
i.setAttribute('class', 'fas fa-moon');
label.append(i);
var i = document.createElement('i');
i.setAttribute('class','fas fa-sun');
label.append(i);

// <---- ball ---->
var div1 = document.createElement('div');
div1.className = 'ball';
label.appendChild(div1);
document.body.appendChild(div);
console.log(div);

// const checkbox = document.getElementById('checkbox');

// checkbox.addEventListener('change', ()=>{
//     document.body.classList.toggle('dark');
// });

// <---- br ----> 
var br = document.createElement('BR');
document.body.appendChild(br);


    /** input --> value**/
var input = document.createElement('input');
input.type = "text";
input.placeholder = "0";
input.setAttribute("id","output");
document.body.appendChild(input);
console.log(input);



 
    /**button CLEAR**/
var buttonClr = document.createElement('button');
var buttonClrText = document.createTextNode('AC');
buttonClr.appendChild(buttonClrText);
buttonClr.setAttribute('onClick', "clr()");
buttonClr.addEventListener('onclick',runEvent);
document.body.appendChild(buttonClr);
console.log(buttonClr);

    /** button DELETE**/
var buttonDel = document.createElement('button');
var buttonDelText = document.createTextNode('DEL');
buttonDel.appendChild(buttonDelText);
buttonDel.setAttribute('onClick', "del()");
buttonDel.addEventListener('onclick',runEvent);
document.body.appendChild(buttonDel);
console.log(buttonDel);


    /**   button %  **/
var buttonPercentage = document.createElement('button');
var buttonPercentageText = document.createTextNode('%');
buttonPercentage.appendChild(buttonPercentageText);
buttonPercentage.setAttribute('onClick', "display('%')");
buttonPercentage.addEventListener('onclick',runEvent);
document.body.appendChild(buttonPercentage);
console.log(buttonPercentage);

    /**   button /  **/

var buttonDivision = document.createElement('button');
var buttonDivisionText = document.createTextNode('/');
buttonDivision.appendChild(buttonDivisionText);
buttonDivision.setAttribute('onClick', "display('/')");
buttonDivision.addEventListener('onclick',runEvent);
document.body.appendChild(buttonDivision);
console.log(buttonDivision);

    /**   button 7  **/

var buttonSeven = document.createElement('button');
var buttonSevenText = document.createTextNode('7');
buttonSeven.appendChild(buttonSevenText);
buttonSeven.setAttribute('onClick', "display('7')");
buttonSeven.addEventListener('onclick',runEvent);
document.body.appendChild(buttonSeven);
console.log(buttonSeven);

    /**   button 8  **/

var buttonEight = document.createElement('button');
var buttonEightText = document.createTextNode('8');
buttonEight.appendChild(buttonEightText);
buttonEight.setAttribute('onClick', "display('8')");
buttonEight.addEventListener('onclick',runEvent);
document.body.appendChild(buttonEight);
console.log(buttonEight);

    /**   button 9  **/

var buttonNine = document.createElement('button');
var buttonNineText = document.createTextNode('9');
buttonNine.appendChild(buttonNineText);
buttonNine.setAttribute('onClick', "display('9')");
buttonNine.addEventListener('onclick',runEvent);
document.body.appendChild(buttonNine);
console.log(buttonNine);

    /**   button *  **/

var buttonMultiply = document.createElement('button');
var buttonMultiplyText = document.createTextNode('*');
buttonMultiply.appendChild(buttonMultiplyText);
buttonMultiply.setAttribute('onClick', "display('*')");
buttonMultiply.addEventListener('onclick',runEvent);
document.body.appendChild(buttonMultiply);
console.log(buttonMultiply);


    /**   button 4  **/

var buttonFour = document.createElement('button');
var buttonFourText = document.createTextNode('4');
buttonFour.appendChild(buttonFourText);
buttonFour.setAttribute('onClick', "display('4')");
buttonFour.addEventListener('onclick',runEvent);
document.body.appendChild(buttonFour);
console.log(buttonFour);

    /**   button 5  **/

var buttonFive = document.createElement('button');
var buttonFiveText = document.createTextNode('5');
buttonFive.appendChild(buttonFiveText);
buttonFive.setAttribute('onClick', "display('5')");
buttonFive.addEventListener('onclick',runEvent);
document.body.appendChild(buttonFive);
console.log(buttonFive);

    /**   button 6  **/

var buttonSix = document.createElement('button');
var buttonSixText = document.createTextNode('6');
buttonSix.appendChild(buttonSixText);
buttonSix.setAttribute('onClick', "display('6')");
buttonSix.addEventListener('onclick',runEvent);
document.body.appendChild(buttonSix);
console.log(buttonSix);

    /**   button -  **/

var buttonSub = document.createElement('button');
var buttonSubText = document.createTextNode('-');
buttonSub.appendChild(buttonSubText);
buttonSub.setAttribute('onClick', "display('-')");
buttonSub.addEventListener('onclick',runEvent);
document.body.appendChild(buttonSub);
console.log(buttonSub);

    /**   button 1  **/

var buttonOne = document.createElement('button');
var buttonOneText = document.createTextNode('1');
buttonOne.appendChild(buttonOneText);
buttonOne.setAttribute('onClick', "display('1')");
buttonOne.addEventListener('onclick',runEvent);
document.body.appendChild(buttonOne);
console.log(buttonOne);

    /**   button 2  **/
var buttonSecond = document.createElement('button');
var buttonSecondText = document.createTextNode('2');
buttonSecond.appendChild(buttonSecondText);
buttonSecond.setAttribute('onClick', "display('2')");
buttonSecond.addEventListener('onclick',runEvent);
document.body.appendChild(buttonSecond);
console.log(buttonSecond);


    /**   button 3  **/

var buttonThree = document.createElement('button');
var buttonThreeText = document.createTextNode('3');
buttonThree.appendChild(buttonThreeText);
buttonThree.setAttribute('onClick', "display('3')");
buttonThree.addEventListener('onclick',runEvent);
document.body.appendChild(buttonThree);
console.log(buttonThree);

    /**   button +  **/

var buttonAdd = document.createElement('button');
var buttonAddText = document.createTextNode('+');
buttonAdd.appendChild(buttonAddText);
buttonAdd.setAttribute('onClick', "display('+')");
buttonAdd.addEventListener('onclick',runEvent);
document.body.appendChild(buttonAdd);
console.log(buttonAdd);

    /**   button .  **/

var buttonDot = document.createElement('button');
var buttonDotText = document.createTextNode('.');
buttonDot.appendChild(buttonDotText);
buttonDot.setAttribute('onClick', "display('.')");
buttonDot.addEventListener('onclick',runEvent);
document.body.appendChild(buttonDot);
console.log(buttonDot);

    /**   button 0  **/

var buttonZero = document.createElement('button');
var buttonZeroText = document.createTextNode('0');
buttonZero.appendChild(buttonZeroText);
buttonZero.setAttribute('onClick', "display('0')");
buttonZero.addEventListener('onclick',runEvent);
document.body.appendChild(buttonZero);
console.log(buttonZero);

    /**   button Calculate() **/

var buttonCalculate = document.createElement('button');
buttonCalculate.className = 'equal';
var buttonCalculateText = document.createTextNode('=');
buttonCalculate.appendChild(buttonCalculateText);
buttonCalculate.setAttribute('onClick', "calculate()");
buttonCalculate.addEventListener('onclick',runEvent);
document.body.appendChild(buttonCalculate);
console.log(buttonCalculate);



function runEvent(e){
    console.log(onclick);
}

let output = document.getElementById('output');
// console.log(outputScreen);

function display(num){
    output.value += num;
}

function calculate(){
    try{
        output.value = eval(output.value);
    }
    catch{
     alert("Only numbers are allowed");
    }
}

function clr(){
    output.value ="";

}

function del(){
    output.value = output.value.slice(0,-1);
}




