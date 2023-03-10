# MEN Stack Template
A very basic template to get started with MongoDB, Express and Node (MEN).

## Getting Started
Following is a detailed guide on how to get started with this stack.
You can also download the repository and use it if you are already familiar.

### Before We Begin
You need to have the [Node.js](https://nodejs.org/en/) runtime installed on your machine. For Database, MongoDB should be installed, however [Atlas](https://www.mongodb.com/atlas/database) can be used as an easier alternative.<br />
[VSCode](https://code.visualstudio.com/download) is recommended for development but you can use any IDE you prefer.<br />
*Recommended Extensions: Prettier*<br />
It goes without saying, **basic knowledge of JavaScript is to be expected**.

## Express Server
### Setting Up The Project
Create and open a new folder for your project in VSCode.
Open the integrated terminal and initialize your project using
```
npm init -y
```
This command initializes a node.js project, -y is used to use the default settings.
If succesful, you should see `package.json` and `package-lock.json` appear in your folder.
<br />
<br />
The following command installs the express.js package which we will use for our backend
```
npm install express
```
### The index.js
Next, we need to create a new file, called `index.js` in the project folder with the following code:
```javascript
const express = require("express");
const app = express();

const PORT = 3769;

app.get("/", (request, response) => {
  response.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
```
The `require()` function is Node's way of importing external modules. <br />
Here, we import express, and initialize it as **app**. 
```javascript
const express = require("express");
const app = express();
```
Next, we define our first api method using the app.get() function. It takes two parameters, a route and a callback function.<br />
Whenever a `HTTP GET` request hits the server on the specified route, the callback function is executed. For now, we are just sending some text as reponse.
```javascript
app.get("/", (request, response) => {
  response.send("Server is running!");
});
```
Lastly, the app is set to listen for requests on our port, optionally, a callback function can be used to acknowledge that the server has indeed started.
```js
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
```
