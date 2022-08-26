function checkEmail(email) { 
    if (typeof email !="string"){ 
        return 'error : dikarenakan tidak memenuhi krakteria email' 
    } 
    let regexemail = email.match(/^[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.(com|co.id|id)$/g) 
    if (regexemail){ 
        return 'valid' 
    } return 'invalid' 
} 
 
 
console.log(checkEmail('fransbchtr@gmail.co.id')); 
console.log(checkEmail('fransbchtr@gmai.com')); 
console.log(checkEmail('fransbchtr@gmail'));  
console.log(checkEmail('fransbchtr'));
console.log(checkEmail(3322));
console.log(checkEmail());