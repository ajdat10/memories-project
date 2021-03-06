import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from './routes/post.js'

dotenv.config();

const app = express();

app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 1010;
const CONNECTION_URL = process.env.ATLAS_URI;

mongoose
    .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message))
  
// mongoose.set("useFindAndModify", false); NOT WORKING
