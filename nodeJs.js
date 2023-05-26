// console.log("hello world")

const http = require(`http`);

const server = http.createServer((req, res)=> {
    res.setHeader(`Content-type`, `application/json`);
    res.writeHead(200);

    // 200 - OK successful
    // 400 - error
    // 404 - not found
    res.end(
        JSON.stringify({
            message: `Hello world!`
        })
    )
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server running!`);
});