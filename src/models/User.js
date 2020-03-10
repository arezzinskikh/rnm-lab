import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import slugify from "slugify";

class User {
  initSchema() {
    const schema = new Schema(
      {
        id: {
          type: Number,
          required: true
        },
        first_name: String,
        subtitle: {
          type: String,
          required: true
        },
        last_name: String,
        subtitle: {
          type: String,
          required: true
        },
        title: {
          type: String,
          required: false
        },
        age: {
          type: Number,
          required: true
        }
      },
      { timestamps: true }
    );

    schema.plugin(uniqueValidator);
    mongoose.model("users", schema, "NodeJSCollection");
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("users");
  }
}

export default User;
