/* 
    Elements
*/

const result = document.getElementById('result');
const clipboard = document.getElementById('clipboard');
const refresh = document.getElementById('refresh');

const length = document.getElementById('length');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');

const getChar = {
    hasLower: getLowerCaseChar,
    hasUpper: getUpperCaseChar,
    hasNumber: getNumberChar
}

/* 
    Listeners
*/
clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = result.innerText;
	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
});

refresh.addEventListener('click', () => {
	const len = +length.value;
    const hasLower = lowercase.checked;
	const hasUpper = uppercase.checked;
    const hasNumber = numbers.checked;
    	
	result.innerText = generatePassword(hasLower, hasUpper, hasNumber, len);
});

/*
    Functions
 */

 function generatePassword(hasLower, hasUpper, hasNumber, length){
    var password = ""
	const selectedTypes = hasLower + hasUpper + hasNumber;
    if(selectedTypes === 0){
        alert("Please select at least one option");
        return "";
    }
    
    const types = [{hasLower}, {hasUpper}, {hasNumber}].filter(function(item){
        return Object.values(item)[0]
    });
    var offset = Math.floor(Math.random() * parseInt(selectedTypes));

    for(i=offset; i<(length+offset); i++){
        var funcName = Object.keys(types[i%3]);
        password += getChar[funcName]();
    }

    return password;
 }

 function getLowerCaseChar() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
 }

 function getNumberChar() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 }

 function getUpperCaseChar() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 }