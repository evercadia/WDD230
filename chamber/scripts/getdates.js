document.addEventListener('DOMContentLoaded', function () {
    // Function to update date and time
    function updateDateTime() {
        const currentDate = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
        const formattedDateTime = currentDate.toLocaleDateString('en-US', options);

        // Update the element with id 'currentDateTime' (adjust the id as needed)
        document.getElementById('currentDateTime').textContent = formattedDateTime;
    }

    // Initial update
    updateDateTime();

    // Update date and time every second
    setInterval(updateDateTime, 1000);
});
