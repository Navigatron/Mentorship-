'use strict';

window.onload = function(){
	init();
};

var ciphertextbox;
var cleartextbox;

var init = function(){
	// Initialize Ciphertext Box
	ciphertextbox = document.getElementById('ciphertext');
	ciphertextbox.onchange = OnStateChange;
	ciphertextbox.onkeyup = OnStateChange;
	ciphertextbox.onpaste = OnStateChange;
	ciphertextbox.oninput = OnStateChange;

	// Initialize the Cleartext Box
	cleartextbox = document.getElementById('cleartext');
};

var OnStateChange = function(){
	console.log("Handling Input");
	// Step One - Get Input Text
	let text = getInputText();
	// Step Two - do LFA on text

	// Step Three - Match text LFA to reference LFA

	// Step Four - Translate text

	// Step Five - publish results
	showResult(text);
	/*
	Step 1 - Pull text from input
	Step 2 - Perform LFA on input
	Step 3 - Determine Translation Alphabet
	Step 4 - Perform Translation
	Step 5 - Show result in output
	*/
};

var showResult = function(text) {
	cleartextbox.value = text;
}

var getInputText = function(){
	return ciphertextbox.value;
}
