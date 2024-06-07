import express from "express"

const app = express();

// out server listing on port 3000
const port = 3000

// any data come with json we accept that
app.use(express.json())

let data = [];
let nextId = 1;

app.post('/', (req, res) => {
    const { name, age } = req.body;
    res.send({
        status: 200, data: {
            name: name,
            age: age
        },
        message: "Post data Succesfully"
    })
})

app.listen(port, () => {
    console.log("SERVER IS LIVE ON", port)
});
