const downloadBtn = document.getElementById("download-btn");
const statusDiv = document.getElementById("status");
const usersContainer = document.getElementById("users-container");

downloadBtn.addEventListener("click", () => {
  statusDiv.textContent = "loading...";

  fetch("https://randomuser.me/api/?results=5")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      statusDiv.textContent = "success!";
      usersContainer.innerHTML = "";

      data.results.forEach((user) => {
        const picture = user.picture.large;
        const cell = user.cell;
        const city = user.location.city;
        const postcode = user.location.postcode;
        const email = user.email;

        const card = document.createElement("div");
        card.className = "user-card";

        card.innerHTML = `
                    <img src="${picture}" alt="User photo">
                    <div class="user-info">
                        <p>Cell: ${cell}</p>
                        <p>City: ${city}</p>
                        <p>Postcode: ${postcode}</p>
                        <p>E-mail: ${email}</p>
                    </div>
                `;

        usersContainer.appendChild(card);
      });
    })
    .catch((error) => {
      statusDiv.textContent = "error!";
      console.error("Помилка отримання даних:", error);
    });
});
