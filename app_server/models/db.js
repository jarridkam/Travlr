const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1'
const dbURI = 'mongodb://${host}/travlr';
const readline = require('readline');

mongoose.set('useUnifiedTopology', true);

const connect = () => {
    setTimeout(() => mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useCreateIndex: true
    }), 1000);
}

mongoose.connection.on('connected', () => {});

mongoose.connection.on('error', err => {});

mongoose.connection.on('disconnected', () => {});

if (process.platform === 'win32') {
}

const gracefulShutdown = (msg, callback) => {};

process.once('SIGUSR2', () =>{});

process.once('SIGINT', () =>{});

process.once('SIGTERM', () =>{});

connect();

require('./travlr');




