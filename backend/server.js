import dotenv from "dotenv";
import connectDb from "./db/db.js";
import app from "./app.js";

dotenv.config({ path: "./.env" });
connectDb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed: ", error.message);
  });
