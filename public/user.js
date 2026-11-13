let editId = null;
const form = document.getElementById('formSubmit');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById("username").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    // console.log(name,email,phone);
    if (editId === null) {
        try {

            const response = await axios.post("http://localhost:3000/users", {
                name: name,
                phone: phone,
                email: email
            });
            console.log(response);
            console.log(response.data);
            getUsers();

        } catch (err) {
            console.log(err.message);
        }
    } else {
        try {
            const response = await axios.put(`http://localhost:3000/users/${editId}`, {
                name: name,
                phone: phone,
                email: email
            })
            console.log(response.data);
            getUsers();
        } catch (err) {
            console.log(err);
        }
    }


});

async function getUsers() {
    try {
        const response = await axios.get('/users');
        const usersList = document.getElementById('usersList');
        usersList.innerHTML = '';
        response.data.forEach(function (user) {
            const li = document.createElement('li');

            li.textContent = `${user.name} - ${user.phone} - ${user.email}`;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.setAttribute('data-id', user.id);
            deleteBtn.classList.add('delBtn');


            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.setAttribute('data-id', user.id);
            editBtn.classList.add('editBtn');

            li.append(editBtn);
            li.append(deleteBtn);

            usersList.append(li);
        });
    }

    catch (err) {
        console.log(err);
    }

}


document.addEventListener('DOMContentLoaded', function () {
    getUsers();
});

document.addEventListener("click", updateUser);


async function updateUser(e) {
    try {
        if (e.target.className === 'editBtn') {
            console.log("edit btn clicked");
            const id = e.target.dataset.id;
            editId = id;
            console.log(id);
            const li = e.target.parentElement;
            const editLi = li.firstChild.textContent.split(" - ");
            document.getElementById("username").value = editLi[0];
            document.getElementById("phone").value = editLi[1];
            document.getElementById("email").value = editLi[2];
            //  document.getElementById("username").value = e.target.username;

        }
    } catch (err) {
        console.log(err);
    }
}


document.addEventListener("click", deleteUser);

async function deleteUser(e) {
    try {
        if (e.target.className === 'delBtn') {
        const delId = e.target.dataset.id;
        console.log(delId);
        const li = e.target.parentElement;
        console.log(li);
        li.remove();

        const res = await axios.delete(`http://localhost:3000/users/${delId}`);
        console.log(res.data);
        }
    } catch (err) {
        console.log(err);
    }
}