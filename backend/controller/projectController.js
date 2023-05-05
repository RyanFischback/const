const Project = require('../models/projectModel')
const asyncHandler = require('express-async-handler')

const getProjects = asyncHandler(async (req, res) => {
    console.log("awaiting get projects controller")
    const projects = await Project.find()
    console.log(projects[0])
    res.json(projects)
})

module.exports = {
    getProjects
}
