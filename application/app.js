const Users = require('./classes/Users');

// Могические распределение ролей идля игры
var roles = {
    m: 3,
    d: 1,
    k: 1,
    g: 10
};

var users = new Users(null, roles);
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

users.initRoles();


users.add({
    id: 55,
    name: 'George',
    discordApp: {}
});

console.log(users.get({}));