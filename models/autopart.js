const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')
const AutopartDetail = require('./autopartdetail')
const Distributor = require('./distributor')
const Providor = require('./providor')

const Autopart = sequelize.define('autopart', {
    AutopartID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    AutopartDetailID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ProvidorID: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    DistributorID: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false
})

Autopart.belongsTo(Providor, {foreignKey: 'ProvidorID', foreignKeyConstraint: 'fk_apProvidor'})
Autopart.belongsTo(Distributor, {foreignKey: 'DistributorID', foreignKeyConstraint: 'fk_apDistributor'})
Autopart.belongsTo(AutopartDetail, {foreignKey: 'AutopartDetailID', foreignKeyConstraint: 'fk_apAPDetail'})

module.exports = Autopart