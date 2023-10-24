import { Router } from "express";
import databaseService from "../services/database.service.js";
const postRoute = Router();

postRoute.get("/movies", async (req, res) => {
  // access_token = req.headers.authorization;
  const movies = await databaseService.movies.find({}).toArray();
  // if (!access_token) return json({ error: "Access token is required" }), 401;
  // else
  res.json(movies);
});
export default postRoute;
