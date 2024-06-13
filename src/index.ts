import express from 'express';

const app = express();

app.get("/", (req, res) => {
    return res.json("hi")
})

app.listen(3000, () => {
    console.log("start app")
})