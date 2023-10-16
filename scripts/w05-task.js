/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById('temples'); 
/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach((temple) => {
      
      const article = document.createElement('article');
  
      
      const templeNameElement = document.createElement('h3');
      templeNameElement.textContent = temple.templeName;
  
      
      const imgElement = document.createElement('img');
      imgElement.src = temple.imageUrl;
      imgElement.alt = temple.location;
  

      article.appendChild(templeNameElement);
      article.appendChild(imgElement);
  
     
      templesElement.appendChild(article);
    });
  };


/* async getTemples Function using fetch()*/

const getTemples = async () => {
    try {
      
      const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  
      
      if (response.ok) {
        
        templeList = await response.json();
        
        displayTemples(templeList);
      } else {
        console.error("Failed to fetch temple data.");
      }
    } catch (error) {
      console.error("An error occurred while fetching temple data:", error);
    }
  };
  
  
  getTemples();
/* reset Function */
const reset = () => {
    const templeCards = templesElement.querySelectorAll('article');
  
    templeCards.forEach((card) => {
      templesElement.removeChild(card);
    });
  };
  

/* sortBy Function */

const sortBy = (temples) => {
    reset();
  
    const filter = document.getElementById('sortBy').value;
  
    switch (filter) {
      case 'utah':
        displayTemples(temples.filter(temple => temple.location.includes('Utah')));
        break;
      case 'notutah':
        displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
        break;
      case 'older':
        displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case 'all':
      default:
       
        displayTemples(temples);
        break;
    }
  };
  
  // Call the sortBy function when the select element with ID 'sortBy' changes, typically within an event listener.

getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(templeList);
  });