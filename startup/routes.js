const express = require('express');
const produto = require('../routes/produto');
const auth = require('../routes/auth');

module.exports = function (app) {
    app
        .use(express.json())
        .use('/api/produto', produto)
        .use('/api/auth', auth)
}