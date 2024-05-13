// we need this to run on a local host context 
const express = require('express')
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname)))
app.listen(3000, () => {
    console.log(`server started on 3000`);
})