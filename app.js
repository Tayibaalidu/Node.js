const express = require('express');
const app = express();
const bodyparsar = require('body-parser');
app.use(bodyparsar.json());

const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send('Joe Doe');

});
app.post("/user", (req, res) => {
    let body = req.body
    res.send({ name: "John" });
});

app.listen(port, () => {
    console.log('server is running on part 300');



});