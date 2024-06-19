"use server";

import { parseStringify } from "@/utils/utils";
import { connectToDatabase } from "../../utils/db";
import Prompt from "../models/prompt.model";
import { CreatePromptProps } from "@/types";

export const createNewPrompt = async ({
  prompt,
  userId,
  tag,
}: CreatePromptProps) => {
  try {
    connectToDatabase();

    const newPrompt = new Prompt({ creator: userId, prompt, tag });

    await newPrompt.save();

    return parseStringify(newPrompt);
  } catch (error: any) {
    throw new Error(`Failed to create prompt: ${error.message}`);
  }
};

export const getPrompts = async () => {
  try {
    connectToDatabase();

    // Get all prompts and populate the creator field
    const prompts = await Prompt.find({}).populate("creator");

    return parseStringify(prompts);
  } catch (error: any) {
    throw new Error(`Failed to get prompts: ${error.message}`);
  }
};