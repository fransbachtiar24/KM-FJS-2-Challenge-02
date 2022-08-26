function changeWord(selectedText, changedText, text){ 
    let resultText = text.replace(selectedText,changedText) 
    return resultText; 
} 
 
const kalimat1 = "Andini sangat cinta kamu Selamanya"; 
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu"; 
 
console.log(changeWord("cinta","benci", kalimat1)); 
console.log(changeWord("bromo","semeru", kalimat2));