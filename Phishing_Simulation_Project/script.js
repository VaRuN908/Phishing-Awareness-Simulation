document.addEventListener('DOMContentLoaded', function() {
    
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual submission

            // SIMULATION: In a real attack, the attacker would capture the values here.
            // const email = document.getElementById('email').value;
            // const password = document.getElementById('password').value;
            // console.log(`[SIMULATED CAPTURE] Email: ${email}, Password: ${password}`);

            // Optional: Show a quick alert before redirecting (for demonstration)
            // alert("Simulation: Credentials 'captured'. Redirecting to debrief...");

            // Redirect to the educational debrief page
            window.location.href = 'debrief.html';
        });
    }

});
