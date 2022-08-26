function getSplitName(personName){ 
    if (typeof personName !="string"){ 
        return " error : Tidak sesuai dengan tipe data" 
    } 
    let getName = personName.split(" ") 
    const name ={ 
      firstName : null, 
      middleName : null, 
      lastName: null, 
    } 
    if (getName.length === 3){ 
        name.firstName = getName [0]; 
        name.middleName = getName [1]; 
        name.lastName = getName [2]; 
        return name 
     } if (getName.length === 2){ 
        name.firstName = getName [0]; 
        name.lastName = getName [1]; 
        return name 
    } if (getName.length === 1){ 
        name.firstName = getName [0]; 
        return name 
    }  
    else { 
        return " error : this function is only for 3 characters name " 
    } 
}
 
console.log(getSplitName("Aldi Daniela Pranata")) 
console.log(getSplitName("Dwi Kuncoro")) 
console.log(getSplitName("Aurora")) 
console.log(getSplitName("Aurora Aureliya Sukma Darma")) 
console.log(getSplitName(0))