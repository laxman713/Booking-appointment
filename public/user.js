
const form = document.getElementById('formSubmit');

form.addEventListener('submit',async (e)=>{
    e.preventDefault();
const name = document.getElementById("username").value;
const phone = document.getElementById("phone").value;
const email = document.getElementById("email").value;
// console.log(name,email,phone);
try{
const response =await axios.post("http://localhost:3000/users",{
    name:name,
    phone:phone,
    email:email
});
 console.log(response);
    console.log(response.data);
            getUsers();

}catch(err){
    console.log(err.message);
}


});

async function getUsers() {
    try {
        const response = await axios.get('/users');


        const usersList = document.getElementById('usersList');


        usersList.innerHTML = '';

        response.data.forEach(function(user) {
    const li = document.createElement('li');

    li.textContent = `${user.name} - ${user.phone} - ${user.email}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';

    li.append(editBtn);
    li.append(deleteBtn);

    usersList.append(li);
});
        }

    catch(err) {
        console.log(err);
    }

}
document.addEventListener('DOMContentLoaded', function() {
    getUsers();
});
