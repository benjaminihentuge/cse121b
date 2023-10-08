/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};
myProfile.name = "Osondu Benjamin Ihentuge";
myProfile.photo = "images/my_profile_picture.jpg";
myProfile.favoriteFoods = [
  'Potatoes',
  'Rice',
  'Steak',
  'Chicken',
  'Pizza'
];
myProfile.hobbies = ['Travelling', 'Working Out', 'Coding'];
myProfile.placesLived = [];

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
      place: 'Sierra Leone',
      length: '2 year'
    },
    {
        place: 'Ghana',
        length: ' 1 month'
      },
  );

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
const photoImg = document.querySelector('#photo');
photoImg.src = myProfile.photo;
photoImg.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  })

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    let dl = document.querySelector('#places-lived');
    dl.appendChild(dt);
    dl.appendChild(dd);
  });

