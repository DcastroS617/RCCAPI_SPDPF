const sequelize = require('../db/sequelize')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    UserID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                args: true,
                msg: 'El valor ingresado debe ser de un email unicamente'
            }
        }
    }
})

module.exports = User