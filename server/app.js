const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const simpleGit = require('simple-git')();
const shellJs = require('shelljs');
const simpleGitPromise = require('simple-git/promise')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/create/:title&:content", function(req, res) {
    let title = req.params.title
    let content = req.params.content

    console.log(title)
    console.log(content)
});

const server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});