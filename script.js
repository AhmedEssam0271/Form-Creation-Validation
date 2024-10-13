// Start with DOMContentLoaded Event:
// Wrap your entire script in a DOMContentLoaded event listener.
// This ensures your JavaScript runs after the entire HTML document has been loaded.

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  //form validation
  const form = document.getElementById("registration-form");

  const feedbackDiv = document.getElementById("form-feedback");

  const username = document.getElementById("username").value.trim();

  const email = document.getElementById("email").value.trim();

  const password = document.getElementById("password").value.trim();

  var isValid = true;

  var messages = [];

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate username
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
      return;
    }
    // Validate email
    if (email.includes("@" & ".") == false) {
      isValid = false;
      messages.push("Please enter a valid email address.");
      return;
    }

    // Validate password
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 6 characters long.");
      return;
    }

    // If all validations pass, submit the form
    if ((isValid = true)) {
      feedbackDiv.style.display = "block";
      feedbackDiv.style.color = "#28a745";
      feedbackDiv.textContent = "Registration successful!";
    }
    if ((isValid = false)) {
      feedbackDiv.style.display = "block";
      feedbackDiv.style.color = "#dc3545";
      feedbackDiv.innerHTML = messages.join(" <br> ");
    }

    form.submit();
  });
});
