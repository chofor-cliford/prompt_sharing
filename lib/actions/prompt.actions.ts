"use server";

import { parseStringify } from "@/utils/utils";
import { connectToDatabase } from "../../utils/db";
import Prompt from "../models/prompt.model";
import {
  CreatePromptProps,
  DeletePromptProps,
  GetPromptByIdProps,
  UpdatePromptProps,
} from "@/types";

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

export const getPromptById = async ({userId}: GetPromptByIdProps) => {
  try {
    connectToDatabase();

    // Get all prompts and populate the creator field
    const prompts = await Prompt.find({ creator: userId }).populate("creator");

    return parseStringify(prompts);
  } catch (error: any) {
    throw new Error(`Failed to get prompts: ${error.message}`);
  }
};

export const getPrompt = async ({ userId }: GetPromptByIdProps) => {
  try {
    connectToDatabase();

    // Get a prompt and populate the creator field
    const prompt = await Prompt.findById(userId).populate("creator");

    if (!prompt) {
      throw new Error("Prompt not found");
    }

    return parseStringify(prompt);
  } catch (error: any) {
    throw new Error(`Failed to get prompts: ${error.message}`);
  }
};

export const updatePrompt = async ({
  tag,
  prompt,
  userId,
}: UpdatePromptProps) => {
  try {
    connectToDatabase();

    // Find existing prompt
    const existingPrompt = await Prompt.findById(userId);

    if (!existingPrompt) {
      throw new Error("Prompt not found");
    }

    // Update prompt
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return parseStringify(existingPrompt);
  } catch (error: any) {
    throw new Error(`Failed to update the prompts: ${error.message}`);
  }
};

export const deletePrompt = async ({userId}: DeletePromptProps) => {
  try {
    connectToDatabase();

    // Find existing prompt and delete it
    await Prompt.findByIdAndDelete(userId);

    return parseStringify({ message: "Prompt deleted successfully" });
  } catch (error: any) {
    throw new Error(`Failed to delete the prompts: ${error.message}`);
  }
};
