const userTable = require("../createTable/creteTable");


const addEntry = async(req,res)=>{
    try{
    const {name,phone,email} = req.body;
    const userEntry = await userTable.create({
        name:name,
        phone:phone,
        email:email
    })
    res.status(201).send("User inserted successfully");
    }
catch(err) {
    console.log("BACKEND ERROR:", err);
    res.status(500).json({
        message: err.message
    });
}    }



const getEntry = async(req,res)=>{
    try{
     const userEntry =await userTable.findAll();
     res.status(200).json(userEntry);
    }catch(err){
     res.status(500).send("Cannot get users");
    }
}


const updateEntry = async(req,res)=>{
    try{
        const {id} = req.params;
        const {name,phone,email} = req.body;
        const updateUserEntry = await userTable.findByPk(id);
        if(!updateUserEntry){
            console.log(err.message);
           return res.status(404).send(`user not find with id ${id}`)
        }
        updateUserEntry.name = name;
        updateUserEntry.phone = phone;
        updateUserEntry.email = email;
        await updateUserEntry.save();
        res.status(200).send("updated");

    }catch(err){
console.log(err.message);
    res.status(500).send("Unable to update");
    }
}

const deleteEntry = async(req,res)=>{
    try{
        const {id} = req.params;
        const DeleteUserEntry = await userTable.destroy({
            where:{
                id:id
            }
        });
        if(!DeleteUserEntry){
           return res.status(404).send("User not found");
        }
        res.status(200).send("Deleted");

    }catch(err){
console.log(err.message);
    res.status(500).send("Unable to delete");
    }
}


module.exports = {
    addEntry,
    getEntry,
    updateEntry,
    deleteEntry
}