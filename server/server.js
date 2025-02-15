const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
mongoose
  .connect("mongodb+srv://trucpro1282003:9five7@facebook.k35yp.mongodb.net/")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],

    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
