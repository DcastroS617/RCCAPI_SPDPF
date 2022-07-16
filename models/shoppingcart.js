const sequelize = require('../db/sequelize')
const { DataTypes } = require('sequelize')
const Autopart = require('./autopart')
const User = require('./user')

const Shoppingcart = sequelize.define('shoppingcart', {
    ShoppingcartID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    AutopartID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

Shoppingcart.belongsTo(Autopart, { foreignKey: 'AutopartID', foreignKeyConstraint: 'fk_scAutopart' })
Shoppingcart.belongsTo(User, { foreignKey: 'UserID', foreignKeyConstraint: 'fk_scUser' })

module.exports = Shoppingcart
