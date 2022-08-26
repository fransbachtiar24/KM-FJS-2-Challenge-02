const dataAngka =[9,4,7,7,4,3,2,2,8]

function getAngkaTerbesarKedua(arr){
    if (!(arr instanceof Array)) {
        return "error" 
    }

    let angkaTerbesar=0
    for( let i=0; i<arr.length;i++){
        if(angkaTerbesar<arr[i]){
            angkaTerbesar = arr[i]
        }    
    }

    let angkaTerbesarKedua = 0
    for( let i=0; i<arr.length;i++){ 
        if(angkaTerbesarKedua<arr[i] && arr[i]!= angkaTerbesar){
            angkaTerbesarKedua = arr[i]
        }
    }
    return angkaTerbesarKedua
}

console.log(getAngkaTerbesarKedua(dataAngka)) 
console.log(getAngkaTerbesarKedua(0))
console.log(getAngkaTerbesarKedua())