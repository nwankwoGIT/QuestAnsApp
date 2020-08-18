
Final Capstone
==============

My name is Anthony S Nwankwo and this is the Readme.md file for my GitHub 
It contains the latest update to files in my final project portfolio (capstone Project 05)

Overview/description of the project
===================================


The goal of this project is to build out a 3-tier Question and Answer App. The basic requirements are as follows:

- React for the front-end
- MongoDB or MySQL for the datastore back-end. I chose to use MongoDb to challenge myself. 
- Express/Framework for the middleware which handles users authentication and talks to both the datastore and the front-end 

I started this project with a view to making is as simple as possible. I chose to go with feathers.js (which is some interesting express framework that 
seems very powerful in the sense that it has an in-built authentication system. Feathers has extensive tutorials and it has three key technology areas:

- the app itself
- the services
- the hooks 

 To successfully run this package, follow these steps:
 

- download and install MongoDb Atlas and install it as a service (it must be running all the time without you having to start or stop the service)
- clone this repository to your local machine 
- It has frontend and back-end sections

After successful installation of the MongoDb Atlas, create a database named "feathersQuestionAnswerDb" and initialize it with "users" collection 
(Usually The product won't let you create a database without at one collection)

from the command line, 
navigate to the back-end folder "feathers-question-answer-chat" and run the command 'npm run dev'   (uses port 3030)

open a second command line:
navigate to the front-end folder "QuestAnsApp" and run the command 'npm start'  (uses port 3000)

goto localhost:3000 to see the program in action 


This app is pretty sophisticated in a small way: It handles these scenarios:

- you must be signed up in the database to be able to login
- So before you start, go to the 'sign up' tab and enter your credentials. The email and password are required !
- After entering your data, you will both be automatically registered and logged in
- The left-most side of the screen displays a sidebar list of all the logged-in users
- The next screen section is where all the questions will be displayed while the rightmost panel is where the answers will be placed
- At the bottom of the question panel, is an inbuilt-form for selecting the category of the question and entering the question text  
- Once a question is entered and button clicked, the question will appear in the scrollable panel above (uses flexbox CSS to make it happen)

The most challenging part is synchronizing the answers to the questions (a form appears to the right of every question). Each answer is tied to the question. Once the 
answer is posted, it will automatically appear on the right most panel - and at the same time the linking question is updated in the database with adding any new answer to the answers-array 
property of the question schema. (This was the hardest challenge I faced in this app. The second challenge was wiring up the authentication). 
 

The technologies used for the project are:

* Javascript, React (numerous packages), socket-io, feathers-express-with-authentication  (numerous packages)
* A mix of Functional and class React Components are used 
* HTML5
* Flexbox, tailwind  CSS
* semantic-ui Menu 



Ideas for future improvement
============================

-	Improve on adding notifications during sign-in and login  	
-	Migrate to database management systems (SQL vs NON-SQL used here) that are more query friendly   
-   I would improve by allowing users to delete their questions or answers



User Stories
============

-   As a user, I would like to be able to delete my questions or answers.  
-   As a user I would like to see the app hosted on heroku - Hosting compilation was successful but unfortunately my Mlab free account was refusing connection    
    
 
