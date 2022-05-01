
// function isValidEmail(email) {
// 	var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// 	return !!email && typeof email === 'string' && emailRegex.match(email)};
// }

// isValidEmail("xyz@abc.com"); // true

function validateEmail(elementValue){      
    var emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.{1,1}[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue); 
} 

console.log(validateEmail("jharakhi1211@gmail.com"));