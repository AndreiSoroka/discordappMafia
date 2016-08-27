const Users = require('./classes/Users');

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
    id: 55,
    name: 'George',
    discordApp: {}
});

console.log(users.get({}));