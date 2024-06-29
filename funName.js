//Write a JavaScript function to get the function name. 

function function_fahim() {
    console.log("The name of the function is: "+arguments.callee.name);
}

function_fahim(); 

