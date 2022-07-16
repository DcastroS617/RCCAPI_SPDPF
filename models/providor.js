const {DataTypes} = require('sequelize')
const sequelize = require('../db/sequelize')

const Providor = sequelize.define('providor', {
    ProvidorID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Name:{
        type: DataTypes.STRING,
        unique: true
    },
    Location:{
        type: DataTypes.STRING
    }
}, {
    timestamps: false
})

module.exports = Providor