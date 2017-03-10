var kn = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './todolist.sqlite3'
    },
    migrations: {
        directory: "../migrations",
        tableName: "knex_migrations"
    }
});
module.exports = kn;
