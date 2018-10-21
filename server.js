console.log("hello Node");

var express = require('express');

var app = express();

var port = 8080;

var message = require('./messages');

var swig = require('swig');

var bodyParser = require('body-parser');

var db = require('./database');
//kdh38$%@hd7$r sql login password


app.use(bodyParser.urlencoded({extended:false}));

const databaseData = {
    host: "sql2.freemysqlhosting.net",
    user: "sql2261938",
    password: "aN1%aP8!",
    database: "sql2261938"
};

app.post('/process_contact_submission', (req,res) => {
    //Extracting all data from req body
    var data = {
        formName:req.body.formName,
        formEmail:req.body.formEmail,
        //formTelephone:req.body.formTelephone,
        formMessage:req.body.formMessage,
        //formSubject:req.body.formSubject
    }
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(emailRegex.test(String(data.formEmail).toLowerCase())== false){
        data.formEmail = "invalid@email.com"
        console.log("incorrect email format recieved")
    };
    message.add(databaseData, req,(err, data) => {
        //when adding a user is done this code will run
        //if we got an error informs the client and set the proper response code
        if (err) {
            res.status(400);
            res.end("error:" + err);
            
        }
        //if no error let's set proper response code and have a party
        res.status(201);
        res.end("success");
    });
})

app.get('/', (req,res) =>{
    var template = swig.compileFile(__dirname + '/public/html/resume.html');
    var output = template({});
    res.send(output);
    app.use(express.static('public'));
})


app.get('/createTables', (req, res) => {
    db.createTables(databaseData, function (err, state) {
        if (err) {
            res.status(400);
            res.end("an error has occured:" + err);
            return;
        
        }
        res.status(200);
        res.end("tables were created successfully");
    
    });

})

 //start the server
 app.listen(port, err => {
    if (err) {
        console.error(err)
        
    } else {
        console.log(`App is ready on port ${port}`)
    
    }
})