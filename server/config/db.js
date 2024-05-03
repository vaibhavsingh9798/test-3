const Sequelize = require("sequelize")

console.log('db cre..',process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD)

const sequleize = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,
    dialect:'mysql'
})

module.exports = sequleize;

