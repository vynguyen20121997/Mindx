import { signToken } from "../component/services.js";
import databaseService from "./database.service.js";

class UsersService {
  signAccessToken(user_id) {
    return signToken({
      payload: { user_id },
      privateKey: process.env.LOGIN_SECRECT_KEY,
    });
  }
  async login(user_id) {
    const access_token = await this.signAccessToken(user_id);
    return { access_token };
  }
  async register(payload) {
    await databaseService.Users.insertOne({ ...payload });
    const access_token = await this.signAccessToken(user_id);
    return { access_token };
  }
}
const userService = new UsersService();
export default userService;
