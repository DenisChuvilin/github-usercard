/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// axios.get('https://api.github.com/users/DenisChuvilin')
//   .then(response => console.log(response.data))
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


/* Step 3: Create a function that accepts a single object as its only argument,
Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
<img src={image url of user} />
<div class="card-info">
<h3 class="name">{users name}</h3>
<p class="username">{users user name}</p>
<p>Location: {users location}</p>
<p>Profile:  
<a href={address to users github page}>{address to users github page}</a>
</p>
<p>Followers: {users followers count}</p>
<p>Following: {users following count}</p>
<p>Bio: {users bio}</p>
</div>
</div>

*/
const followersArray = ['DenisChuvilin', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
// creating CardCreator function
const CardCreator = (inputName) => {


  //creating elements
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const pagelink = document.createElement('a')
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // append elements
  card.append(img, cardInfo);
  cardInfo.append(name, username, location, profile, followers, following, bio);
  profile.append(pagelink)

  // add classes to elements 
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  //add attributes
  pagelink.href = inputName.url
  img.src = inputName.avatar_url;
 
  // add textcontent
  name.textContent = inputName.name;
  location.textContent = inputName.location;
  followers.textContent = 'Followers: ' + inputName.followers;
  following.textContent = 'Following: ' + inputName.following;
  bio.textContent = inputName.bio
  username.textContent = inputName.login
  pagelink.textContent = inputName.html_url

  return card;
};
// capture cards component
cards = document.querySelector('.cards')


followersArray.forEach(person => axios.get(`https://api.github.com/users/${person}`)
  .then(response => cards.append(CardCreator(response.data)))
);


/*
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // Both requests are now complete
  }));
*/

function getFollowers(userName){
return axios.get(`https://api.github.com/users/${userName}/followers`)
  .then(response => {return response.data})
}

// function postFollowers(follower){
//  return  axios.get(`https://api.github.com/users/${follower}`)
// }

// axios.all([getFollowers('DenisChuvilin'),postFollowers()])
// .then(axios.spread(function (userName,followerName){
// userName.data.forEach(follower => { postFollowers(follower)
//   // followerName = follower.login
//   console.log(followerName)
// }
// )}))

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
