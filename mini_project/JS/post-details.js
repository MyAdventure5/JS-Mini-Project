function fetchPostDetails() {
    let urlParametr = new URLSearchParams(window.location.search);
    let postId = urlParametr.get('postId');

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            let postDetailsElement = document.getElementById('postDetails');
            postDetailsElement.innerHTML = `
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    `;
        })
}

function fetchPostComments() {
    let urlParams = new URLSearchParams(window.location.search);
    let postId = urlParams.get('postId');

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => {
            let commentsContainer = document.getElementById('comments');
            commentsContainer.innerHTML = '';
            comments.forEach(comment => {
                let commentElement = document.createElement('div');
                commentElement.classList.add('comment');
                commentElement.innerHTML = `
                            <p class="comment-name">${comment.name}</p>
                            <p>${comment.body}</p>
                        `;
                commentsContainer.appendChild(commentElement);
            });
        })
}

fetchPostDetails();
fetchPostComments();