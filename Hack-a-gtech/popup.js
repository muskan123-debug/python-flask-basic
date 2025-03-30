document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("submitBtn").addEventListener("click", fetchUser);
});

function fetchUser() {
  let username = document.getElementById("username").value;
  if (!username) {
      alert("Please enter a name");
      return;
  }

  fetch(`http://127.0.0.1:5000/user/${username}`)
      .then(response => response.text())
      .then(data => {
          document.getElementById("response").innerText = data;
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("response").innerText = "Error fetching data";
      });
}
