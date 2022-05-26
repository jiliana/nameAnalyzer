const app = require("express")();
const algorithm = require('./algorithm/algorithm.js'); 
const createDescription = require('./algorithm/createDescription.js'); 

const path = require('path');
const fs = require('fs');
const { type } = require("os");

app.use(require('express').json());


// GET request
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
})

app.get('/:birthyear/:name', (req, res) => {
    res.status(200).send(
        algorithm.analyzeName(
            req.params.name,
            req.params.birthyear
        )
    )
})

app.get('/analyze', (req, res) => {
    console.log(req.query.name);
    res.status(200).send(
        algorithm.analyzeName(
            req.query.name,
            req.query.birthyear
        )
    )
})



// POST
app.post('/', function(request, response){
    let name = request.body.name;   
    let birthyear = request.body.birthyear;   
    let description = request.body.description;   

    let dataJson = fs.readFileSync('./src/json/data.json');
    var myObject= JSON.parse(dataJson);

    let newData = {
        "name": name,
        "birthyear": birthyear,
        "description": description
    };

    console.log(newData);
    console.log(myObject);
    myObject["data"].push(newData)
    fs.writeFileSync('./src/json/data.json', JSON.stringify(myObject));

    response.send(request.body);
});




// Port 3000
app.listen(
    3000,
    () => console.log("the app is running on port 3000")
)