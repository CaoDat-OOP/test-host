document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform your authentication logic here
    // For example, you can check if the username and password are correct
    // and then redirect the user to a different page or show an error message
    // For the sake of this example, let's just log the input values to the console
    console.log("Username:", username);
    console.log("Password:", password);
});

document.getElementById("hack").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log("================================")
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("M đã bị hack")
})