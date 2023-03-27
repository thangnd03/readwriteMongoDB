const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 3000
const PhotoModel = require('./photomodel');
// app.get('/', (req, res) => {
// //   res.send('Hello World!')
//     res.sendFile(__dirname + '/index.html');
// })

mongoose.connect("mongodb+srv://nguyenthang070103:thanglodc123@cp17303_db.8hgo261.mongodb.net/?retryWrites=true&w=majority");

app.get('/', async (req, res) => {

  const data = {
    id: "2",
    albumId: "1",
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
  }

  const photo = new PhotoModel(data);
  photo.save();
  res.send(photo);
})

var hbs = require('express-handlebars');

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('.hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})