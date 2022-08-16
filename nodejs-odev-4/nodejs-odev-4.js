const fs = require('node:fs');

const create = () => {
    fs.appendFile('employees.json', '{"name": "Employee 1 ", "salary": 2000}', function (err) {
    if (err) throw err;
    console.log('Json dosyasi olusturuldu.')
}) 
}


const read = () => {
    fs.readFile ('employees.json', 'utf8', (err,data) => {
    if(err) throw err;
    console.log(JSON.parse(data));
    console.log('Dosya basarili bir sekilde okundu.')
})
}

const update = () => {
    fs.appendFile('employees.json', '\n{"name": "Employee 2 ", "salary": 2000}', 'utf8', (err) => {
        if(err) throw err;
        console.log('Dosya güncellendi.')
    })
}

const deleteFolder = () => {
    fs.unlink('employees.json', (err) => {
        if(err) throw err;
        console.log('Dosya Silindi')
    })
}


