function fetchUserDetails() {
    let urlParams = new URLSearchParams(window.location.search);
    let userId = urlParams.get('id');

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            let userDetailsElement = document.getElementById('userDetails');
            userDetailsElement.innerHTML = `
                        <p><b>ID:</b> ${user.id}</p>
                        <p><b>Name:</b> ${user.name}</p>
                        <p><b>Username:</b> ${user.username}</p>
                        <p><b>Email:</b> ${user.email}</p>
                        <p><b>Address:</b> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                        <p><b>Geo:</b> Lat ${user.address.geo.lat}, Lng ${user.address.geo.lng}</p>
                        <p><b>Phone:</b> ${user.phone}</p>
                        <p><b>Website:</b> ${user.website}</p>
                        <p><b>Company:</b> ${user.company.name}</p>
                    `;
        })
}


function fetchUserPosts() {

    let urlParams = new URLSearchParams(window.location.search);
    let userId = urlParams.get('id');

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            let postTitlesElement = document.getElementById('postTitles');
            postTitlesElement.innerHTML = '';
            posts.forEach(post => {
                let postBlock = document.createElement('div');
                postBlock.classList.add('post-block');
                postBlock.innerHTML = `
                            <p class="post-title">${post.title}</p>
                            <a class="post-link" href="post-details.html?postId=${post.id}">View Post Details</a>
                        `;
                postTitlesElement.appendChild(postBlock);
            });
        })

}

document.getElementById('postButton').addEventListener('click', fetchUserPosts);

fetchUserDetails();