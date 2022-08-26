const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
];


function getInfoPenjualan(dataPenjualan){
  let untung = 0;
    let modal=0;
    let keuntungan=0;
    let temp =0 ;
    let hasil = null; 

    for(let i = 0; i < dataPenjualan.length; i++) {
      if(typeof dataPenjualan[i].hargaBeli === "number" || typeof dataPenjualan[i].hargajual === "number"|| typeof dataPenjualan[i].totalTerjual === "number" || typeof dataPenjualan[i].sisaStok === "number"){
        untung += (dataPenjualan[i].hargaJual - dataPenjualan[i].hargaBeli) * dataPenjualan[i].totalTerjual  
      }
      if(typeof dataPenjualan[i].hargaBeli === "number" || typeof dataPenjualan[i].hargajual === "number" || typeof dataPenjualan[i].totalTerjual === "number" || typeof dataPenjualan[i].sisaStok === "number" ){
        modal += ( dataPenjualan[i].totalTerjual + dataPenjualan[i].sisaStok ) * dataPenjualan[i].hargaBeli 
      }

      keuntungan = Math.round((untung/modal) * 100) 

      if(temp <  dataPenjualan[i].totalTerjual ){ 
        temp = dataPenjualan[i].totalTerjual
        hasil = dataPenjualan[i] 
        
      }
        
    }
    return {
      totalKeuntungan: "Rp." + untung.toLocaleString(), 
      totalModal: "Rp." + modal.toLocaleString(), 
      keuntungan : keuntungan.toString() + "%", 
      produkBukuTerlaris : hasil.namaProduk, 
      penulisTerlaris : hasil.penulis,
    }   
    
}

console.log(getInfoPenjualan(dataPenjualanNovel));