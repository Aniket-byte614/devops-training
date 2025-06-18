// app/app.js
function requestHandler(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Hello</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    font-size: 3rem;
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                }
            </style>
        </head>
        <body>
            Hello World, My Name is&nbsp;<strong>Aniket Yadav</strong>
        </body>
        </html>
    `);
}

module.exports = requestHandler;

