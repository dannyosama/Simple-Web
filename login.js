document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');
    

    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent default form submission

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        errorMessage.textContent = ''; // Clear previous error messages

        if (!username || !password) {
            errorMessage.textContent = 'Please enter both username and password.';
            return;
        }

        try {
            // Replace with your actual API endpoint on actual environment
            // const apiEndpoint = 'http://localhost:3000/login'; // This line connect to local server
            const apiEndpoint = '/.netlify/functions/login'; // This line connect to live Netlify

            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Login successful
                console.log('Login successful:', data);
                // alert('Login successful! Redirecting to home page.');
                window.location.href = 'index.html'; // Redirect to home page
            } else {
                // Login failed
                console.error('Login failed:', data);
                errorMessage.textContent = data.message || 'Login failed. Please check your credentials.';
            }
        } catch (error) {
            console.error('Error during login:', error);
            errorMessage.textContent = 'An error occurred. Please try again later.';
        }
    });
});

httpRequest.open('GET', 'https://68a96c5eb115e67576eb1b8e.mockapi.io/api/loginv1/', true)
httpRequest.send()
