'use strict';

window.onload = function(){
	init();
};

var ciphertextbox;
var cleartextbox;

var init = function(){
	ciphertextbox = document.getElementById('ciphertext');
	// This method of adding listeners does not work
	// ciphertextbox.addEventListener('onchange', OnStateChange);
	// ciphertextbox.addEventListener('onkeyup', OnStateChange);
	// ciphertextbox.addEventListener('onpaste', OnStateChange);
	// ciphertextbox.addEventListener('oninput', OnStateChange);
	ciphertextbox.onchange = OnStateChange;
	ciphertextbox.onkeyup = OnStateChange;
	ciphertextbox.onpaste = OnStateChange;
	ciphertextbox.oninput = OnStateChange;
	cleartextbox = document.getElementById('cleartext');
};

var OnStateChange = function(){
	console.log("HEY");
};

/*
Step 1 - Pull text from input
Step 2 - Perform LFA on input
Step 3 - Determine Translation Alphabet
Step 4 - Perform Translation
Step 5 - Show result in output
*/
