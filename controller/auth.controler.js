import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import databaseService from "../services/database.service.js";
import { signToken } from "../component/services.js";
import { uuid } from "uuidv4";
import { ObjectId } from "mongodb";
const registerController = asyncHandler(async (req, res, next) => {
  // const result = await userService.register(req.body);

  const { email, password, fullname } = req.body;

  //   1. Validation
  if (!(email && password && fullname)) {
    return res.status(400).json({
      message: "thieu gi kia",
    });
  }

  // 2. Check duplicate
  const existingUser = await databaseService.users.findOne({ email });

  if (existingUser) {
    res.status(400);
    throw new Error("email co roi");
  }

  //   // 3. Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // // 3. Create new user
  const newUser = {
    fullname,
    email,
    password: hashedPassword,
    id: uuid(),
    createdAt: new Date(),
  };

  // 4. Add to database
  await databaseService.users.insertOne(newUser);

  const createdUser = await databaseService.users.findOne(
    { email },
    {
      projection: {
        password: 0,
      },
    }
  );

  // 5. Response to client
  res.status(201).json({
    message: "User has been created successfully",
    user: createdUser,
  });
});

const loginControler = async (req, res) => {
  const { email, password } = req.body || {};

  // 2. Check email
  const existingUser = await databaseService.users.findOne({ email });
  if (!existingUser) {
    res.status(400);
    throw new Error("Invalid credentials");
  }

  // 3. Check password
  const isMatchedPassword = await bcrypt.compare(
    password,
    existingUser.password
  );

  if (!isMatchedPassword) {
    res.status(400);
  }

  // 4. Phát hành 1 tấm vé (accessToken) bằng JSON Web Token
  const payload = {
    id: existingUser._id,
    email: existingUser.email,
  };
  const privateKey = "LELEL@";

  const token = await signToken({
    payload,
    privateKey,
    options: {
      expiresIn: 50000,
    },
  });

  //  5. Response
  res.json({
    message: "Login successfully",
    accessToken: token,
  });
};

const fetchCurrentUser = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const currentUser = await databaseService.users.findOne(
    { _id: new ObjectId(userId) },
    {
      projection: {
        password: 0,
        _id: 0,
      },
    }
  );

  if (!currentUser) {
    res.status(401);
    throw new Error("Unauthorized, please try again!");
  }

  res.json(currentUser);
});

const AuthController = {
  registerController,
  loginControler,
  fetchCurrentUser,
};
export default AuthController;
