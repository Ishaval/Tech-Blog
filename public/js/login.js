const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-input").value.trim();
  const password = document.querySelector("#password-input").value.trim();

  if (username && password) {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to log in. Please check your username and password.");
    }
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
