import { Router } from "express";
import databaseService from "../services/database.service.js";
const genreRoute = Router();

genreRoute.get("/movies", async (req, res) => {
  const movies = await databaseService.movies.find({}).toArray();
  res.json(movies);
});
export default genreRoute;
