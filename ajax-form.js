document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contact-form");
  console.log(form); // Check if the form variable is assigned correctly

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      const formData = new FormData(form);

      fetch("/send-email", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          displayNotification(data.message, "success");
          form.reset();
        })
        .catch((error) => {
          displayNotification("Error occurred while sending email", "error");
          console.error(error);
        });
    });
  } else {
    console.log("Form element not found"); // Output an error message if the form element is not found
  }
});

function displayNotification(message, type) {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;

  const formSection = document.querySelector(".form-section");
  formSection.appendChild(notification);

  // Automatically remove the notification after 3 seconds
  setTimeout(() => {
    formSection.removeChild(notification);
  }, 3000);
}
