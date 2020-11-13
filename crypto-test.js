function encrypt() {
	var str = document.getElementById("plain-text").value;
	var shift = parseInt(document.getElementById("shift").value,10);
	document.getElementById("encrypted-message").value = caesarEncrypt(str,shift);
}

function decrypt() {
	var str = document.getElementById("encrypted-text").value;
	var shift = parseInt(document.getElementById("shift").value,10);
	document.getElementById("decrypted-plain-text").value = caesarDecrypt(str,shift);
}


function caesarEncrypt(message, shift) {
	console.log(shift); 
	var num = [];
		if (message.charCodeAt(i) >=97 && message.charCodeAt(i) <=122)
			for(var i = 0; i < message.length; i++)
			num[i] = (message.charCodeAt(i) + shift - 97)%(26+shift) + 97;
		else if (message.charCodeAt(i) >=65 && message.charCodeAt(i) <=90)
			for(var i = 0; i < message.length; i++)
			num[i] = (message.charCodeAt(i) + shift - 65)%(26+shift) + 65;
	return String.fromCharCode( ...num );
}

function caesarDecrypt(message, shift) {
	var num = [];
		if (message.charCodeAt(i) >=97 && message.charCodeAt(i) <=122)
			for(var i = 0; i < message.length; i++)
			num[i] = (message.charCodeAt(i) - shift - 97)%(26+shift) + 97;
		else if (message.charCodeAt(i) >=65 && message.charCodeAt(i) <=90)
			for(var i = 0; i < message.length; i++)
			num[i] = (message.charCodeAt(i) - shift - 65)%(26+shift) + 65;
	return String.fromCharCode( ...num );
}

function copyOne() {
const enStr = document.getElementById("encrypted-message");
enStr.focus(); 
enStr.select(); // to copy you need to select first
document.execCommand("copy");
}

function copyTwo() {
const enStr = document.getElementById("decrypted-plain-text");
enStr.focus(); 
enStr.select(); // to copy you need to select first
document.execCommand("copy");
}



