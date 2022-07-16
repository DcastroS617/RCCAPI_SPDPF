const sequelize = require('../db/sequelize')
const { DataTypes } = require('sequelize')
const Autopart = require('./autopart')
const User = require('./user')

const Sale = sequelize.define('sale', {
    SaleID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    AutopartID: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

Sale.belongsTo(Autopart, { foreignKey: 'AutopartID', foreignKeyConstraint: 'fk_scAutopart' })
Sale.belongsTo(User, { foreignKey: 'UserID', foreignKeyConstraint: 'fk_scUser' })

module.exports = Sale
