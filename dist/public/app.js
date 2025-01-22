document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const response = await fetch("/.netlify/functions/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (response.ok) {
    alert(data.message);
    // Redirect to members page
    window.location.href = "/members.html";
  } else {
    alert(data);
  }
});
