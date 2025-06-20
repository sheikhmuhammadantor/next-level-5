import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

// let server: Server;
const PORT = 5000;

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://shakeantor551:BtvPeJxptrfcHbeV@nextlevel5.8luvigt.mongodb.net/mongoose-note-app?retryWrites=true&w=majority&appName=NextLevel5`
    );
    console.log("Connected to MongoDB Using Mongoose!!");

    let server: Server = app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
