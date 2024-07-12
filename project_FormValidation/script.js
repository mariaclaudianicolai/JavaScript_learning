// Access element in HTML
const name = document.getElementById("name")
const password = document.getElementById("password")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

// Create event Listerner
form.addEventListener("submit", (e) => {
    let messages = []
    if (name.value === "" || name.value == null) { // == when comparing undefined and null
        messages.push("Name is required") // Add elements to array
    }

    if (password.length <= 6) {
        messages.push("Password must be longer than 6 characters")
    }

    if (password.length >= 20) {
        messages.push("Password must be less than 20 characters")
    }

    if (password.value === "password") {
        messages.push("Password cannot be password")
    }

    if (messages.length > 0) {
        e.preventDefault(); // Prevent default action, delete event
        errorElement.innerText = messages.join(", "); // assign text content
    }

})