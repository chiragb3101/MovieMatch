// Basic client-side handling for login and signup forms

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = loginForm.email.value;
            const password = loginForm.password.value;
            alert(`Login with ${email}`); // placeholder
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = signupForm.name.value;
            const email = signupForm.email.value;
            const password = signupForm.password.value;
            alert(`Signup ${name} with ${email}`); // placeholder
        });
    }

    // Initialize Google sign-in if client ID is provided
    const clientId = document.getElementById('g_id_onload')?.dataset.client_id;
    if (clientId && clientId !== 'YOUR_GOOGLE_CLIENT_ID') {
        google.accounts.id.initialize({
            client_id: clientId,
            callback: (response) => {
                console.log('Google token', response.credential);
                alert('Google sign-in successful');
            }
        });
        google.accounts.id.renderButton(
            document.querySelector('.g_id_signin'),
            { theme: 'outline', size: 'large' }
        );
    }
});
