import asyncHandler from "express-async-handler";

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "Register User" });
});

// @desc    Auth user/set token
// @route   POST /api/users/auth
// @access  Public
export const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "Auth User" });
});

// @desc    Logout user
// @route   POST /api/users
// @access  Public
export const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "Logout User" });
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "User profile" });
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "Update user profile" });
});
