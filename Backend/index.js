const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { dbconnection } = require("../Backend/database/dbConnection");
const messagerouter = require("../Backend/router/MessageRouter");
const userRouter = require("../Backend/router/UserRouter");
const appointmentrouter = require("../Backend/router/AppointmentRouter");

require("dotenv").config();

const app = express();


PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));



app.use("/api/v1/message", messagerouter);
app.use("/api/v1/appointment", appointmentrouter);
app.use("/api/v1/user", userRouter);

dbconnection();

app.listen(PORT, () => {
  console.log(`Server Listen at Port :${PORT}`);
});
