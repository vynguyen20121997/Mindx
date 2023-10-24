import { config } from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";
const url =
  //   "<mongodb+srv://nguyentuongvy20121997:WLLZp6hdLkbgA99K@movieproject.mo3yivl.mongodb.net/>";
  "mongodb+srv://nguyentuongvy20121997:WLLZp6hdLkbgA99K@cluster0.ia5o7b6.mongodb.net/";

class DatabaseService {
  constructor() {
    this.client = new MongoClient(url);
    this.db = this.client.db("users");
  }

  async connect() {
    try {
      await this.db.command({ ping: 1 });
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }
  get users() {
    return this.db.collection("users");
  }
  get movies() {
    return this.db.collection("movies");
  }
  get genres() {
    return this.db.collection("genres");
  }
  get actors() {
    return this.db.collection("actors");
  }
}

const databaseService = new DatabaseService();
export default databaseService;
