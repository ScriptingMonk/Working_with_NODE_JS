/*
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to our home page</h1>');
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>HELLO, OUR CONTACT NUMBER IS 7011169705</h1>');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Not Found</h1>');
    }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

*/




const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(
            '<h1>Welcome , to our home page</h1>'
        )
    }
    else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>HELLO OUR CONTACT NUMBER IS 7011169705</h1>')
    }
    else
        res.end(`
                <h1>Oops !!</h1>
                <p>We can't seem to find the page you are looking for</p>
                <a href ="/">Bact to the Home Page</a>
                `)

})

server.listen(5000)

