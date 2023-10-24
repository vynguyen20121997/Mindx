import bcrypt from "bcryptjs";

export const registerController = async (req, res, next) => {
  // const result = await userService.register(req.body);

  const { email, password, fullname } = req.body;

  //   1. Validation
  if (!(email && password && fullname)) {
    return res.status(400).json({
      message: "Missing required keys",
    });
  }

  // 2. Check duplicate
  const existingUser = userService.find((u) => u.email === email);

  if (existingUser) {
    return res.status(400).json({
      message: "Email is already taken",
    });
  }

  //   // 3. Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // 3. Create new user
  const newUser = {
    email,
    password,
    fullname,
    id: uuidv4(),
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
  res.status(201).json(
    {
      message: "User has been created successfully",
    },
    createdUser
  );
};
