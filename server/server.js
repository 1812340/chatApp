// import dotenv from "dotenv"
// dotenv.config();
// import express from "express";
// import cors from "cors"
// const app = express()
// app.use(cors({
//   origin: 'http://localhost:5173',
//   credentials: true
// }));

// import cookieParser from "cookie-parser";
// import { connectDB } from "./database/connection1.db.js";
// connectDB();

// app.use(express.json()) 
// app.use(cookieParser( ))
// const port=5000;

// // routers
// import userRouter from "./route/user.route.js"  
// import messageRouter from "./route/message.route.js"
// app.use("api/v1/user" ,userRouter)  
// app.use("api/v1/message", messageRouter)

// // middleware
// import { errorMiddleware } from "./middleware/error.middleware.js";
// app.use(errorMiddleware)

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

import dotenv from "dotenv"
dotenv.config();

import express from "express";
import { connectDB } from "./database/connection1.db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express()
connectDB();

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    credentials: true, 
  })
);
app.use(express.json());
app.use(cookieParser());  
const router = express.Router()

const PORT = 3000;
// const PORT = process.env.PORT || 5000;
// routes
import userRoute from "./route/user.route.js";
import messageRoute from "./route/message.route.js";  
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);


// middlwares
import { errorMiddleware } from "./middleware/error.middleware.js";
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`your server listening at port ${PORT}`);
});
