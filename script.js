fetch('http://localhost:3000/api/welcome')
    .then(response => response.json())
    .then(data => {
        const header = document.getElementById('header');
        header.textContent = data.message;
    })
    .catch(error => console.error('Error:', error));
