const Users = require('./users');
const World = require('./world');
const config = require('../config/app.json');

// Могические распределение ролей для игры
// это значит каждой роли по 1 штуке + в относительном кол-ве дополнительных ролей
// example for 6 persons: [m,d,k,g,g,g] or [m,d,k,g,g,m]
var roles = {
    m: 2,
    d: 0,
    k: 0,
    g: 5
};

// Аллиасы для ролей
// Доктор так же будет состоять в группе граждан и в группе живых людей
var rolesAlliace = {
    m: ['l'],
    d: ['l', 'g'],
    k: ['l', 'g'],
    g: ['l']
};

/**
 * @class
 */
class Game {
    constructor(client) {
        this._channelText = client.channels.find('id', '219151514143424513');
        this._channelText.sendMessage("I'm ready", {tts: false});
        this._world = null;
        this._users = new Users(null, roles, rolesAlliace);
    }

    onGetMessage(message) {
        // игнорирование ботов
        if (message.author.bot) {
            return;
        }

        // мир создан, игра в процессе
        if (this._world) {
            this._world.action(message);
            return;
        }

        // обращение к боту
        if (message.mentions.users.find('id', config.clientId)) {
            if (message.content.indexOf('+')) {
                this._users.add({
                    id: message.author.id,
                    name: message.author.username,
                    discordApp: message.member
                });
                message.reply('ok!');
                this._channelText.sendMessage(JSON.stringify(this._users.get({})));
            }
        }
    }

    start() {
        this._world = new World([
            this._dayFirst(),
            this._daySecond(),
        ]);
    }

    _dayFirst() {
        return {
            start: function () {
                console.log('start day');
                // this.action();
                return true;
            },
            end: function () {
                console.log('end day');
                return true;
            },
            action: function () {
                console.log('action day');
            },
            time: 20
        };
    }

    _daySecond() {
        return {
            start: function () {
                console.log('start day');
                // this.action();
                return true;
            },
            end: function () {
                console.log('end day');
                return true;
            },
            action: function () {
                console.log('action day');
            },
            time: 20
        };
    }

}

module.exports = Game;
