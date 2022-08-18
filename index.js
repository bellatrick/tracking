// const express = require("express");
// const app = express();
// const dotenv = require("dotenv");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const authRoute = require("./routes/auth");
// const userRoute = require("./routes/user");
// const trackingRoute = require("./routes/tracking");
// const logRoute = require("./routes/log");
// const { MONGODB } = require("./config.js");

// dotenv.config();
// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect(MONGODB, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then(console.log("Connected to MongoDB"))
//   .catch((err) => console.log(err));

// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/tracking", trackingRoute);
// app.use("/api/log", logRoute);

// app.listen(process.env.PORT || 5000, () => {
//   console.log("Backend is running.");
// });
