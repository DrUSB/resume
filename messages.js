
var db = require('./database');

exports.add = function (conData, req, callback) {

    db.connect(conData, function (err, data) {
         //when done check for any error
        if (err) {
            callback(err);
            return;
        }


        var message = {
            formName: req.body['formName'],
            formEmail: req.body['formEmail'],
            //url: req.body['url'],
            formMessage: req.body['formMessage']
        };
        console.log(message);
        data.query('INSERT INTO Messages SET ?', message, (err, result) =>{
            //return control to the calling module
            callback(err, message);
        });

    });


};