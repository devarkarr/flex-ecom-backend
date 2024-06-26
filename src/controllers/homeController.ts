import asyncHandler from "express-async-handler";
import { Request, Response } from "express";

const home = asyncHandler(async (req: Request, res: Response) => {
  res.json("home page");
});

export { home };
