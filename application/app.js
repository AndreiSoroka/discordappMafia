const Game = require('./classes/game');
const Discord = require('discord.js');
const conf = require('./config/app.json');

var client = new Discord.Client();
var game;

client.on('ready', () => {
    game = new Game(client);
});
client.on('message', (message) => {
    game && game.onGetMessage(message);
});

client.login(conf.token);