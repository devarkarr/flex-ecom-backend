import express from "express";
import env from "dotenv";
import router from "./routes/route";
//server setup
const app = express();
//env setup
env.config();
//server port
const PORT = process.env.PORT || 3000;

//routes
app.use(router);
//server listen
app.listen(PORT, () => {
  console.log("====================================");
  console.log(`server is running on http://localhost:${PORT}`);
  console.log("====================================");
});
