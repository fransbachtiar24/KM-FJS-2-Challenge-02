function isValidPassword (email){ 
    if (typeof email!="string"){ 
        return 'error : password tidak memenuhi krakteria yang telah ditentukan' 
    } 
    let regx = email.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/) 
    if ( regx){ 
        console.log('Karena Memenuhi Krakteria yang telah ditentukan')
        return true
    } 
    console.log('tidak memenuhi krakteria')
    return false 
} 
 
console.log(isValidPassword('Meong2021')) 
console.log(isValidPassword('meong2021')) 
console.log(isValidPassword('@eong')) 
console.log(isValidPassword('Meong2')) 
console.log(isValidPassword(0)) 
console.log(isValidPassword())