import { Router } from "express";
import databaseService from "../services/database.service.js";
const postRoute = Router();

postRoute.get("/movies", async (req, res) => {
  const movies = await databaseService.movies.find({}).toArray();
  res.json(movies);
});
export default postRoute;
