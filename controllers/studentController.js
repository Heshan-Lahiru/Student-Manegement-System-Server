const Student = require('../models/studentModel');
const path = require('path');

const createStudent = async (req, res) => {
    try {
        const { name, age, contact, guardian_name, guardian_age, guardian_contact } = req.body;
        const picture = req.file ? req.file.path : null; 

        const newStudentData = {
            name,
            age,
            contact,
            guardian_name,
            guardian_age,
            guardian_contact,
            picture,
        };

        Student.create(newStudentData, (error, results) => {
            if (error) {
                return res.status(500).json({ error: error.message || 'Failed to register student' });
            }
            res.status(201).json({ message: 'Student registered successfully!', studentId: results.insertId });
            console.log(age,name,guardian_name);
        });
    } catch (error) {
        console.error('Error saving student:', error);
        res.status(500).json({ error: error.message || 'An error occurred while saving the student.' });
    }
};

module.exports = { createStudent };
