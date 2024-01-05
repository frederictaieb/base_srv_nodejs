const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {

    const Candidates = Sequelize.define("Candidates", {
        lastname: {
            type: DataTypes.STRING,
            allowNull:false
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull:false
        },
        email: {
            type: DataTypes.STRING, 
            allowNull:true
        },
        phone: {
            type: DataTypes.STRING(20), 
            allowNull:true
        }, 
        nationality: {
            type: DataTypes.STRING(50), 
            allowNull:true
        },
        linkedin: {
            type: DataTypes.STRING(100), 
            allowNull:true
        },



// email, 
// telephone, 
// Adresse, 
// Diplome
// Parcours
// Activités
// Rémunération : 
// Base, bonus, deferred
// Attendue 
// Motivations :
// Relocalisation : 
// NC Period

    })
    return Candidates;
};
