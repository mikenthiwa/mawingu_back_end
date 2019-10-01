import envVar from '../../environment';

const { database: { dbName , dbPassword, DATABASE_URL} } = envVar;

module.exports = {
  "development": {
    "use_env_variable": DATABASE_URL,
    "username": dbName,
    "password": dbPassword,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
};
