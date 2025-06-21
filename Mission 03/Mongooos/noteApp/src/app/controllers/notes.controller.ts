import express, { Request, Response } from "express";
import { Note } from "../models/notes.model";

export const notesRoutes = express.Router();

notesRoutes.get("/", async (req: Request, res: Response) => {
  const notes = await Note.find().populate("user");

  res.status(201).json({
    success: true,
    message: "Notes Find successfuly",
    notes,
  });
});

notesRoutes.post("/create-note", async (req: Request, res: Response) => {
  const body = req.body;

  //Approach - 1 of creating a data
  // const myNote = new Note({
  //     title: "Learning Node",
  //     // tags: {
  //     //     label: "database"
  //     // }
  // })
  // await myNote.save()

  //Approach - 2;
  const note = await Note.create(body);
  res.status(201).json({
    success: true,
    message: "Note created successfuly",
    note,
  });
});
