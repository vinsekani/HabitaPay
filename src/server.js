const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoutes = require("./routes/auth");
dotenv.config()
const app =express()
const PORT = 7000 || process.env.PORT

app.get("/", (req, res) =>{
    res.json({ message: "HabitaPay, Streamline your contacts with sekani only" });
})


// READING JSON
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// API ROUTES
app.use("/api/auth", authRoutes);

mongoose
.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server is running on http://localhost:${PORT} and DB is connected`
      );
    });
  })
  .catch((err) => console.log(err))