# mountain-adventures
React project for SoftUni

For this project I have used SoftUni practice server as a backend and HTML & CSS template for the pages.

# User interface
The idea of the application is logged in users to be able to share their adventures in the mountains.

## Before Login

### Home
When the user navigates to the home page he will see a navigation bar at the top right with Home, Catalog, Login and Register links. Further there is a section called "Latest stories" which shows the last three shared stories.

### Catalog
Navigating to the Catalog page the user can see all the stories with their pictures and some brief info about them. There is a button "See more" for every story which leads to the Details page of the story. There is a search field as well.

### Details
Here in a table on the right is the technical information about the adventure. In the right side is a picture, description and comment area. Not logged in users can only see the comments but can't leave one.

### Login
Everyone can register in the app with username, email and password and after that can login with email and password.

## Logged in users

### Home
The navigation bar now has Home, Catalog, Create, Profile and Logout links.

### Create
Users can create a story filling all the fields in the form.

### Profile
When the user has some stories he can see them in the Profile page. There and in the Catalog page there is an Edit button for the users' stories.

### Edit
In the Edit page of a story, the user will also find the Delete button.

### Details
Now the Comments section under each story is available and users can interact to each other.

### Comments
Every user can edit or delete his comments.

# About the code

## In order to start the application loacaly
1. you need node.js - v.16 or above installed
2. clone this repository
3. type 'npm install' in the project directory
4. type 'node server.js' in the ./server directory
5. type 'npm start' in the project directory

## Architecture

1. In the components folder are folders for each component and the CSS file for it.
2. Constants are loacated in the so called folder. There is paths.js - holds all the paths for the http requests that the app does.
3. Contexts folder contains the AuthContext.js which holds the authentication data for the user's session.
4. Custom hooks are located in the hooks folder.
5. There is services folder with .js files managing the http requests.
6. In the utils folder are .js files executing the http requests and validating the data from create and edit forms.

## Data managing

1. The App.js holds all the stories and keeps their state. 
2. Home, Catalog and Profile are receiving the stories via props from App.js.
3. Create and Edit components receive functions via props which App.js uses to manage the new or modified data.
4. Details component makes a request to get data for one story.
5. The authentication data is kept in a context provider and is available everywhere in the app.
