document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function () {
        mainNav.classList.toggle('show');
    });

    // Dynamically set the current year
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Dynamically set the last modified date
    document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;
    
    // Responsive hamburger menu
    const hamburgerIcon = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('nav ul'); // Change variable name here

    hamburgerIcon.addEventListener('click', function () {
        mobileNav.classList.toggle('show'); // Change variable name here
    });

    // Close the hamburger menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.matches('.menu-toggle') && !event.target.closest('nav')) {
            mobileNav.classList.remove('show'); // Change variable name here
        }
    });
});

// Add this code to set up the Google Maps iframe
function initMap() {
    const mapContainer = document.getElementById('map-container');
    const mapOptions = {
        center: { lat: 36.75799785934445, lng: -76.21831802727695 },
        zoom: 15,
    };
    const map = new google.maps.Map(mapContainer, mapOptions);
}

// Load the Google Maps API
function loadGoogleMapsScript() {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
}

// Call the function to load the Google Maps script
loadGoogleMapsScript();
