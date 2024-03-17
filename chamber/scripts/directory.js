window.onload = function () {
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const membersContainer = document.getElementById('members');
            data.members.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.classList.add('member-card');

                // Create and add image element
                const memberImage = document.createElement('img');
                memberImage.src = `images/${member.image}`;
                memberImage.alt = member.name; // Set alt attribute for accessibility
                memberCard.appendChild(memberImage);

                // Create and add member information
                const memberName = document.createElement('h2');
                memberName.textContent = member.name;
                memberCard.appendChild(memberName);

                const memberAddress = document.createElement('p');
                memberAddress.textContent = `Address: ${member.address}`;
                memberCard.appendChild(memberAddress);

                const memberPhone = document.createElement('p');
                memberPhone.textContent = `Phone: ${member.phone}`;
                memberCard.appendChild(memberPhone);

                const memberWebsite = document.createElement('a');
                memberWebsite.textContent = 'Website';
                memberWebsite.href = member.website;
                memberCard.appendChild(memberWebsite);

                membersContainer.appendChild(memberCard);
            });
        })
        .catch(error => console.error('Error fetching member data:', error));
};
// directory.js

// Function to toggle between grid and list view
function toggleView() {
    const membersContainer = document.getElementById('members');
    if (membersContainer.classList.contains('member-container')) {
        membersContainer.classList.remove('member-container');
        membersContainer.classList.add('list-view'); // Add a class for list view
    } else {
        membersContainer.classList.remove('list-view');
        membersContainer.classList.add('member-container'); // Add a class for grid view
    }
}
