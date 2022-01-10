import mongoose from "mongoose";
import express, { Request, Response, NextFunction } from "express";

const databaseUrl =
  "mongodb+srv://lazyduck:@Khanhlieuuit17101@be-interview.hnssb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const server: express.Application = express();

server.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World !");
});

mongoose.connect(databaseUrl, {}, (error: mongoose.CallbackError) => {
  if (error) console.log("Connect to MongoDB successfully !");
  else {
    console.log("Failed to connect to MongoDB, Error: ");
    console.log(error);
  }
});

server.listen(5000, () => {
  console.log("Server is listening at port 5000 !");
});
