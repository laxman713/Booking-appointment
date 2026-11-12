const express = require('express');
const app = express();
const path = require('path');
const router = require("./routes/userRoute");
const sequelize = require("./config/db-connection");
const createTable = require("./createTable/creteTable");
const cors = require('cors');

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/users',router);


sequelize.sync().then(()=>{
   app.listen(3000,()=>{
    console.log("Server is running on localhost:3000");
})
})
 .catch((err)=>{
    console.log(err);
 })
