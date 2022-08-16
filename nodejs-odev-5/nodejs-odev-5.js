const http = require('http');

const server = http.createServer((req, res) => {
    let url = req.url;
    if (url === '/index'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h2>Hosgeldiniz</h2>')
    } else if (url === '/hakkimda'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h2>merhaba yazilim ogrenemye yeni basladim ve kendimi gelistiriyorum.</h2>')
    } else if (url === '/iletisim'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h2>Bilgi ve oneri icin 0123123 123123 123332 23232.</h2>')
    } else {
        res.writeHead(404, {'Content-Type' : 'text/html'})
        res.write('<h2>Sayfa bulunamadi</h2>')
    }
    res.end()
})

const port = 5000;
server.listen(port, () => {
    console.log(`${port} numarali port basarili bir sekilde calistirildi.`)
})