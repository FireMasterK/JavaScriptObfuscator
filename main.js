var app = require('./app.js');

const port = process.env.PORT || 3000;

app.listen(port, 'localhost', () => console.log(`JavaScript Obfuscator listening on port ${port}!`))