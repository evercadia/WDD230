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