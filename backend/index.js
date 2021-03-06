const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const db = require("./db");
const collegeRoute = require("./routes/college");
const roomRoute = require("./routes/room");
const applicationRoute = require("./routes/application");
require("dotenv").config(); // Comment this when deploying to heroku

const app = express();
const port = process.env.NODE_DOCKER_PORT || 3000;

//test database connection
db.testConnectionRetry();

app.use(cors());
app.use(express.json());
app.use(express.static("public/images"));

app.get("/", (req, res) => res.json("home"));
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/college", collegeRoute);
app.use("/room", roomRoute);
app.use("/application", applicationRoute);

app.listen(port, () => console.log(`Server started at local http://localhost:${port}`));
