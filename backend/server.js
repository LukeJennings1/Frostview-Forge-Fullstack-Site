const express = require('express')

app = express();
app.listen(3001);

app.get('/', (req,res) => {

    res.send('hello there')

})