const express = require('express');
const multer = require('multer');
const path = require('path');
const { createStudent, showstudent, deletestudent, updatestudent } = require('../controllers/studentController');

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


router.post('/students', upload.single('picture'), createStudent); 
router.get('/students', showstudent); 
router.delete('/students/:id', deletestudent); 
router.put('/students/:id', updatestudent); 

module.exports = router;
