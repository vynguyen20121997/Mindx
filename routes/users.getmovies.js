import { Router } from "express";
import databaseService from "../services/database.service.js";
const movieRoute = Router();

movieRoute.get("/movies", async (req, res) => {
  const movies = await databaseService.movies.find({}).toArray();
  res.json(movies);
});
movieRoute.get("/movies/popular", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  const skip = (page - 1) * pageSize;

  const movies = await databaseService.movies
    .find({})
    .skip(skip)
    .limit(pageSize)
    .toArray();

  res.json(movies);
});
export default movieRoute;
