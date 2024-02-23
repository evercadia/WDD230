
let pageVisits = localStorage.getItem('pageVisits') || 0;
pageVisits = parseInt(pageVisits) + 1;
localStorage.setItem('pageVisits', pageVisits);

document.getElementById('pageVisits').textContent = pageVisits;
