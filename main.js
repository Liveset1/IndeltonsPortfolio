const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

/* 
    Incase you are using mongodb atlas database uncomment below line
    and replace "mongoAtlasUri" with your mongodb atlas uri.
*/
// mongoose.connect( mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true})

app.get('/', (req, res) => {
  res.redirect("/home")
});

app.get('/home', (req, res) => {
    res.sendFile("index.html", {
        root: path.join(__dirname, "./")
    });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});