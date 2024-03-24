// something i feel i can finally work with/ little bit more used to... JS for wind and temp
function calculateWindChill(temperature, windSpeed) {
  
    if (temperature <= 50 && windSpeed > 3.0) {
   
        var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);


        windChill = Math.round(windChill * 100) / 100;

        // Display the wind chill value on the page
        document.getElementById('windChill').textContent = windChill + " °F";
    } else {
      
        document.getElementById('windChill').textContent = "N/A";
    }
}


var temperature = parseFloat(document.getElementById('temperature').textContent);
var windSpeed = parseFloat(document.getElementById('windSpeed').textContent);

// Call the calculateWindChill function with the extracted values
calculateWindChill(temperature, windSpeed);




document.addEventListener('DOMContentLoaded', function() {

    const today = new Date();
    const dayOfWeek = today.getDay(); // 0-6
  
    if(dayOfWeek >= 1 && dayOfWeek <= 3) { 
      document.getElementById('banner').style.display = 'block';
    } else {
      document.getElementById('banner').style.display = 'none'; 
    }
  
    document.getElementById('closeBtn').addEventListener('click', function() {
      document.getElementById('banner').style.display = 'none';
    });
  
  });