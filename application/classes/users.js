const Math = require('mathjs');

/**
 * Управление пользователями
 * @class
 */
class Users {
    /**
     * @constructor
     * @param {Array} peoples
     * @param {Object} roles
     * @param {Object} rolesAlliace
     */
    constructor(peoples = [], roles = {}, rolesAlliace = {}) {
        this._gameIsStarted = false;
        this._roles = roles;
        this._rolesAlliace = rolesAlliace;
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
     */
    initRoles() {
        var people = this._peoples;

        // Роли игроков
        var roles = Object.keys(this._roles);

        // если игроков меньше чем ролей
        // роли не будут распределены
        if (people.length < roles.length) {
            return -1;
        }

        // если игроков больше чем ролей
        // тогда распределям дополнительные роли согласно приоритетам
        if (people.length > roles.length) {
            for (var i = people.length - roles.length; i > 0; --i) {
                let newRole = this._generateGroupName(this._roles);
                roles.push(newRole);
                this._roles[newRole] -= 1;
            }
        }

        // Перемешиваем роли, согласно паранойи 3 раза
        this._shuffle(roles);
        this._shuffle(roles);
        this._shuffle(roles);

        // присваеваем роли игрокам
        for (let key in people) {
            let peopleRole = roles.splice(0, 1);
            peopleRole = peopleRole.concat(this._rolesAlliace[peopleRole[0]]);
            people[key].group = peopleRole;
        }

        this._gameIsStarted = true;

        return 1;
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
     * Разблокировать чат
     * @param id
     * @param name
     * @param group
     */
    unmuteChat({id, name, group}) {
    }

    /**
     *
     * P.s. Сложно объяснить такую простую вещь
     * @param {Object} roles
     * @returns {*}
     * @private
     */
    _generateGroupName(roles) {
        var maxPercentage = 0;
        for (let key in roles) {
            maxPercentage += roles[key];
        }
        var percentage = this._getRandomInt(1, maxPercentage);
        maxPercentage = 0;
        for (let key in roles) {
            maxPercentage += roles[key];
            if (percentage <= maxPercentage) {
                return key;
            }
        }
        return false;
    }

    /**
     * Получение случайного числа
     * @param min
     * @param max
     * @returns {number}
     * @private
     */
    _getRandomInt(min, max) {
        var a = 3;
        return ~~(Math.random() * (max - min + 1) + min);
    }

    _shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var num = Math.floor(Math.random() * (i + 1));
            var d = array[num];
            array[num] = array[i];
            array[i] = d;
        }
        return array;
    }
}

module.exports = Users;