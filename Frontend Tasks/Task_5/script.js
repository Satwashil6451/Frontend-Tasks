// script.js

const fetchDataButton = document.getElementById('fetchDataButton');
const postsContainer = document.getElementById('postsContainer');

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();

        postsContainer.innerHTML = '';

        posts.slice(0, 5).forEach(post => {
            const postElement = document.createElement('div');
          postElement.classList.add('post');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>`;
        postsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
        postsContainer.innerHTML = '<p>Error loading posts. Please try again later.</p>';
    }
}
fetchDataButton.addEventListener('click', fetchPosts);
