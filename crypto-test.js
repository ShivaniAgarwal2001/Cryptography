function encrypt() {
	var str = document.getElementById("plain-text").value;
	document.getElementById("encrypted-message").value = caesarEncrypt(str);
}

function decrypt() {
	var str = document.getElementById("encrypted-text").value;
	document.getElementById("decrypted-plain-text").value = caesarDecrypt(str);
}


function caesarEncrypt(message) {
	var num = [];
		if (message.charCodeAt(i) >=97 && message.charCodeAt(i) <=122)
			for(var i = 0; i < message.length; i++)
			num[i] = (message.charCodeAt(i) + 1 - 97)% 26 + 97;
		else if (message.charCodeAt(i) >=65 && message.charCodeAt(i) <=90)
			for(var i = 0; i < message.length; i++)
			num[i] = (message.charCodeAt(i) + 1 - 65)% 26 + 65;
	return String.fromCharCode( ...num );
}

function caesarDecrypt(message) {
	var num = [];
		if (message.charCodeAt(i) >=97 && message.charCodeAt(i) <=122)
			for(var i = 0; i < message.length; i++)
			num[i] = (message.charCodeAt(i) - 1 - 97)% 26 + 97;
		else if (message.charCodeAt(i) >=65 && message.charCodeAt(i) <=90)
			for(var i = 0; i < message.length; i++)
			num[i] = (message.charCodeAt(i) - 1 - 65)% 26 + 65;
	return String.fromCharCode( ...num );
}

function copyOne() {
const enStr = document.getElementById("encrypted-message");
enStr.focus(); // mdn uses so we use
enStr.select(); // to copy you need to select first
document.execCommand("copy");
}

function copyTwo() {
const enStr = document.getElementById("decrypted-plain-text");
enStr.focus(); // mdn uses so we use
enStr.select(); // to copy you need to select first
document.execCommand("copy");
}



