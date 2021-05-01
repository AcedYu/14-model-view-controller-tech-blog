# 14-model-view-controller-tech-blog
This assignment was assigned by the U.C. Berkeley Extension Full-time Full Stack Flex Boot Camp.
This is assigment 14 for the program. In this assignment I was tasked to create a CMS-style blog website. Developerse can publish their blog posts and comment on other developers' posts as well. This program is deployed on Heroku and will follow the MVC paradigm in its architectural structure. It uses Handlebars.js as the templating langauge, Sequelize as the ORM, and the express-session npm package for authentication.

It includes notable features such as:
- A homepage that contains existing blog posts and a navigation bar
- A navigation bar with links
  - homepage
  - dashboard
  - sign in (only when a user isn't logged in)
  - sign out (only when a user is logged in)
- A Sign in page that contains sign in and sign up forms
- Different site functionality based on whether or not a user is signed in
- Clickable posts that link to a new page that contains:
  - post title
  - contents
  - post's creator
  - date created
  - form to add a comment
- A dashboard page that contains the logged in user's blog posts and the ability to perform additional tasks.
  - create new blog post
  - update existing blog post
  - delete existing blog post
- Automatic sign out when idle for too long
- Data saved within a mySQL server
  - users and credentials
  - blog posts and details

Due: Monday, May 3, 2021 11:59 PM

## Getting Started

This application is already deployed, however these instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Node.js is required.

### Installing
To install the necessary dependencies, run the npm installation command
```
npm install
```
Before launching the program you should also run the data seeding command
```
npm run seed
```

### Testing
There are no tests in this application.

### Usage
You can run the program on the command line with the following command:
```
npm start
```


## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/docs/)
* [mySQL](https://dev.mysql.com/doc/)

## Deployed Link

* [See Live Site](ADD HEROKU APP URL HERE)

## Authors
AcedYu
- [Link to Github](https://github.com/AcedYu)
- [Link to LinkedIn](https://www.linkedin.com/in/alex-yu-3712811b9/)