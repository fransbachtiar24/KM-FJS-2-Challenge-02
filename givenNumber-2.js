let checkTypeNumber=(givenNumber)=>{  
    if(typeof(givenNumber) == 'number') {  
        if(givenNumber % 2 == 0) {  
            return 'GENAP'  
        }else{  
            return 'Ganjil'  
        }  
    } 
    if(typeof(givenNumber)==='undefined'){ 
        return 'Error : Bro where is the parameter?' 
    }else{ 
        return 'Error : Invalid data type' 
    } 
};  
console.log(checkTypeNumber(10));   
console.log(checkTypeNumber(3));  
console.log(checkTypeNumber("3"));  
console.log(checkTypeNumber({}));  
console.log(checkTypeNumber([]));  
console.log(checkTypeNumber());