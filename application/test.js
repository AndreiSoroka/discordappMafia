const Users = require('./classes/Users');
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
logConsole(users.get({role: 'l'}).length == 6, 'count users is');

// Ищем пользователя с id 12 по имени Mercedes
var userA = users.get({id: 12});
if (userA && userA.name == 'Mercedes') {
    console.log('search user Mercedes... successful');
} else {
    console.error('search user Mercedes... fail');
}

// Убъем пользователя с id 12
var newRoleUserA = _.without(userA.role, 'l');
users.updateRole({id: 12, role: newRoleUserA});
if (userA.role.indexOf('l') == -1) {
    console.log('kill user id 12... successful');
} else {
    console.error('kill user id 12... fail');
}


// живых пользователей
if (users.get({role: 'l'}).length == 5) {
    console.log('count lives users is... successful');
} else {
    console.error('count lives users is... fail');
}

// var myUser = users.get({id: 55});
// var myRole = ['d', 'g'];
// console.log(myUser);
// users.updateRole({id: 55, role: myRole});
// console.log(users.get({id: 55}));
// console.log(users.get({group: 'l'}));

function logConsole(isSuccessful, message) {
    if (isSuccessful) {
        console.log(`> ${message}... successful!`)
    } else {
        console.log(`> ${message}... fail!`)
    }
}