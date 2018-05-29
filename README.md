# BenAndJerry
Build [semantic templates](https://www.martin-brennan.com/semantic-templates-with-mustache-js-and-handlebars-js/) with [Handlebars](https://learn.co/lessons/node-js-intro-to-handlebars).  Semantic Javascript templates are used as a replacement to constructing long strings of HTML within your Javascript logic.  The way we send files from the back end to the front end is different than with Express.

![](hbs.png)    &    ![](node.png)

# To install
Git Clone the repository

Navigate to the folder where the repository exists

Run the command $ npm init

Run the command $ npm install express --save

Run the command $ npm install express-handlebars --save

Run the command $ touch .gitignore, and store node_modules in it.

Then run the command $ js server.js

Browser start with search for localhost:3000 

# Built With
* [HandleBars](https://handlebarsjs.com/) Anything between mustaches like this: {{}} will take a property of a Javascript object and render it straight into the template. (We could use {{{ }}} if we were absolutely certain that the internal part wouldn't execute any code that could be harmful for our servers or our users — use triple-curly-braces sparingly.)