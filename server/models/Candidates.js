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
        languages: {
            type: DataTypes.STRING(100), 
            allowNull:true
        },
        academics: {
            type: DataTypes.STRING(100), 
            allowNull:true
        },
        linkedin: {
            type: DataTypes.STRING(100), 
            allowNull:true
        },
        career: {
            type: DataTypes.STRING(100), 
            allowNull:true
        },
        daybyday: {
            type: DataTypes.STRING(100), 
            allowNull:true
        },
        strat: {
            type: DataTypes.STRING(100), 
            allowNull:true
        },
        stratAssets: {
            type: DataTypes.STRING(100), 
            allowNull:true
        },
        stratRegion: {
            type: DataTypes.STRING(100), 
            allowNull:true
        },
        stratFreq: {
            type: DataTypes.STRING(100), 
            allowNull:true
        },
        skills: {
            type: DataTypes.STRING(100), 
            allowNull:true
        },
        needs: {
            type: DataTypes.STRING(100), 
            allowNull:true
        },
        target: {
            type: DataTypes.STRING(100), 
            allowNull:true
        },
        compBase: {
            type: DataTypes.INTEGER, 
            allowNull:true
        },
        compBonus: {
            type: DataTypes.INTEGER, 
            allowNull:true
        },
        compDeffered: {
            type: DataTypes.INTEGER, 
            allowNull:true
        },
        compExpectations: {
            type: DataTypes.INTEGER, 
            allowNull:true
        },
        ncperiod: {
            type: DataTypes.STRING, 
            allowNull:true
        },
        relocation: {
            type: DataTypes.STRING(100), 
            allowNull:true
        },
        other: {
            type: DataTypes.STRING(100), 
            allowNull:true
        },
    })
    return Candidates;
};


/*
lastname
firstname
email
phone
nationality
languages
academic
linkedin
career
daybyday
strat
stratAssets
stratRegion
stratFreq
skills
needs
target
compBase
compBonus
compDeffered
compExpectations
ncperiod
relocation
notes*/