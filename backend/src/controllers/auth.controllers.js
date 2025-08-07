import { User } from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";
import cloudinary from "../config/cloudinary.js";

export const signUp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { name, email, password } = req.body;
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res
        .status(400)
        .json({ message: "Email already exists, choose another one" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const id = Math.floor(Math.random() * 100) + 1; // generate a num between 1-100
    const randomAvatar = `https://avatar.iran.liara.run/public/${id}.png`;

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      profilePic: randomAvatar,
    });

    const token = jwt.sign({ id: user._id }, process.env.Jwt_Secret_key, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.Node_ENV === "production",
    });

    res.status(200).json({
      message: "SignUp Successful",
      user: {
        _id: user._id,
        name,
        email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.Jwt_Secret_key, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: true,
      secure: process.env.Node_ENV === "production",
    });

    res.status(200).json({
      message: "Login Successful",
      user: {
        _id: user._id,
        name: user.name,
        email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(201).json({ message: "Logged Out Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({
      $and: [
        { _id: { $ne: req.user._id } },
        { _id: { $nin: req.user.friends } },
      ],
    }).select("-password");
    res.status(201).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getUser = async (req, res) => {
  try {
    const { userToFindemail } = req.body;
    const user = await User.findOne({ email: userToFindemail })
      .select("-password")
      .select("-friends");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (userToFindemail === req.user.email) {
      return res.status(400).json({ message: "You cannot search yourself" });
    }
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// to work on update
export const updateUser = async (req, res) => {
  try {
    const { name, bio, profilePic } = req.body;
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res
        .status(400)
        .json({ message: "Email already exists, choose another one" });
    }

    let imageUrl;
    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }
    const user = req.user;
    user.name = name;
    user.profilePic = imageUrl;
    user.bio = bio;
    await user.save();

    res.status(200).json({ message: "Update Successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const deleteUser = async (req, res) => {
  try {
    // to config Cloudinary
    res.clearCookie("token");
    await User.findByIdAndDelete(req.user._id);

    res.status(200).json({ message: "delete Successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
