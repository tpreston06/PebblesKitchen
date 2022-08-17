git
# Pebbles Kitchen

**Project 2:** Create/style a Shop, that contains all 7 Restful Routes.
Must look like a store.
![Logo](https://i.imgur.com/S0H57yf.png)

# Routes

🔴 Mandatory To Pass:
MVP - Minimum Viable Product Your App Must Posess All 7 RESTful Routes

VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | '/' | Home Page |
GET | '/pebbles' | Index Page |
GET | '/pebbles/:categories/:id' | Show Page for Menu Items |
POST | '/pebbles/' | Post Menu Items onto show page |
GET | '/pebbles/:categories' | Index of categories |
GET | '/pebbles/:category/:id/edit' | Page to edit a selected Menu Item |
PUT | '/pebbles/:category/:id' | Edit/Update Menu Items|
DELETE | '/pebbles/:category/:id'| Delete a Menu Item |

# Index Page
The index page displays all products.
The images link to the product's show page and there is a link to add a new product.
 

# Show Page
The show page displays a product with:
* a link back to the products
* a link to edit the product (goes to the edit page),
* a delete button that deletes and the number of items remaining in stock

# New & Edit Page
These views render forms and submit to the appropriate routes.

# Redirects
* The create route redirects to the index
* The delete route redirects to the index
* The update route redirects back to the product's show page.
## Tech Stack

```bash
NodeJS, Express, MongoDB, Heroku, HTML, CSS
```


## Screenshots

![App Screenshot](https://i.imgur.com/rAoQ6Xi.png)
![App Screenshot](https://i.imgur.com/FaIWQ4R.png)


## Acknowledgements

 - Big Thanks go to Christina Takara, Dylan Comeau & Chudi Ibida for all the help and support!
 - Special Thanks go to Alex Ramirez for keeping me motivated throughout the project.
 - Honorable Mention goes to Tishana Trainor for fussing at me when needed.


## 🔗 Links
* [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/tpreston06)
* [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tiarious-p-36728579)
* [![heroku](https://img.shields.io/badge/PebblesKitchen-Heroku-ff69b4)](https://pebbles-kitchen.herokuapp.com/)
* [![youtube](https://img.shields.io/badge/YouTube-PebblesKitchen-red)](https://youtu.be/F7HYRaZIOXo)

