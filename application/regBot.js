const config = require('./config/app.json');

/**
 * Получение списка прав доступа
 * @param {Array} data
 */
function getPermission(data) {
    var permissions = require('./config/permissions.json');
    var result = 0;
    data.forEach((key)=> {
        result += permissions[key] || 0;
    });
    return result;
}

function getAuthLink(permission) {
    var resultPermission = getPermission(permission);
    return `https://discordapp.com/oauth2/authorize?client_id=${config.clientId}&scope=bot&permissions=${resultPermission}`
}


console.log(getAuthLink(['READ_MESSAGES', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE']));