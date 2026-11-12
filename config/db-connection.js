const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking_appointment','root','Laxmanaliasbunny*525',{
     host : 'localhost',
     dialect : 'mysql'
});


(async ()=>{try{
    await sequelize.authenticate();
     console.log("Connection established");
}catch(err){
    console.log(err);
}})();


module.exports = sequelize;