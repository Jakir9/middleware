import express from "express";
const app = express();
const port = 3001;

//serve static files (built on middleware)
app.use(express.static("public"));

//Parsing json body
app.use(express.json());

// Custom middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.path}`);
  //next(); // Don't forget to call next()!
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

//Post route handler that returns the json body back to the client
app.post("/", (req, res) => {
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
