import User from "../model/user.model.js";

// registerApi
const register = async (req, res) => {
  try {
    const { fullname, email, phone, password } = req.body;
    if (!fullname || !email || !phone || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
    const userexist = await User.findOne({ email });
    if (userexist) {
      return res.status(400).json({ message: "User already exists" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }
    const hashedPassword = await User.hashPassword(password);
    const avtar = `https://avatar.iran.liara.run/username?username=${fullname}`;
    const newUser = new User({
      fullname,
      email,
      phone,
      password: hashedPassword,
      avtar,
    });
    await newUser.save();
    const token = await newUser.generateAuthToken();
    res
      .status(201)
      .json({ token, newUser, message: "User registered successfully" });
  } catch (error) {
    console.log("Error in register", error.message);
  }
};
// Login Api
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Input the Right Password" });
    }

    const token = await user.generateAuthToken();
    res
      .status(200)
      .json({ token, user, message: "User logged in successfully" });
  } catch (error) {
    console.log("Error in login", error.message);
  }
};

// Logout Api
const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.log("Error in logout", error.message);
  }
};

// delete user
const deleteUser = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(400).json({ message: "User is not authenticated" });
    }

    const user = await User.findByIdAndDelete(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log("Error in deleteUser", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export { register, login, logout, deleteUser };
