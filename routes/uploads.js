const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')


router.post('/patients/uploadImage', upload.image(), (req, res) => {
    console.log(req.file)
    res.json(req.file)
})

module.exports = router