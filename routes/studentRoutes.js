const express = require('express');
const multer = require('multer');
const path = require('path');

const { createStudent, showstudent } = require('../controllers/studentController');


const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    },
});

const upload = multer({ storage });


router.post('/', upload.single('picture'), createStudent);

router.get('/', showstudent);

module.exports = router;
