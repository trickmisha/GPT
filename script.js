const cardsContainer = document.querySelector('.container');
const dislikeBtn = document.getElementById('dislike-btn');
const likeBtn = document.getElementById('like-btn');
const profiles = [
    { 
        imageUrl: 'https://placeimg.com/300/300/people',
        name: 'John Doe',
        age: 28,
        interests: 'Hiking, Photography',
        city: 'New York',
        country: 'USA'
    },
    { 
        imageUrl: 'https://placeimg.com/300/300/animals',
        name: 'Alice Smith',
        age: 25,
        interests: 'Cooking, Yoga',
        city: 'London',
        country: 'UK'
    },
    { 
        imageUrl: 'https://placeimg.com/300/300/arch',
        name: 'Michael Johnson',
        age: 31,
        interests: 'Traveling, Reading',
        city: 'Paris',
        country: 'France'
    },
    { 
        imageUrl: 'https://placeimg.com/300/300/nature',
        name: 'Emily Brown',
        age: 29,
        interests: 'Painting, Cycling',
        city: 'Berlin',
        country: 'Germany'
    },
];

let currentIndex = 0;

updateCard();

// Add event listeners to buttons
dislikeBtn.addEventListener('click', handleDislike);
likeBtn.addEventListener('click', handleLike);

// Function to update card with new profile
function updateCard() {
    const currentProfile = profiles[currentIndex];
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<img src="${currentProfile.imageUrl}" alt="${currentProfile.name}">
                      <div class="overlay">
                          <div class="profile-info">
                              <h2>${currentProfile.name}, ${currentProfile.age}</h2>
                              <p><strong>Interests:</strong> ${currentProfile.interests}</p>
                              <p><strong>Location:</strong> ${currentProfile.city}, ${currentProfile.country}</p>
                          </div>
                      </div>`;
    cardsContainer.innerHTML = '';
    cardsContainer.appendChild(card);
}

// Function to handle dislike button click
function handleDislike() {
    currentIndex = (currentIndex + 1) % profiles.length;
    updateCard();
}

// Function to handle like button click
function handleLike() {
    currentIndex = (currentIndex + 1) % profiles.length;
    updateCard();
}
