const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');

const port = 3000

app.use(express.json())
app.use(cors());

mongoose.connect('mongodb://mongoadmin:mongoadmin@34.69.234.16:27017/dummyDb?authSource=admin&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Successfully connected to mongodb instance!');
});

var dprSchema = new mongoose.Schema({
    "lf": { "date": { "year": Number, "month": Number, "day": Number }, "pr": Number },
    "hec": { "date": { "year": Number, "month": Number, "day": Number }, "pr": Number },
    "sample": { "date": { "year": Number, "month": Number, "day": Number }, "wc": Number, "bup": Number, "lp": Number },
    "nbup": { "date": { "year": Number, "month": Number, "day": Number }, "action": String, "remark": String },
    "ceasure": { "date": { "year": Number, "month": Number, "day": Number }, "reason": String, "remark": String },
    "testData": { "date": { "year": Number, "month": Number, "day": Number }, "liqRate": Number, "wc": Number, "oil": Number, "water": Number },
    "workOver": { "date": { "year": Number, "month": Number, "day": Number }, "remark": String }
});

var dpr = mongoose.model('DPR', dprSchema);

app.get('/', function (req, res) {
    console.log('GET request received at /');
    res.send({ 'statusMessage': 'Service is up and running!' });
})

app.post('/save', function (req, res) {
    console.log('POST request received at /save');
    // console.log(JSON.stringify(req.body));
    var dprEntry = new dpr(req.body);
    dprEntry.save(function (err, fluffy) {
        if (err)
            return console.error(err);
    });
    res.send({ 'statusMessage': 'POST request received at /save' });
})

app.listen(port, () => console.log(`Database Service running at http://localhost:${port}`));
