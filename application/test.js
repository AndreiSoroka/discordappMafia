const Users = require('./classes/users');
const World = require('./classes/world');
const _ = require('lodash');

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

var users = new Users(null, roles, rolesAlliace);
users.add({
    id: 33,
    name: 'Alina',
    discordApp: {}
});
users.add({
    id: 35,
    name: 'Richard',
    discordApp: {}
});
users.add({
    id: 22,
    name: 'Pavel',
    discordApp: {}
});
users.add({
    id: 11,
    name: 'Mercedes',
    discordApp: {}
});
users.add({
    id: 12,
    name: 'Mercedes',
    discordApp: {}
});

users.add({
    id: 55,
    name: 'George',
    discordApp: {}
});

users.initRoles();


users.add({
    id: 57,
    name: 'George',
    discordApp: {}
});

// добавлено пользователей
logConsole(users.get({}).length == 6, 'count users is');

// живых пользователей
logConsole(users.get({role: 'l'}).length == 6, 'count lives users is');

// Ищем пользователя с id 12 по имени Mercedes
var userA = users.get({id: 12});
logConsole(userA && userA.name == 'Mercedes', 'search user Mercedes');

// Убъем пользователя с id 12
var newRoleUserA = _.without(userA.role, 'l');
users.updateRole({id: 12, role: newRoleUserA});
logConsole(userA.role.indexOf('l') == -1, 'kill user id 12');

// живых пользователей
logConsole(users.get({role: 'l'}).length == 5, 'count lives users is');


function logConsole(isSuccessful, message) {
    if (isSuccessful) {
        console.log(`> ${message}... successful!`)
    } else {
        console.error(`> ${message}... fail!`)
    }
}

////// ----------
var day = {
    start: function () {
        console.log('start');
        this.action();
        return true;
    },
    end: function () {
        console.log('end');
        return false;
    },
    action: function () {
        console.log('action');
    },
    time: 2
};
var world = new World([day]);