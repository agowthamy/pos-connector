const fetch = require('node-fetch');

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log('Fetched data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();