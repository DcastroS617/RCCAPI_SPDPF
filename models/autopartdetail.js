const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')

const AutopartDetail = sequelize.define('AutopartDetail', {
    AutopartDetailID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = AutopartDetail