const express = require("express");
const app = express();
const questionRoute = require("./routes/question.route.js");


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api", questionRoute);


app.get("/", (req, res) => {
  res.send("Questionare API Server is UP");
});

app.listen(5000, () => {
    console.log("Questionare Server is running on port 3000");
  });
