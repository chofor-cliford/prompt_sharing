import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User", // This is a one-to-many relationship
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required!"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required!"],
  },
});

const Prompt = models?.Prompt || model("Prompt", PromptSchema);

export default Prompt;
