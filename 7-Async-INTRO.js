/*  */

const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url === '/') {
        res.end(`
                <h1>WELCOME !!</h1>
                <p>This is the homepage </p>
            `)
    } else if (req.url === '/about') {
        //  BLOCKING    CODE   :    This blocking code will not only block /about but other pages too
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.end(`
                <h1>ABOUT US !!</h1>
                <p>We are web Developers </p>
            `)
    } else {
        res.end(`<h1>404 ERROR !!</h1>`)
    }
})

server.listen(5000, () => {
    console.log(`Server is listening on port 5000......`);
})