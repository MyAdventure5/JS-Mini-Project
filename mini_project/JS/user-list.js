function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            let userListElement = document.getElementById('userList');
            users.forEach(user => {
                let userContainer = document.createElement('div');
                userContainer.classList.add('user-container');
                userContainer.innerHTML = `
                            <p>ID: ${user.id}</p>
                            <p>Name: ${user.name}</p>
                            <button onclick="goToUserDetails(${user.id})">Details</button>
                        `;
                userListElement.appendChild(userContainer);
            });
        })

}

function goToUserDetails(userId) {
    window.location.href = `user-details.html?id=${userId}`;
}

fetchUsers();