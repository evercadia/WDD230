document.addEventListener("DOMContentLoaded", function () {
    // Check if localStorage is supported
    if (typeof localStorage !== "undefined") {
        // Get the last visit date from localStorage
        var lastVisit = localStorage.getItem("lastVisit");

        // Get the current date
        var currentDate = new Date();

        // If it's the first visit, display the welcome message
        if (!lastVisit) {
            displayMessage("Welcome! Let us know if you have any questions.");
        } else {
            // Calculate the time difference between visits
            var timeDifference = currentDate - new Date(lastVisit);
            var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            // Display appropriate message based on the time difference
            if (daysDifference === 1) {
                displayMessage("Back so soon! Awesome!");
            } else {
                displayMessage("You last visited " + daysDifference + " " + (daysDifference === 1 ? "day" : "days") + " ago.");
            }
        }

        // Update localStorage with the current visit date
        localStorage.setItem("lastVisit", currentDate.toString());
    }
});

function displayMessage(message) {
    // Replace this with your logic to display the message in the sidebar
    var sidebar = document.querySelector(".sidebar");
    var messageElement = document.createElement("p");
    messageElement.textContent = message;
    sidebar.appendChild(messageElement);
}
