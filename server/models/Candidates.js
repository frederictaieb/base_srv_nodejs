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
        }
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
