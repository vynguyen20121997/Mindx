import { Router } from "express";
const postRoute = Router();

postRoute.get("/posts", async (req, res) => {
  access_token = req.headers.get("Authorization");
  if (!access_token) return json({ error: "Access token is required" }), 401;
  else
    res.json({
      posts: [
        {
          name: "tiiifany",
          id: 1,
          content: "lefosiefoisjef",
        },
        {
          name: "joe",
          id: 2,
          content: "osefhosijef",
        },
      ],
    });
});
export default postRoute;
