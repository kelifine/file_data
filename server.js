var express = require('express');
var app = express();
var path = require('path');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

app.use(express.static(path.join(__dirname, '/public')));


app.post('/file-upload', upload.single('file'), function (req, res, next) {
    console.log(req.file);
    var size = req.file.size;
    console.log(size);
    res.send({size});
});


app.listen(process.env.PORT||8080);