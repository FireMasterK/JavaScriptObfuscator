var app = require('./app.js');

const port = process.env.PORT || 3000;
const listen = process.env.LISTEN || "localhost";

app.listen(port, listen, () => console.log(`JavaScript Obfuscator listening on port ${port}!`))