const hammusDB = require('hammus-db');

const insertQuery = 'INSERT INTO users_table(name, id, gender, hobbies) VALUES (?, ?, ?, ?)';
const getUserQuery = 'SELECT * FROM users_table where id=?';

function init(connectionString) {
    hammusDB.init(connectionString);
}

function saveUser(user) {
    const { name, id, gender, hobbies } = user;
    return hammusDB.insertRecord(insertQuery, [name, id, gender, hobbies.join(',')]);
}

async function getUser(userId) {
    const result = await hammusDB.getRecords(getUserQuery, [userId]);
    return result[0];
}

module.exports = {
    init,
    saveUser,
    getUser
};
