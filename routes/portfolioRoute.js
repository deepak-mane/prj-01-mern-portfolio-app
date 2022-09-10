const router = require('express').Router()
const {
    Intro,
    About,
    Project,
    Experience,
    Course,
    Contact
} = require('../models/portfolioModel')
const { Users } = require('../models/userModel')

// get all portfolio data
router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intros = await Intro.find()
        const abouts = await About.find()
        const projects = await Project.find()
        const experiences = await Experience.find()
        const courses = await Course.find()
        const contacts = await Contact.find()

        res.status(200).send({
            intro: intros[0],
            about: abouts[0],
            projects: projects,
            experiences: experiences,
            courses: courses,
            contacts: contacts[0]
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

// udpate intro data
router.post('/update-intro', async (req, res) => {
    try {
        const intro = await Intro.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        )
        res.status(200).send({
            data: intro,
            success: true,
            message: 'Intro updated successfully'
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

// udpate about data
router.post('/update-about', async (req, res) => {
    try {
        const about = await About.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        )
        res.status(200).send({
            data: about,
            success: true,
            message: 'About updated successfully'
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

// Add experiences
router.post('/add-experience', async (req, res) => {
    try {
        const experience = new Experience(req.body)
        await experience.save()
        res.status(200).send({
            data: experience,
            success: true,
            message: 'Experience added successfully'
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

// Update experiences
router.post('/update-experience', async (req, res) => {
    try {
        const experience = await Experience.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        )
        res.status(200).send({
            data: experience,
            success: true,
            message: 'Experience updated successfully'
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

// Delete experiences
router.post('/delete-experience', async (req, res) => {
    try {
        const experience = await Experience.findOneAndDelete(
            { _id: req.body._id }
        )
        res.status(200).send({
            data: experience,
            success: true,
            message: 'Experience deleted successfully'
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

// Add projects
router.post('/add-project', async (req, res) => {
    try {
        const project = new Project(req.body)
        await project.save()
        res.status(200).send({
            data: project,
            success: true,
            message: 'Project added successfully'
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

// Update projects
router.post('/update-project', async (req, res) => {
    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        )
        res.status(200).send({
            data: project,
            success: true,
            message: 'Project updated successfully'
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

// Delete projects
router.post('/delete-project', async (req, res) => {
    try {
        const project = await Project.findOneAndDelete(
            { _id: req.body._id }
        )
        res.status(200).send({
            data: project,
            success: true,
            message: 'Project deleted successfully'
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

// Add courses
router.post('/add-course', async (req, res) => {
    try {
        const course = new Course(req.body)
        await course.save()
        res.status(200).send({
            data: course,
            success: true,
            message: 'Course added successfully'
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

// Update courses
router.post('/update-course', async (req, res) => {
    try {
        const course = await Course.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        )
        res.status(200).send({
            data: course,
            success: true,
            message: 'Course updated successfully'
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

// Delete courses
router.post('/delete-course', async (req, res) => {
    try {
        const course = await Course.findOneAndDelete(
            { _id: req.body._id }
        )
        res.status(200).send({
            data: course,
            success: true,
            message: 'Course deleted successfully'
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

// udpate Contact data
router.post('/update-contact', async (req, res) => {
    try {
        const contact = await Contact.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        )
        res.status(200).send({
            data: contact,
            success: true,
            message: 'Contact updated successfully'
        })
    } catch (error) {
        res.status(500).send(error)
    }
})


// admin login
router.post('/admin-login', async (req, res) => {
    try {
        const user = await Users.findOne({ username: req.body.username, password: req.body.password})
        user.password = '';
        if(user){
            res.status(200).send({
                data: user,
                success: true,
                message: 'Login successfully'
            })
        } else {
            res.status(204).send({
                data: user,
                success: false,
                message: 'Invalid credentials!!!'
            })
        }

    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports = router