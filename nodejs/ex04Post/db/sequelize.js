const { Sequelize } = require('sequelize');

new Sequelize('node', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true // 내부적으로 실행되는 sql 문을 출력
});

module.exports = Sequelize;