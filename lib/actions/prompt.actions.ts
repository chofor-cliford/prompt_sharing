"use server";

import { parseStringify } from "@/utils/utils";
import { connectToDatabase } from "../../utils/db";
import Prompt from "../models/prompt.model";
import {
  CreatePromptProps,
  DeletePromptProps,
  GetAllPromptsProps,
  GetPromptByIdProps,
  GetPromptProps,
  PromptCardData,
  UpdatePromptProps,
} from "@/types";
import { FilterQuery } from "mongoose";

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

export const getPromptById = async ({
  userId,
  limit = 6,
  page = 1,
}: GetPromptByIdProps) => {
  try {
    connectToDatabase(); // Ensure the database connection is awaited.

    const skipAmount = (Number(page) - 1) * limit;

    // Query to count total prompts for the given userId
    const totalPrompts = await Prompt.countDocuments({ creator: userId });

    // Get prompts for the given userId and populate the creator field
    const prompts = await Prompt.find({ creator: userId })
      .sort({ updatedAt: -1 })
      .skip(skipAmount)
      .limit(limit)
      .populate("creator");

    // Calculate total pages based on total prompts and pagination limit
    const totalPages = Math.ceil(totalPrompts / limit);

    // Return prompts data along with total pages
    return {
      data: JSON.parse(JSON.stringify(prompts)),
      totalPages,
    };
  } catch (error: any) {
    throw new Error(`Failed to get prompts: ${error.message}`);
  }
};

export const getPrompt = async ({ userId }: GetPromptProps) => {
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

export const deletePrompt = async ({ userId }: DeletePromptProps) => {
  try {
    connectToDatabase();

    // Find existing prompt and delete it
    await Prompt.findByIdAndDelete(userId);

    return parseStringify({ message: "Prompt deleted successfully" });
  } catch (error: any) {
    throw new Error(`Failed to delete the prompts: ${error.message}`);
  }
};

export const getAllPrompts = async ({
  limit = 6,
  page = 1,
  searchQuery = "",
}: GetAllPromptsProps) => {
  try {
    connectToDatabase(); 

    const skipAmount = (Number(page) - 1) * limit;
    const regex = new RegExp(searchQuery, "i"); // Case-insensitive regular expression.
    const query: FilterQuery<PromptCardData> = {};

    if (searchQuery.trim() !== "") {
      query.$or = [
        { prompt: { $regex: regex } },
        { tag: { $regex: regex } },
        { "creator.username": { $regex: regex } },
        { "creator.email": { $regex: regex } },
      ];
    }

    // Create a query to fetch the prompts based on the search and sort criteria.
    const promptsQuery = Prompt.find(query)
      .sort({ updatedAt: -1 })
      .skip(skipAmount)
      .limit(limit)
      .populate({
        path: "creator",
        select: "username email image _id",
      });

    // Execute the query and return the results.
    const totalPrompts = await Prompt.countDocuments(query);
    const prompts = await promptsQuery.exec();
    const savedPrompts = await Prompt.countDocuments();

    return {
      data: JSON.parse(JSON.stringify(prompts)),
      totalPages: Math.ceil(totalPrompts / limit),
      savedPrompts,
    };
  } catch (error: any) {
    throw new Error(`Failed to fetch prompts: ${error.message}`);
  }
};
