/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Osondu Benjamin Ihentuge';
const currentYear = new Date(); 
let favoriteFood = ['Potatoes', 'Steak', 'Rice', 'Chicken', 'Pasta']; 

const folderPath = 'images/';
const fileName = 'my_profile_picture.jpg';

const profilePicture = folderPath + fileName;

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img[src*="my_profile_picture.jpg"]');

/* Step 4 - Adding Content */
nameElement.innerHTML = `${fullName}`;
yearElement.textContent = currentYear.getFullYear();
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);
foodElement.innerHTML += `<br>${favoriteFood}`;


/* Step 5 - Array */

const newFavoriteFood = 'Pizza';
favoriteFood.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;