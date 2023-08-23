const bodyParser = require('body-parser');
const produto = require('./produto');
const auth = require('./auth')

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        produto,
        auth,
    )
}