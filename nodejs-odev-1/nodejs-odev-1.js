function sonuc(r){
let alan = Math.PI * Math.pow(r,2) 
console.log(`Yaricapi ${r} olan dairenin alani: ${Math.floor(alan)}`)
}
    
let yariCap = process.argv.slice(2)
sonuc(yariCap)