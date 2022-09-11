const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

/* 
    Incase you are using mongodb atlas database uncomment below line
    and replace "mongoAtlasUri" with your mongodb atlas uri.
*/
// mongoose.connect( mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true})

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/matches/', (request, response) => {
    if (request.body.Data) {
        
    } else {
        response.status(400).send("Unable to retrieve Data!")
    }
})

app.get('/players', (request, response) => {
    response.send()
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});