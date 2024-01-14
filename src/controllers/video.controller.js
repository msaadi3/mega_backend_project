import mongoose, { isValidObjectId } from "mongoose";
import { Video } from '../models/video.model.js'
import { User } from "../models/user.model.js";
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.service.js";


// @desc    Get all videos based on query, sort, pagination
const getAllVideos = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query
})


// @desc    Get video, upload on cloudinary, create video
const publishVideo = asyncHandler(async (req, res) => {
    const { title, description } = req.body
})



// @desc    update video details like title, description, thumbnail
const updateVideoDetails = asyncHandler(async (req, res) => {
    const { videoId } = req.params
})


const getVideoById = asyncHandler(async (req, res) => {
    const { videoId } = req.params
})


const deleteVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params
})


const togglePublishStatus = asyncHandler(async (req, res) => {
    const { videoId } = req.params
})


export {
    getAllVideos,
    publishVideo,
    updateVideoDetails,
    getVideoById,
    deleteVideo,
    togglePublishStatus
}