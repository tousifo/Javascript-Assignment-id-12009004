
  const prompt = require('prompt-sync')();
  const value = prompt("Enter a value: ");
  if(isNaN(value))
    console.log("Not a Number.");
  else
    console.log("A Number."); 
	 
