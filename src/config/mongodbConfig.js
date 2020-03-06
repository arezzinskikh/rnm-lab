import mongoose from "mongoose";

class Connection {
  constructor() {
    const url =
      process.env.MONGODB_URI ||
      `mongodb+srv://nodejs_app:q1a1z1w2@nodejs0-0xmxj.gcp.mongodb.net/test?retryWrites=true&w=majority`;
    console.log("Establish new connection with url", url);
    mongoose.Promise = global.Promise;
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useUnifiedTopology", true);
    mongoose.connect(url);
  }
}

export default new Connection();
