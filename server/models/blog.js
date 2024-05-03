const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const Blog =  sequelize.define('blog',{
    title:{
        type : Sequelize.STRING
    },
    date:{
        type:  Sequelize.DATE,
        
    },
    content:{
        type: Sequelize.STRING
    },
       author:{
        type: Sequelize.STRING
    },
});

module.exports = Blog;