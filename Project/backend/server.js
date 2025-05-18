const express = require("express");
const app = express();
const port = 8000;
const connectDB = require("./db/dbconn");
const User = require("./db/user");
const cors = require("cors");
app.get("/", (req, res) => {
  res.send("Hello World");
});
//passing the above function to the variable connectDB
connectDB();
//middileware for paesing json
app.use(express.json());
//enabling cors
app.use(cors());
//Registration API
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = new User({
      Username: username,
      password,
    });
    await user.save();
    res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error\n Registration failed" });
  }
});

//Login API
app.post("/login", async (req, res) => {
  try {
    const { Username, password } = req.body;
    // Check if the user exists
    const user = await User.findOne({ Username });
    // // Simple validation check
    if (!user) {
      return res.status(401).json({ error: "Invalid Username or password" });
    }
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid Username or password" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error\n Login failed" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
