const { Schema, model } = require("mongoose");

const PostSchema = new Schema(
  {
    title: String,
    description: String,
    img: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Post", PostSchema);
