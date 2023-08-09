document.addEventListener("DOMContentLoaded", () => {
  const checkFormAvailability = setInterval(() => {
    const form = document.querySelector("#contact-form");
    if (form) {
      clearInterval(checkFormAvailability);
      initializeForm(form);
    }
  }, 100); // Check every 100 milliseconds for the form's availability

  const initializeForm = (form) => {
    const notification = document.querySelector("#formNotification");
    const loading = document.querySelector("#loading");

    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent the default form submission behavior

      // Display the loading element
      loading.style.display = "block";

      // Perform the form submission using Fetch API or XMLHttpRequest
      fetch("/send-email", {
        method: "POST",
        body: new FormData(form),
      })
        .then((response) => response.json()) // Parse response as JSON
        .then((data) => {
          if (data.error) {
            // Display error notification near the form
            showNotification(data.error, "error");
          } else if (data.message) {
            // Display success notification near the form
            showNotification(data.message, "success");

            // Clear the form fields if needed
            form.reset();
          }
        })
        .catch((error) => {
          // Display a generic error message near the form
          showNotification("An unexpected error occurred", "error");
          console.log(error);
        })
        .finally(() => {
          // Hide the loading element
          loading.style.display = "none";
        });
    });

    function showNotification(message, type) {
      notification.textContent = message;
      notification.classList.add(type, "show");

      setTimeout(() => {
        notification.classList.remove("show");
      }, 3000); // Adjust the duration (in milliseconds) as needed
    }
  };
});
