let alan = (yariCap) => {
    let hesaplama = Math.PI*Math.pow(yariCap,2)
    console.log(`Yaricapi ${yariCap} olan dairenin alani ${Math.floor(hesaplama)}`)
}

let cevre = (yariCap) => {
    let hesaplama = 2*Math.PI*yariCap
    console.log(`Yaricapi ${yariCap} olan dairenin cevresi ${Math.floor(hesaplama)}`)
}

module.exports = {
    alan,
    cevre
}