/*
 Добавлять пользователей
 Распределять роли
 Убивать пользователей
 Блокировать чат пользователям (чтение и запись)
 */

/**
 * Управления пользователями
 * @class
 */
class Users {
    /**
     * @constructor
     * @param {Array} peoples
     * @param {Object} roles
     */
    constructor(peoples = [], roles = {}) {
        this._gameIsStarted = false;
        this._roles = roles;
        this._peoples = peoples || [];
        this._generateMapUsers();
    }

    /**
     * Поштучное добавление пользователей
     * @param people
     */
    add(people) {
        if (this._gameIsStarted) {
            return;
        }
        this._peoples.push(people);
        this._generateMapUsers();
    }

    /**
     * Распределение ролей между игроками
     * @returns {number}
     * num -1: мало пользователей для игры
     * num -2: мало пользователей для игры
     */
    initRoles() {
        var length = this._peoples.length;

        if (length < 4) {
            return -1; // маловато для игры
        }
        this._gameIsStarted = true;
        // ... распределение ролей

    }

    /**
     * Генерация мапов для быстрого поиска
     * @private
     */
    _generateMapUsers() {
        this._peoplesName = {};
        this._peoplesId = {};
        this._peoplesGroup = {};
        this._peoples.forEach((people)=> {
            // для быстрого поиска со
        })
    }

    /**
     * Поиск пользователя/пользователей
     * @param {number} [id] по Id пользователя
     * @param {number} [name] по нику пользователя
     * @param {number} [group] по группе пользователя
     */
    get({id, name, group}) {
        if (id) {
            return null;
        }
        if (name) {
            return null;
        }
        if (group) {
            return [];
        }
        return this._peoples;
    }

    /**
     * Обновить группу и игрока
     * @param id
     * @param name
     * @param newGroups
     */
    moveToRole({id, name, newGroups}) {

    }

    /**
     * Заблокировать чат
     * @param id
     * @param name
     * @param group
     */
    muteChat({id, name, group}) {
    }

    /**
     * Разблокировать чат
     * @param id
     * @param name
     * @param group
     */
    unmuteChat({id, name, group}) {
    }
}


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
    id: 22,
    name: 'Mercedes',
    discordApp: {}
});

console.log(users.get({}));