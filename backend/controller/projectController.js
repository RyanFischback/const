const Project = require('../models/projectModel')
const asyncHandler = require('express-async-handler')

const getProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find()
    res.json(projects)
})

module.exports = {
    getProjects
}
