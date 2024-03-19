const Project = require('../models/projectModel')
const asyncHandler = require('express-async-handler')

const getProjects = asyncHandler(async (req, res) => {
    console.log("awaiting get projects controller")
    // todo: look into type Project? .find needs a pointer to refer to
    // for now removing find
    const projects = await Project
    console.log(projects[0])
    res.json(projects)
})

module.exports = {
    getProjects
}
